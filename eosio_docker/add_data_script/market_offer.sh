#!/usr/bin/env bash

./order_different_initialize.sh

cleos push action rideos addoffer '["0"]' -p tester
cleos push action rideos addapply '["rider", "0"]' -p rider

cleos get table rideos rideos apply
cleos get table rideos rideos offer
cleos get table rideos rideos order
sleep 1

cleos push action rideos deleteoffer '["0"]' -p seller
sleep 1

cleos push action rideos canceloffer '["0"]' -p tester
sleep 1

cleos push action rideos cancelapply '["0"]' -p tester
cleos get table rideos rideos apply
cleos get table rideos rideos offer
cleos get table rideos rideos order
sleep 1

cleos push action rideos deleteoffer '["0"]' -p seller
cleos get table rideos rideos apply
cleos get table rideos rideos offer