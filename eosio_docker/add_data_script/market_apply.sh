#!/usr/bin/env bash

./market_offer.sh

cleos push action rideos addapply '["rider", "0"]' -p rider

cleos get table rideos rideos apply