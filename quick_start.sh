#!/usr/bin/env bash

# # make sure everything is clean and well setup
./first_time_setup.sh

# # start blockchain and put in background
./start_eosio_docker.sh

# start frontend react app
./start_frontend.sh

# start mongodb and put in background
#./start_mongodb_docker.sh --nolog
