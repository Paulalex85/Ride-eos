import node
import sess
import time
import eosf
from termcolor import cprint

node.reset()
sess.init()

seller = eosf.account(sess.eosio)
sess.wallet.import_key(seller)
assert(not seller.error), "Seller account creation problem"

#test deploy
contract = eosf.Contract(seller, "contracts/Products")
assert(not contract.error), "Contract assign problem"
contract.deploy()
assert(not contract.error), "Contract deploy problem"

cprint("Testing Product contract...", 'blue')

assert(not contract.push_action("add", '{"account":"'+str(seller) + '", "title":"product1", "description":"descr1","price":50,"available":true}', seller,output=True).error), "Failed to add"

assert(not contract.push_action("getprodbyusr", '{"account":"'+str(seller) + '"}', seller,output=True).error), "Failed to get by usr"

assert(not contract.push_action("update", '{"account":"'+str(seller) + '", "productKey":0, "description":"descr1updated","price":20,"available":true}', seller,output=True).error), "Failed to update"

assert(not contract.push_action("getprodbyid", '{"productKey":0}', seller,output=True).error), "Failed to get by id"

contract.table("product",seller)