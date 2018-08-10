import node
import sess
import time
import eosf
from termcolor import cprint

node.reset()
sess.init()

account = eosf.account(sess.eosio)
sess.wallet.import_key(account)
contractToken = eosf.Contract(account, "eosio.token")
contractToken.deploy()
assert(not contractToken.error)

buyer = eosf.account(sess.eosio)
sess.wallet.import_key(buyer)
assert(not buyer.error), "Buyer account creation problem"

seller = eosf.account(sess.eosio)
sess.wallet.import_key(seller)
assert(not seller.error), "Seller account creation problem"

buyer = eosf.account(sess.eosio)
sess.wallet.import_key(buyer)
assert(not buyer.error), "Buyer account creation problem"

deliver = eosf.account(sess.eosio)
sess.wallet.import_key(deliver)
assert(not deliver.error), "Deliver account creation problem"

cprint("Add User contract...", 'blue')

contractUserB = eosf.Contract(buyer, "contracts/Users")
assert(not contractUserB.error), "Contract assign problem"
contractUserB.deploy()
assert(not contractUserB.error), "Contract deploy problem"

assert(not contractUserB.push_action("add", '{"account":"'+str(buyer) + '", "username":"' + str(buyer) + '"}', buyer,output=True).error), "Failed to deploy Users contract"

contractUserS = eosf.Contract(seller, "contracts/Users")
assert(not contractUserS.error), "Contract assign problem"
contractUserS.deploy()
assert(not contractUserS.error), "Contract deploy problem"

assert(not contractUserS.push_action("add", '{"account":"'+str(seller) + '", "username":"' + str(seller) + '"}', seller,output=True).error), "Failed to deploy Users contract"

contractUserD = eosf.Contract(deliver, "contracts/Users")
assert(not contractUserD.error), "Contract assign problem"
contractUserD.deploy()
assert(not contractUserD.error), "Contract deploy problem"

assert(not contractUserD.push_action("add", '{"account":"'+str(deliver) + '", "username":"' + str(deliver) + '"}', deliver,output=True).error), "Failed to deploy Users contract"

assert(not contractUserB.push_action("getuser", '{"account":"'+str(buyer) + '"}', buyer,output=True).error), "Failed to call the getuser function"

assert(not contractUserB.push_action("update", '{"account":"'+str(buyer) + '", "username":"testUpdateBuyer"}', buyer,output=True).error), "Failed to update Users contract"

cprint("Username should be : testUpdateBuyer", 'blue')
time.sleep(0.5)
assert(not contractUserB.push_action("getuser", '{"account":"'+str(buyer) + '"}', buyer,output=True).error), "Failed to call the getuser function"

cprint("Create tokens", 'blue')

assert(not contractToken.push_action("create", '{"issuer":"' + str(sess.eosio) + '", "maximum_supply":"1000000000.0000 SYS", "can_freeze":0, "can_recall":0, "can_whitelist":0}').error)

assert(not contractToken.push_action("issue", '{"to":"' + str(buyer) + '", "quantity":"100.0000 SYS", "memo":"memo"}', sess.eosio,output=True).error)

contractToken.table("accounts", buyer)
contractUserB.table("user",buyer)

assert(not contractUserB.push_action("deposit", '{"account":"'+str(buyer) + '", "quantity":"50.0000 SYS"}', buyer,output=True).error)

contractToken.table("accounts", buyer)
contractUserB.table("user",buyer)

assert(not contractUserB.push_action("withdraw", '{"account":"'+str(buyer) + '", "quantity":"50.0000 SYS"}', buyer,output=True).error)

contractToken.table("accounts", buyer)
contractUserB.table("user",buyer)

exit()