#!/usr/bin/env bash

./market_offer.sh

cleos push action rideos addapply '["rider", "0"]' -p rider
cleos get table rideos rideos apply
sleep 1

cleos push action rideos cancelapply '["0"]' -p rider
cleos get table rideos rideos apply
sleep 1

cleos push action rideos addapply '["rider", "0"]' -p rider
cleos push action rideos cancelapply '["0"]' -p tester
cleos get table rideos rideos apply
sleep 1

cleos push action rideos canceloffer '["0"]' -p tester
cleos push action rideos cancelapply '["0"]' -p tester
cleos get table rideos rideos offer
cleos get table rideos rideos apply
