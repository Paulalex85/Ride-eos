#!/usr/bin/env bash
set -o errexit

echo "=== start of first time setup ==="

# change to script's directory
cd "$(dirname "$0")"

# make sure Docker and Node.js is installed
if [ ! -x "$(command -v docker)" ]; then
    echo ""
    echo -e "\033[0;31m[Error with Exception]\033[0m"
    echo "Please make sure Docker and Node.js are installed"
    echo ""
    echo "Install Docker: https://docs.docker.com/docker-for-mac/install/"
    echo "Install Node.js: https://nodejs.org/en/"
    echo ""
    exit
fi

# download jq for json reader, we use jq here for reading the json file ( accounts.json )

mkdir -p ~/bin && curl -sSL -o ~/bin/jq https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64 && chmod +x ~/bin/jq && export PATH=$PATH:~/bin


# download eosio/eos-dev:v1.1.0 image
echo "=== pull eosio/eos-dev image v1.1.0 from docker hub ==="
docker pull eosio/eos-dev:v1.1.0

# force remove the previous eosio container if it exists
# create a clean data folder in the eosio_docker to preserve block data
echo "=== setup/reset data for eosio_docker ==="
docker stop eosio_rideos_container || true && docker rm --force eosio_rideos_container || true
rm -rf "./eosio_docker/data"
mkdir -p "./eosio_docker/data"