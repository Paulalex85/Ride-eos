#!/usr/bin/env bash

cleos push action rideom addplace '["FRA", "44000"]' -p rideom
cleos push action rideom addplace '["FRA", "44800"]' -p rideom

cleos get table rideom rideom place