#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./market_places.sh

cleos push action rideom newassign '["tester", "0"]' -p tester
cleos push action rideom newassign '["tester", "1"]' -p tester

cleos get table rideom rideom assignment
sleep 1

cleos push action rideom endassign '["0"]' -p tester
cleos push action rideom newassign '["tester", "1"]' -p tester

sleep 5
cleos push action rideom newassign '["tester", "1"]' -p tester
cleos get table rideom rideom assignment