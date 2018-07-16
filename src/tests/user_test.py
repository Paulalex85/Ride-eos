import sess
import eosf
import node

node.reset()
sess.init()

buyer = eosf.account(sess.eosio)
sess.wallet.import_key(buyer)
assert(not buyer.error), "Buyer account creation problem"

#test deploy
contract = eosf.Contract(buyer, "contracts/Users")
assert(not contract.error), "Contract assign problem"
contract.deploy()
assert(not contract.error), "Contract deploy problem"

#test add
assert(not contract.push_action("add", '{"account":"'+str(buyer) + '", "username":"' + str(buyer) + '"}', buyer).error), "Failed to deploy Users contract"


exit()