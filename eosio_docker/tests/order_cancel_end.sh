#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./init_test_account.sh
./init_order.sh

cleos push action rideor initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS", "jambon", "4"]' -p tester

keyTester=$(openssl rand -hex 32)
keySeller=$(openssl rand -hex 32)

hashTester=$(echo -n $keyTester | xxd -r -p | sha256sum -b | awk '{print $1}')
hashSeller=$(echo -n $keySeller | xxd -r -p | sha256sum -b | awk '{print $1}')

cleos push action rideor validatebuy '["0", "'$hashTester'"]' -p tester
cleos get table rideos rideos user
cleos get table rideor rideor order
sleep 1

cleos push action rideor validatedeli '["0"]' -p rider
cleos push action rideor validatesell '["0", "'$hashSeller'"]' -p seller
cleos push action rideor orderready '["0"]' -p seller
cleos push action rideor ordertaken '["0", "'$keySeller'"]' -p rider
cleos push action rideor delaycancel '["0"]' -p tester
sleep 5
cleos push action rideor delaycancel '["0"]' -p tester

cleos get table rideor rideor order
cleos get table rideos rideos user