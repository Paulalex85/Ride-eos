#!/usr/bin/env bash

./market_offer.sh

cleos push action rideom addapply '["rider", "0"]' -p rider

cleos get table rideom rideom apply