#!/usr/bin/env bash
set -o errexit

source constant.sh

# change to script's directory
cd "$(dirname "$0")/eosio_docker"

if [ -e "data/initialized" ]
then
    script="./scripts/continue_blockchain.sh"
else
    script="./scripts/init_blockchain.sh"
fi

# --mount type=bind,src="$(pwd)"/contracts,dst=/opt/eosio/bin/contracts \
# --mount type=bind,src="$(pwd)"/add_data_script,dst=/opt/eosio/bin/add_data_script \
# --mount type=bind,src="$(pwd)"/data,dst=/mnt/dev/data \
echo "=== run docker container from the $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG image ==="
docker run --rm --name eosio_rideos_container -d \
-p 8888:8888 -p 9876:9876 \
--mount type=bind,src="$(pwd)"/contracts,dst=/opt/eosio/bin/contract \
--mount type=bind,src="$(pwd)"/add_data_script,dst=/opt/eosio/bin/add_data_script \
--mount type=bind,src="$(pwd)"/data,dst=/mnt/dev/data \
--mount type=bind,src="$(pwd)"/scripts,dst=/opt/eosio/bin/scripts \
-w "/opt/eosio/bin/" $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG /bin/bash -c "$script"

if [ "$1" != "--nolog" ]
then
    echo "=== follow eosio_rideos_container logs ==="
    docker logs eosio_rideos_container --follow
fi