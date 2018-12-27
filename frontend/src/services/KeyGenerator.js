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

    static storeKey(orderKey, key, hash) {
        var o = {
            order: orderKey,
            key: key,
            hash: hash
        }
        let list = JSON.parse(localStorage.getItem("listKeys")) || initial;

        let founded = false;
        for (let i = 0; i < list.listKeys.length; i++) {
            const element = list.listKeys[i];
            if (element.orderKey === orderKey.toString()) {
                founded = true;
                list.listKeys[i] = o;
            }
        }

        if (founded === false) {
            list.listKeys.push(o);
        }

        localStorage.setItem("listKeys", JSON.stringify(list));
    }
}

export default KeyGenerator;