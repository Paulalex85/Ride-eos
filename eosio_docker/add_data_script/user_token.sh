#!/usr/bin/env bash

cleos push action eosio.token create '["eosio.token","1000000.0000 SYS"]' -p eosio.token@active
cleos push action eosio.token issue '{"to":"tester","quantity":"5000.0000 SYS","memo":""}' -p eosio.token


#cleos set account permission tester active '{"threshold": 1,"keys": [{"key": "EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p tester@active
sleep 1
cleos set account permission rideos active '{"threshold": 1,"keys": [{"key": "EOS6PUh9rs7eddJNzqgqDx1QrspSHLRxLMcRdwHZZRL4tpbtvia5B","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"eosio.code"},"weight":1}]}' owner -p rideos
sleep 1
cleos push action rideos adduser '["tester","usertest1"]' -p tester
sleep 1
cleos push action rideos deposit '["tester", "100.0000 SYS"]' -p tester
sleep 1
cleos push action rideos withdraw '["tester", "50.0000 SYS"]' -p tester

cleos get table eosio.token tester accounts
cleos get table rideos rideos user