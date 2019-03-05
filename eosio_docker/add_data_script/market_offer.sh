#!/usr/bin/env bash

./order_different_initialize.sh

cleos push action rideos addoffer '["0"]' -p tester

cleos get table rideos rideos offer
cleos get table rideos rideos order