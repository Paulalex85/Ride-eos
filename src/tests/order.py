import node
import sess
import time
import eosf
import random
import hashlib
from termcolor import cprint

node.reset()
sess.init()

seller = eosf.account(sess.eosio)
sess.wallet.import_key(seller)
assert(not seller.error), "Seller account creation problem"

buyer = eosf.account(sess.eosio)
sess.wallet.import_key(buyer)
assert(not buyer.error), "Buyer account creation problem"

deliver = eosf.account(sess.eosio)
sess.wallet.import_key(deliver)
assert(not deliver.error), "Deliver account creation problem"

#test deploy
contractOrder = eosf.Contract(buyer, "contracts/Orders")
assert(not contractOrder.error), "Contract assign problem"
contractOrder.deploy()
assert(not contractOrder.error), "Contract deploy problem"

cprint("Initialize Product contract...", 'blue')

contractProduct = eosf.Contract(seller, "contracts/Products")
assert(not contractProduct.error), "Contract assign problem"
contractProduct.deploy()
assert(not contractProduct.error), "Contract deploy problem"

assert(not contractProduct.push_action("add", '{"account":"'+str(seller) + '", "title":"product1", "description":"descr1","price":50,"available":true}', seller,output=True).error), "Failed to add"

assert(not contractProduct.push_action("add", '{"account":"'+str(seller) + '", "title":"product2", "description":"descr2","price":20,"available":true}', seller,output=True).error), "Failed to add"

cprint("Testing Order contract...", 'blue')

assert(not contractOrder.push_action("initialize", '{"buyer":"'+str(buyer) + '", "seller":"'+str(seller) + '", "deliver":"'+str(deliver) + '"}', buyer,output=True).error), "Failed to initialize"

assert(not contractOrder.push_action("getorder", '{"orderKey":0}', buyer,output=True).error), "Failed to getorder"

cprint("Add product in kart...", 'blue')

assert(not contractOrder.push_action("addinkart", '{"orderKey":0, "productKey":0, "quantity":10}', buyer,output=True).error), "Failed to addinkart"

assert(not contractOrder.push_action("addinkart", '{"orderKey":0, "productKey":1, "quantity":20}', buyer,output=True).error), "Failed to addinkart"

time.sleep(0.5)
assert(not contractOrder.push_action("getorder", '{"orderKey":0}', buyer,output=True).error), "Failed to getorder"

assert(not contractOrder.push_action("deleteinkart", '{"orderKey":0, "productKey":1}', buyer,output=True).error), "Failed to deleteinkart"

time.sleep(0.5)
assert(not contractOrder.push_action("getorder", '{"orderKey":0}', buyer,output=True).error), "Failed to getorder"

cprint("Validate the order by buyer...", 'blue')

ran = random.randrange(10**80)
keyBuyer = "%064x" % ran
keyBuyer = keyBuyer[:64]

hashSignatureBuyer = hashlib.sha256(keyBuyer.encode()).hexdigest()

cprint("Key : " + keyBuyer, 'blue')
cprint("Signature : " + hashSignatureBuyer, 'blue')

assert(not contractOrder.push_action("validateinit", '{"orderKey":0, "commitment":"'+str(hashSignatureBuyer) + '"}', buyer,output=True).error), "Failed to validate"

time.sleep(0.5)
assert(not contractOrder.push_action("getorder", '{"orderKey":0}', buyer,output=True).error), "Failed to getorder"

cprint("Validate the order by deliver...", 'blue')

assert(not contractOrder.push_action("validatedeli", '{"orderKey":0}', deliver,output=True).error), "Failed to validate"

time.sleep(0.5)
assert(not contractOrder.push_action("getorder", '{"orderKey":0}', buyer,output=True).error), "Failed to getorder"

cprint("Validate the order by seller...", 'blue')

ran = random.randrange(10**80)
keySeller = "%064x" % ran
keySeller = keySeller[:64]
hashSignatureSeller = hashlib.sha256((keySeller+"\n").encode()).hexdigest()

cprint("Key : " + keySeller, 'blue')
cprint("Signature : " + hashSignatureSeller, 'blue')

assert(not contractOrder.push_action("validatesell", '{"orderKey":0, "commitment":"'+str(hashSignatureSeller) + '"}', seller,output=True).error), "Failed to validate"

time.sleep(0.5)
assert(not contractOrder.push_action("getorder", '{"orderKey":0}', buyer,output=True).error), "Failed to getorder"

cprint("Order ready...", 'blue')

assert(not contractOrder.push_action("productready", '{"orderKey":0}', seller,output=True).error), "Failed to product ready"

time.sleep(0.5)
assert(not contractOrder.push_action("getorder", '{"orderKey":0}', buyer,output=True).error), "Failed to getorder"

cprint("Order taken...", 'blue')

contractOrder.table("order",buyer)

assert(not contractOrder.push_action("ordertaken", '{"orderKey":0, "source":"'+keySeller + '","commitment":"'+hashSignatureSeller + '"}', deliver,output=True).error), "Failed to taken"

time.sleep(0.5)
assert(not contractOrder.push_action("getorder", '{"orderKey":0}', buyer,output=True).error), "Failed to getorder"

contractOrder.table("order",buyer)

node.stop()
exit()