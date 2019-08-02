import ecc from 'eosjs-ecc';
import randomstring from 'randomstring';

const initial = {
    listKeys: []
};

class KeyGenerator {

    static generateDataToSign(orderKey, buyer, seller, deliver, date, priceOrder, priceDeliver, details) {
        return "orderKey:" + orderKey
            + ",buyer:" + buyer
            + ",seller:" + seller
            + ",deliver:" + deliver
            + ",date:" + date
            + ",priceOrder:" + priceOrder
            + ",priceDeliver:" + priceDeliver
            + ",details:" + details;
    }

    static sliceData(data) {
        return this.chunk(data, 8).join(' ');
    }

    static chunk(str, n) {
        var ret = [];
        var i;
        var len;

        for (i = 0, len = str.length; i < len; i += n) {
            ret.push(str.substr(i, n))
        }

        return ret
    };

    static verifySign(signature, data, pubkey) {
        return ecc.verify(signature, data, pubkey)
    }


    static async signData(scatter, publicKey, data) {
        try {
            return await scatter.getArbitrarySignature(
                publicKey,
                data,
                'Order key creation',
                true
            );
        } catch (e) {
            console.log(e)
        }
    }

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