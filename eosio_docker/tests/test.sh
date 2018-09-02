#!/usr/bin/env bash
#User test
#cleos push action tester add '["tester","usertest1"]' -p tester@active
#cleos push action rider add '["rider","rider"]' -p rider@active
#cleos push action buyer add '["buyer","buyer"]' -p buyer@active

cleos push action eosio.token create '["eosio.token","1000000.0000 SYS"]' -p eosio.token@active
cleos push action eosio.token issue '{"to":"tester","quantity":"5000.0000 SYS","memo":""}' -p eosio.token


cleos set account permission tester active '{"threshold": 1,"keys": [{"key": "EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p tester@active
sleep 1
cleos set account permission rideos active '{"threshold": 1,"keys": [{"key": "EOS8BCgapgYA2L4LJfCzekzeSr3rzgSTUXRXwNi8bNRoz31D14en9","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"eosio.code"},"weight":1}]}' owner -p rideos
sleep 1
cleos push action rideos add '["tester","usertest1"]' -p tester
sleep 1
cleos push action rideos deposit '["tester", "100.0000 SYS"]' -p tester

cleos get table eosio.token tester accounts
cleos get table rideos rideos user

#cleos push action tester getuser '["tester"]' -p tester@active
#cleos push action tester update '["tester","usertest2"]' -p tester@active
#cleos push action tester getuser '["tester"]' -p tester@active

#Product test

#cleos set contract tester ../build ../build/Products.wast ../build/Products.abi
#cleos push action tester add '["tester","product1","test product",12,true]' -p tester@active
#cleos push action tester add '["tester","product2","test product2",20,true]' -p tester@active
#cleos push action tester getprodbyusr '["tester"]' -p tester@active
#cleos push action tester update '["tester",0,"product cool",10,true]' -p tester@active
#cleos push action tester getprodbyid '[0]' -p tester@active

#Order test

#cleos set contract buyer ../build ../build/Orders.wast ../build/Orders.abi
#cleos push action buyer initialize '["buyer","tester","rider"]' -p buyer@active
#cleos push action buyer getorderbybu '["buyer"]' -p buyer@active
#cleos push action buyer addinkart '[0,"buyer","tester",0,10]' -p buyer@active
#cleos push action buyer addinkart '[1,"buyer","tester",0,10]' -p buyer@active
#sleep 1
#cleos push action buyer getorderbybu '["buyer"]' -p buyer@active
#cleos push action buyer deleteinkart '[0,"buyer","tester",0,10]' -p buyer@active

