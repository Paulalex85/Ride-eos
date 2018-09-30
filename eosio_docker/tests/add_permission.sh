#!/usr/bin/env bash

cleos push action eosio.token create '["eosio.token","1000000.0000 SYS"]' -p eosio.token@active
cleos push action eosio.token issue '{"to":"tester","quantity":"5000.0000 SYS","memo":""}' -p eosio.token

cleos set account permission rideos active '{"threshold": 1,"keys": [{"key": "EOS6PUh9rs7eddJNzqgqDx1QrspSHLRxLMcRdwHZZRL4tpbtvia5B","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"eosio.code"},"weight":1}]}' owner -p rideos
sleep 1

cleos set account permission rideor active '{"threshold": 1,"keys": [{"key": "EOS8BCgapgYA2L4LJfCzekzeSr3rzgSTUXRXwNi8bNRoz31D14en9","weight": 1}],"accounts": [{"permission":{"actor":"rideor","permission":"eosio.code"},"weight":1}]}' owner -p rideor
sleep 1

cleos set account permission rideom active '{"threshold": 1,"keys": [{"key": "EOS5btzHW33f9zbhkwjJTYsoyRzXUNstx1Da9X2nTzk8BQztxoP3H","weight": 1}],"accounts": [{"permission":{"actor":"rideom","permission":"eosio.code"},"weight":1}]}' owner -p rideom