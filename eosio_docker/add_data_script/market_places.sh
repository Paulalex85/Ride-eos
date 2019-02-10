#!/usr/bin/env bash

cleos push action rideom addplace '["0", "World"]' -p rideom
cleos push action rideom addplace '["0", "France"]' -p rideom
cleos push action rideom addplace '["1", "Loire Atlantiquse"]' -p rideom
cleos push action rideom addplace '["1", "Vendee"]' -p rideom

cleos get table rideom rideom place