#!/usr/bin/env bash

./order_different_initialize.sh

cleos push action rideos addoffer '["0"]' -p tester

cleos get table rideos rideos offer
cleos get table rideos rideos order
sleep 1

cleos push action rideos canceloffer '["0"]' -p tester
sleep 1
cleos push action rideos deleteoffer '["0"]' -p seller
cleos get table rideos rideos offer