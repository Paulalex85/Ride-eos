#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./market_places.sh

cleos push action rideom deleteplace '["1"]' -p rideom

cleos get table rideom rideom place