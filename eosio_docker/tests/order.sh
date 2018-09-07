#!/usr/bin/env bash

./init_test_account.sh

cleos push action rideos deposit '["tester", "100.0000 SYS"]' -p tester
sleep 1

cleos set account permission tester active '{"threshold": 1,"keys": [{"key": "EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p","weight": 1}],"accounts": [{"permission":{"actor":"rideor","permission":"active"},"weight":1}]}' owner -p tester@active
cleos set account permission rider active '{"threshold": 1,"keys": [{"key": "EOS8LoJJUU3dhiFyJ5HmsMiAuNLGc6HMkxF4Etx6pxLRG7FU89x6X","weight": 1}],"accounts": [{"permission":{"actor":"rideor","permission":"active"},"weight":1}]}' owner -p rider@active
cleos set account permission seller active '{"threshold": 1,"keys": [{"key": "EOS5yd9aufDv7MqMquGcQdD6Bfmv6umqSuh9ru3kheDBqbi6vtJ58","weight": 1}],"accounts": [{"permission":{"actor":"rideor","permission":"active"},"weight":1}]}' owner -p seller@active
sleep 1

cleos push action rideor initialize '["tester", "seller", "rider"]' -p tester

keyTester=$(openssl rand -hex 32)
keySeller=$(openssl rand -hex 32)

hashTester=$(echo -n $keyTester | xxd -r -p | sha256sum -b | awk '{print $1}')
hashSeller=$(echo -n $keySeller | xxd -r -p | sha256sum -b | awk '{print $1}')

echo $keyTester
echo $keySeller
echo $hashTester
echo $hashSeller

cleos push action rideor validateinit '["0", "'$hashTester'"]' -p tester
cleos push action rideor validatedeli '["0"]' -p rider
cleos push action rideor validatesell '["0", "'$hashSeller'"]' -p seller
cleos push action rideor productready '["0"]' -p seller
cleos push action rideor ordertaken '["0", "'$keySeller'"]' -p rider
cleos push action rideor orderdelive '["0", "'$keyTester'"]' -p rider

cleos get table rideor rideor order