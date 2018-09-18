#!/usr/bin/env bash

cd "/opt/eosio/bin/tests"
./market_add_offer.sh

cleos push action rideom endoffer '["0"]' -p tester

cleos get table rideom rideom offer
sleep 1

cleos push action rideom addapply '["rider","0"]' -p rider
cleos get table rideom rideom apply
sleep 1

cleos push action rideom cancelapply '["0"]' -p rider
cleos get table rideom rideom apply
sleep 1

cleos push action rideom addapply '["rider","0"]' -p rider
cleos get table rideom rideom apply
sleep 1

cleos push action rideom endoffer '["0"]' -p tester
cleos get table rideom rideom apply
cleos get table rideom rideom offer
cleos get table rideor rideor order