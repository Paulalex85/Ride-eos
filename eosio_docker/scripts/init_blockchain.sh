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

echo "=== setup wallet: blockdeliverywallet ==="
# key for eosio account and export the generated password to a file for unlocking wallet later
cleos wallet create -n blockdeliverywallet --to-console | tail -1 | sed -e 's/^"//' -e 's/"$//' > blockdelivery_wallet_password.txt
# Import key for blockdeliverywallet wallet
#blockdelivery
cleos wallet import -n blockdeliverywallet --private-key 5Ka8DotT5vXv8tgjCoJzNrKGvv8Go7xVfycd3XvzjYMQn6bDStr
#eosio.code
cleos wallet import -n blockdeliverywallet --private-key 5Jaq9Z6VNLvKBzoeiT29FjoxX5jqU4bYyvYp47RBNfu75iLhkHw

# create account for blockdelivery with above wallet's public keys
cleos create account eosio blockdeliver EOS7e4xQuxLZFBDeAqeSC5qHaUYKcMmEdyxjPFbe9Yjjx9z36nm7J
cleos create account eosio eosio.token EOS82WxL7ZkBbZPEPArmaeNv3dfchMo82A5hzdx3A7vCPyGDzDwCf
cleos create account eosio eosio.assert EOS82WxL7ZkBbZPEPArmaeNv3dfchMo82A5hzdx3A7vCPyGDzDwCf

echo "=== create user accounts ==="
# script for creating data into blockchain
create_accounts.sh blockdeliverywallet


echo "=== deploy smart contract ==="
# $1 smart contract name
# $2 account holder name of the smart contract
# $3 wallet that holds the keys for the account
# $4 password for unlocking the wallet
deploy_contract.sh blockdeliver blockdeliver blockdeliverywallet $(cat blockdelivery_wallet_password.txt)
deploy_system_contract.sh eosio.contracts/contracts eosio.token
deploy_system_contract.sh eosio.assert eosio.assert

cleos push action eosio.assert setchain "[\"cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f\",\"Local Chain\",\"8ae3ccb19f3a89a8ea21f6c5e18bd2bc8f00c379411a2d9319985dad2db6243e\"]" -p eosio@active

echo "Issuing SYS tokens"
# cleos push action eosio.token create '["eosio", "10000000000.0000 SYS"]' -p eosio.token
# cleos push action eosio.token issue '["eosio", "5000000000.0000 SYS", "Half of available supply"]' -p eosio

echo "=== end of setup blockchain accounts and smart contract ==="
# create a file to indicate the blockchain has been initialized
touch "/mnt/dev/data/initialized"

# put the background nodeos job to foreground for docker run
fg %1