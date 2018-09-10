#!/usr/bin/env bash

cleos push action rideos deposit '["tester", "500.0000 SYS"]' -p tester
sleep 1

cleos set account permission rideor active '{"threshold": 1,"keys": [{"key": "EOS8BCgapgYA2L4LJfCzekzeSr3rzgSTUXRXwNi8bNRoz31D14en9","weight": 1}],"accounts": [{"permission":{"actor":"rideor","permission":"eosio.code"},"weight":1}]}' owner -p rideor@active
sleep 1

cleos set account permission tester active '{"threshold": 1,"keys": [{"key": "EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p","weight": 1}],"accounts": [{"permission":{"actor":"rideor","permission":"active"},"weight":1}]}' owner -p tester@active
cleos set account permission rider active '{"threshold": 1,"keys": [{"key": "EOS8LoJJUU3dhiFyJ5HmsMiAuNLGc6HMkxF4Etx6pxLRG7FU89x6X","weight": 1}],"accounts": [{"permission":{"actor":"rideor","permission":"active"},"weight":1}]}' owner -p rider@active
cleos set account permission seller active '{"threshold": 1,"keys": [{"key": "EOS5yd9aufDv7MqMquGcQdD6Bfmv6umqSuh9ru3kheDBqbi6vtJ58","weight": 1}],"accounts": [{"permission":{"actor":"rideor","permission":"active"},"weight":1}]}' owner -p seller@active
sleep 1