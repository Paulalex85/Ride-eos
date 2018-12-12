#!/usr/bin/env bash

cleos set account permission rideom active '{"threshold": 1,"keys": [{"key": "EOS5btzHW33f9zbhkwjJTYsoyRzXUNstx1Da9X2nTzk8BQztxoP3H","weight": 1}],"accounts": [{"permission":{"actor":"rideom","permission":"eosio.code"},"weight":1}]}' owner -p rideom
cleos set account permission tester active '{"threshold": 1,"keys": [{"key": "EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p","weight": 1}],"accounts": [{"permission":{"actor":"rideom","permission":"active"},"weight":1}]}' owner -p tester@active
cleos set account permission rider active '{"threshold": 1,"keys": [{"key": "EOS8LoJJUU3dhiFyJ5HmsMiAuNLGc6HMkxF4Etx6pxLRG7FU89x6X","weight": 1}],"accounts": [{"permission":{"actor":"rideom","permission":"active"},"weight":1}]}' owner -p rider@active
sleep 1