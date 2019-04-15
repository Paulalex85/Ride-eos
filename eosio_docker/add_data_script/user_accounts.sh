#!/usr/bin/env bash

cleos push action eosio.token create '["eosio.token","1000000.0000 SYS"]' -p eosio.token@active
cleos push action eosio.token issue '{"to":"tester","quantity":"50000.0000 SYS","memo":""}' -p eosio.token
cleos push action eosio.token issue '{"to":"rider","quantity":"500.0000 SYS","memo":""}' -p eosio.token
cleos push action eosio.token issue '{"to":"seller","quantity":"500.0000 SYS","memo":""}' -p eosio.token
cleos push action eosio.token issue '{"to":"sarabrown","quantity":"500.0000 SYS","memo":""}' -p eosio.token

cleos set account permission rideos active '{"threshold": 1,"keys": [{"key": "EOS8BCgapgYA2L4LJfCzekzeSr3rzgSTUXRXwNi8bNRoz31D14en9","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"eosio.code"},"weight":1}]}' owner -p rideos
cleos set account permission tester active '{"threshold": 1,"keys": [{"key": "EOS6PUh9rs7eddJNzqgqDx1QrspSHLRxLMcRdwHZZRL4tpbtvia5B","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p tester@active
cleos set account permission rider active '{"threshold": 1,"keys": [{"key": "EOS8BCgapgYA2L4LJfCzekzeSr3rzgSTUXRXwNi8bNRoz31D14en9","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p rider@active
cleos set account permission seller active '{"threshold": 1,"keys": [{"key": "EOS5btzHW33f9zbhkwjJTYsoyRzXUNstx1Da9X2nTzk8BQztxoP3H","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p seller@active
sleep 1
