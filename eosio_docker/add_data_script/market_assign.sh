#!/usr/bin/env bash

./market_places.sh
./user_accounts.sh
./market_perm.sh

cleos push action rideom newassign '["tester", "0"]' -p tester
cleos push action rideom newassign '["tester", "1"]' -p tester

cleos get table rideom rideom assignment