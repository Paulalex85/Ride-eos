#!/usr/bin/env bash

cleos push action rideos addplace '["0", "World"]' -p rideos
cleos push action rideos addplace '["0", "France"]' -p rideos
cleos push action rideos addplace '["1", "Loire Atlantiquse"]' -p rideos
cleos push action rideos addplace '["1", "Vendee"]' -p rideos

cleos get table rideos rideos place