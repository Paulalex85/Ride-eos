#!/usr/bin/env bash

./init_test_account.sh

cleos push action rideos deposit '["tester", "100.0000 SYS"]' -p tester
sleep 1

cleos push action rideor initialize '["tester", "seller", "rider"]' -p tester

keyTester=$(openssl rand -base64 32)
keySeller=$(openssl rand -base64 32)

hashTester=$(echo -n $keyTester | xxd -r -p | sha256sum -b | awk '{print $1}')
hashSeller=$(echo -n $keySeller | xxd -r -p | sha256sum -b | awk '{print $1}')

echo $keyTester
echo $keySeller
echo $hashTester
echo $hashSeller

cleos get table rideor rideor order