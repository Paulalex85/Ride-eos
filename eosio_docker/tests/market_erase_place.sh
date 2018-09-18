#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./market_places.sh

cleos push action rideom newassign '["tester", "1"]' -p tester
cleos push action rideom newassign '["rider", "1"]' -p rider
cleos get table rideom rideom assignment
sleep 1

cleos push action rideom deleteplace '["1"]' -p rideom

cleos get table rideom rideom place
cleos get table rideom rideom assignment