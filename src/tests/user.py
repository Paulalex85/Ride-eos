import node
import sess
import time
import eosf
from termcolor import cprint

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

cprint("Testing User contract...", 'blue')
#test add
assert(not contract.push_action("add", '{"account":"'+str(buyer) + '", "username":"' + str(buyer) + '"}', buyer,output=True).error), "Failed to deploy Users contract"

assert(not contract.push_action("getuser", '{"account":"'+str(buyer) + '"}', buyer,output=True).error), "Failed to call the getuser function"

assert(not contract.push_action("update", '{"account":"'+str(buyer) + '", "username":"testUpdateBuyer"}', buyer,output=True).error), "Failed to update Users contract"

cprint("Username should be : testUpdateBuyer", 'blue')
time.sleep(0.5)
assert(not contract.push_action("getuser", '{"account":"'+str(buyer) + '"}', buyer,output=True).error), "Failed to call the getuser function"

exit()