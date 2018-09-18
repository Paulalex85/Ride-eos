#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./market_add_offer.sh

cleos push action rideom canceloffer '["0"]' -p tester

cleos get table rideom rideom offer
cleos get table rideor rideor order
