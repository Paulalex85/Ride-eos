#!/usr/bin/env bash

cleos wallet unlock -n jambon --password PW5HzZAGJinQcavFKsLA54XkMEKR73XFvnJvHoRFNaUoAi93zA1Cz
cleos create account eosio tester EOS7YzFXh4xp2Lnv3qUnoHA8WtudrMjrQPzsmf2hbeHNmzgY85yxq EOS7YzFXh4xp2Lnv3qUnoHA8WtudrMjrQPzsmf2hbeHNmzgY85yxq
cleos create account eosio rider EOS8TXdcwpt9w95NCbq3xshZpbroJc2upvbGF1bFDvbab141tyJdy EOS8TXdcwpt9w95NCbq3xshZpbroJc2upvbGF1bFDvbab141tyJdy
cleos create account eosio buyer EOS6Yjv3vJtfZwXdb2CjFz2B9VZG8QC66zV3SRxLKP4nD4vEjptH7 EOS6Yjv3vJtfZwXdb2CjFz2B9VZG8QC66zV3SRxLKP4nD4vEjptH7
cleos set contract tester ../build ../build/Users.wast ../build/Users.abi
cleos set contract rider ../build ../build/Users.wast ../build/Users.abi
cleos set contract buyer ../build ../build/Users.wast ../build/Users.abi

#User test
cleos push action tester add '["tester","usertest1"]' -p tester@active
cleos push action rider add '["rider","rider"]' -p rider@active
cleos push action buyer add '["buyer","buyer"]' -p buyer@active

cleos push action tester getuser '["tester"]' -p tester@active

cleos push action tester update '["tester","usertest2"]' -p tester@active

cleos push action tester getuser '["tester"]' -p tester@active

#Product test

cleos set contract tester ../build ../build/Products.wast ../build/Products.abi

cleos push action tester add '["tester","product1","test product",12,true]' -p tester@active

cleos push action tester getprodbyusr '["tester"]' -p tester@active

cleos push action tester update '["tester",0,"product cool",10,true]' -p tester@active

cleos push action tester getprodbyid '[0]' -p tester@active

#Order test

cleos set contract buyer ../build ../build/Orders.wast ../build/Orders.abi

cleos push action buyer initialize '["buyer","tester","rider"]' -p buyer@active

cleos push action buyer getorderbybu '["buyer"]' -p buyer@active

cleos push action buyer addinkart '[0,"buyer","tester",0,10]' -p buyer@active

sleep 1

cleos push action buyer getorderbybu '["buyer"]' -p buyer@active

cleos push action buyer deleteinkart '[0,"buyer","tester",0,10]' -p buyer@active

