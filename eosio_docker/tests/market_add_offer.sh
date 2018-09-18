#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./market_places.sh
cleos set account permission rideom active '{"threshold": 1,"keys": [{"key": "EOS5btzHW33f9zbhkwjJTYsoyRzXUNstx1Da9X2nTzk8BQztxoP3H","weight": 1}],"accounts": [{"permission":{"actor":"rideom","permission":"eosio.code"},"weight":1}]}' owner -p rideom
cleos set account permission tester active '{"threshold": 1,"keys": [{"key": "EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p","weight": 1}],"accounts": [{"permission":{"actor":"rideom","permission":"active"},"weight":1}]}' owner -p tester@active
cleos set account permission rider active '{"threshold": 1,"keys": [{"key": "EOS8LoJJUU3dhiFyJ5HmsMiAuNLGc6HMkxF4Etx6pxLRG7FU89x6X","weight": 1}],"accounts": [{"permission":{"actor":"rideom","permission":"active"},"weight":1}]}' owner -p rider@active
sleep 1

cleos push action rideom newassign '["rider", "0"]' -p rider

cleos push action rideor needdeliver '["tester", "seller", ,"50.0000 SYS", "20.0000 SYS", "jambon", "4"]' -p tester

cleos push action rideom addoffer '["0", "0"]' -p tester

cleos get table rideom rideom offer
cleos get table rideor rideor order