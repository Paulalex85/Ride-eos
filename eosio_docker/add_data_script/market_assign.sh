#!/usr/bin/env bash

./market_places.sh
./user_accounts.sh
./market_perm.sh

cleos push action rideos newassign '["tester", "0"]' -p tester
cleos push action rideos newassign '["tester", "1"]' -p tester

cleos get table rideos rideos assignment