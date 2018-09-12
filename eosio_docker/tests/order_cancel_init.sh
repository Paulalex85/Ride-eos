#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./init_test_account.sh
./init_order.sh

keyTester=$(openssl rand -hex 32)
keySeller=$(openssl rand -hex 32)

hashTester=$(echo -n $keyTester | xxd -r -p | sha256sum -b | awk '{print $1}')
hashSeller=$(echo -n $keySeller | xxd -r -p | sha256sum -b | awk '{print $1}')

cleos push action rideor initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","jambon"]' -p tester
cleos push action rideor validatebuy '["0", "'$hashTester'"]' -p tester
cleos push action rideor validatedeli '["0"]' -p rider
cleos push action rideor initcancel '["0", "seller"]' -p seller
sleep 1

cleos push action rideor initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","jambon"]' -p seller
cleos push action rideor validatesell '["1", "'$hashSeller'"]' -p seller
cleos push action rideor validatebuy '["1", "'$hashTester'"]' -p tester
cleos push action rideor initcancel '["1","rider"]' -p rider
sleep 1

cleos push action rideor initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","jambon"]' -p rider
cleos push action rideor validatedeli '["2"]' -p rider
cleos push action rideor validatesell '["2", "'$hashSeller'"]' -p seller
cleos push action rideor initcancel '["2", "tester"]' -p tester

cleos get table rideor rideor order
cleos get table rideos rideos user