#!/usr/bin/env bash

cleos push action eosio.token create '["eosio.token","1000000.0000 SYS"]' -p eosio.token@active
cleos push action eosio.token issue '{"to":"tester","quantity":"50000.0000 SYS","memo":""}' -p eosio.token
cleos push action eosio.token issue '{"to":"rider","quantity":"500.0000 SYS","memo":""}' -p eosio.token
cleos push action eosio.token issue '{"to":"seller","quantity":"500.0000 SYS","memo":""}' -p eosio.token
cleos push action eosio.token issue '{"to":"sarabrown","quantity":"500.0000 SYS","memo":""}' -p eosio.token

cleos set account permission rideos active '{"threshold": 1,"keys": [{"key": "EOS8BCgapgYA2L4LJfCzekzeSr3rzgSTUXRXwNi8bNRoz31D14en9","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"eosio.code"},"weight":1}]}' owner -p rideos
cleos set account permission tester active '{"threshold": 1,"keys": [{"key": "EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p tester@active
cleos set account permission rider active '{"threshold": 1,"keys": [{"key": "EOS8LoJJUU3dhiFyJ5HmsMiAuNLGc6HMkxF4Etx6pxLRG7FU89x6X","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p rider@active
cleos set account permission seller active '{"threshold": 1,"keys": [{"key": "EOS5yd9aufDv7MqMquGcQdD6Bfmv6umqSuh9ru3kheDBqbi6vtJ58","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p seller@active
cleos set account permission sarabrown active '{"threshold": 1,"keys": [{"key": "EOS7XPiPuL3jbgpfS3FFmjtXK62Th9n2WZdvJb6XLygAghfx1W7Nb","weight": 1}],"accounts": [{"permission":{"actor":"rideos","permission":"active"},"weight":1}]}' owner -p sarabrown@active
sleep 1

cleos push action rideos adduser '["tester","tester"]' -p tester
cleos push action rideos adduser '["rider","rid"]' -p rider
cleos push action rideos adduser '["seller","sel"]' -p seller
cleos push action rideos adduser '["sarabrown","sara"]' -p sarabrown
sleep 1

cleos push action rideos deposit '["tester", "10000.0000 SYS"]' -p tester

cleos get table rideos rideos user