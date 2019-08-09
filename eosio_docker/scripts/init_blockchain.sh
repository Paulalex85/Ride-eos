#!/usr/bin/env bash
set -o errexit

echo "=== setup npm for tests ==="
cd "/opt/eosio/bin/tests"
npm install

cd "/opt/eosio/bin/"

echo "=== setup blockchain accounts and smart contract ==="

# set PATH
PATH="$PATH:/opt/eosio/bin:/opt/eosio/bin/scripts"

set -m

# start nodeos ( local node of blockchain )
# run it in a background job such that docker run could continue
nodeos -e -p eosio -d /mnt/dev/data \
  --config-dir /mnt/dev/config \
  --http-validate-host=false \
  --plugin eosio::producer_plugin \
  --plugin eosio::chain_api_plugin \
  --plugin eosio::http_plugin \
  --http-server-address=0.0.0.0:8888 \
  --access-control-allow-origin=* \
  --contracts-console \
  --verbose-http-errors &
sleep 1s
until curl localhost:8888/v1/chain/get_info
do
  sleep 1s
done

# Sleep for 2 to allow time 4 blocks to be created so we have blocks to reference when sending transactions
sleep 2s
echo "=== setup wallet: eosiomain ==="
# First key import is for eosio system account
cleos wallet create -n eosiomain --to-console | tail -1 | sed -e 's/^"//' -e 's/"$//' > eosiomain_wallet_password.txt
cleos wallet import -n eosiomain --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

echo "=== setup wallet: rideoswallet ==="
# key for eosio account and export the generated password to a file for unlocking wallet later
cleos wallet create -n rideoswallet --to-console | tail -1 | sed -e 's/^"//' -e 's/"$//' > rideos_wallet_password.txt
# Import key for rideoswallet wallet
#rideos
cleos wallet import -n rideoswallet --private-key 5Ka8DotT5vXv8tgjCoJzNrKGvv8Go7xVfycd3XvzjYMQn6bDStr
#eosio.code
cleos wallet import -n rideoswallet --private-key 5Jaq9Z6VNLvKBzoeiT29FjoxX5jqU4bYyvYp47RBNfu75iLhkHw

# create account for rideos with above wallet's public keys
cleos create account eosio rideos EOS7e4xQuxLZFBDeAqeSC5qHaUYKcMmEdyxjPFbe9Yjjx9z36nm7J EOS7e4xQuxLZFBDeAqeSC5qHaUYKcMmEdyxjPFbe9Yjjx9z36nm7J
cleos create account eosio eosio.token EOS82WxL7ZkBbZPEPArmaeNv3dfchMo82A5hzdx3A7vCPyGDzDwCf EOS82WxL7ZkBbZPEPArmaeNv3dfchMo82A5hzdx3A7vCPyGDzDwCf

echo "=== create user accounts ==="
# script for creating data into blockchain
create_accounts.sh rideoswallet


echo "=== deploy smart contract ==="
# $1 smart contract name
# $2 account holder name of the smart contract
# $3 wallet that holds the keys for the account
# $4 password for unlocking the wallet
deploy_contract.sh rideos rideos rideoswallet $(cat rideos_wallet_password.txt)
deploy_system_contract.sh eosio.token eosio.token

echo "Issuing SYS tokens"
# cleos push action eosio.token create '["eosio", "10000000000.0000 SYS"]' -p eosio.token
# cleos push action eosio.token issue '["eosio", "5000000000.0000 SYS", "Half of available supply"]' -p eosio

echo "=== end of setup blockchain accounts and smart contract ==="
# create a file to indicate the blockchain has been initialized
touch "/mnt/dev/data/initialized"

# put the background nodeos job to foreground for docker run
fg %1