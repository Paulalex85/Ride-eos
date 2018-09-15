#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./init_test_account.sh

cleos push action rideom addplace '["FRA", "44000"]' -p rideom
cleos push action rideom addplace '["FRA", "44800"]' -p rideom

cleos get table rideom rideom place
sleep 1

cleos push action rideom updateplace '["0", "FRA", "44100"]' -p rideom
cleos get table rideom rideom place