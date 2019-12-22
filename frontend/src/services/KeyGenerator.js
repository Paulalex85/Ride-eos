import ecc from 'eosjs-ecc';

class KeyGenerator {

    static generateDataToSign(orderKey, buyer, seller, deliver, date, dateDelay, priceOrder, priceDeliver, details) {
        return "orderKey:" + orderKey
            + ",buyer:" + buyer
            + ",seller:" + seller
            + ",deliver:" + deliver
            + ",date:" + date
            + ",dateDelay:" + dateDelay
            + ",priceOrder:" + priceOrder
            + ",priceDeliver:" + priceDeliver
            + ",details:" + details;
    }

    static sliceData(data) {
        return this.chunk(data, 8).join(' ');
    }

    static chunk(str, n) {
        let ret = [];
        let i;
        let len;

        for (i = 0, len = str.length; i < len; i += n) {
            ret.push(str.substr(i, n))
        }

        return ret
    };

    static verifySign(signature, data, pubkey) {
        return ecc.verify(signature, data, pubkey)
    }

    static async signData(activeUser, publicKey, data) {
        try {
            return await activeUser.signArbitrary(publicKey, data, "Generate order validation key");
        } catch (e) {
            console.log(e)
        }
    }

    static generateHash(key) {
        return ecc.sha256(key);
    }

    static generateSlicedData(order) {
        let data = KeyGenerator.generateDataToSign(order.orderKey, order.buyer, order.seller, order.deliver, new Date(order.date).getTime(), new Date(order.dateDelay).getTime(), order.priceOrder, order.priceDeliver, order.details);
        let hashData = KeyGenerator.generateHash(data);
        return KeyGenerator.sliceData(hashData);
    }

    static generateKeyFromSignature(signature) {
        let key = KeyGenerator.generateHash(signature);
        let hash = KeyGenerator.generateHash(key);

        return {
            key: key,
            hash: hash
        }
    }
}

export default KeyGenerator;