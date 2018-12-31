import ecc from 'eosjs-ecc';
import randomstring from 'randomstring';

const initial = {
    listKeys: []
};

class KeyGenerator {
    static generateKey() {
        return randomstring.generate({
            length: 64,
            charset: 'hex'
        });
    }

    static generateHash(key) {
        return ecc.sha256(new Buffer(key, 'hex'));
    }

    static storeKey(orderKey, key, hash, type) {
        var o = {
            order: orderKey,
            key: key,
            hash: hash,
            type: type
        }
        let list = JSON.parse(localStorage.getItem("listKeys")) || initial;

        let index = this.getIndexKey(list, orderKey, type)

        if (index === -1) {
            list.listKeys.push(o);
        } else {
            list.listKeys[index] = o;
        }

        localStorage.setItem("listKeys", JSON.stringify(list));
    }

    static getKey(orderKey, type) {
        let list = JSON.parse(localStorage.getItem("listKeys")) || initial;

        let index = this.getIndexKey(list, orderKey, type)
        if (index === -1) {
            return undefined
        }
        return list.listKeys[index]
    }

    static getIndexKey(list, orderKey, type) {
        for (let i = 0; i < list.listKeys.length; i++) {
            const element = list.listKeys[i];
            if (element.orderKey === orderKey.toString() && element.type === type) {
                return i
            }
        }
        return -1
    }
}

export default KeyGenerator;