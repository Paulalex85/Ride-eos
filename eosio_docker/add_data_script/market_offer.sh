#!/usr/bin/env bash

./market_places.sh
./user_accounts.sh
./market_assign.sh

cleos push action rideos newassign '["rider", "0"]' -p rider

cleos push action rideos needdeliver '["tester", "seller", ,"50.0000 SYS", "20.0000 SYS", "jambon", "4",0]' -p tester

cleos push action rideos addoffer '["0", "0"]' -p tester

cleos get table rideos rideos offer
cleos get table rideos rideos order