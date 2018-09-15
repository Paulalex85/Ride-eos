#!/usr/bin/env bash
set -o errexit

echo "=== setup blockchain accounts and smart contract ==="

# set PATH
PATH="$PATH:/opt/eosio/bin:/opt/eosio/bin/scripts"


set -m

# start nodeos ( local node of blockchain )
# run it in a background job such that docker run could continue
nodeos -e -p eosio -d /mnt/dev/data --config-dir /mnt/dev/config --http-validate-host=false --plugin eosio::wallet_api_plugin --plugin eosio::wallet_plugin --plugin eosio::producer_plugin --plugin eosio::history_plugin --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin --plugin eosio::http_plugin --http-server-address=0.0.0.0:8888 --access-control-allow-origin=* --contracts-console --verbose-http-errors &
sleep 1s
  until curl localhost:8888/v1/chain/get_info
do
  sleep 1s
done

# Sleep for 2 to allow time 4 blocks to be created so we have blocks to reference when sending transactions
sleep 2s
echo "=== setup wallet: eosiomain ==="
# First key import is for eosio system account
cleos wallet create -n eosiomain | tail -1 | sed -e 's/^"//' -e 's/"$//' > eosiomain_wallet_password.txt
cleos wallet import -n eosiomain --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

echo "=== setup wallet: rideoswallet ==="
# key for eosio account and export the generated password to a file for unlocking wallet later
cleos wallet create -n rideoswallet | tail -1 | sed -e 's/^"//' -e 's/"$//' > rideos_wallet_password.txt
# Import key for rideoswallet wallet
cleos wallet import -n rideoswallet --private-key 5JpWT4ehouB2FF9aCfdfnZ5AwbQbTtHBAwebRXt94FmjyhXwL4K
cleos wallet import -n rideoswallet --private-key 5JD9AGTuTeD5BXZwGQ5AtwBqHK21aHmYnTetHgk1B3pjj7krT8N
cleos wallet import -n rideoswallet --private-key 5KaqYiQzKsXXXxVvrG8Q3ECZdQAj2hNcvCgGEubRvvq7CU3LySK
cleos wallet import -n rideoswallet --private-key 5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5

# create account for rideos with above wallet's public keys
cleos create account eosio rideos EOS6PUh9rs7eddJNzqgqDx1QrspSHLRxLMcRdwHZZRL4tpbtvia5B EOS6PUh9rs7eddJNzqgqDx1QrspSHLRxLMcRdwHZZRL4tpbtvia5B
cleos create account eosio rideor EOS8BCgapgYA2L4LJfCzekzeSr3rzgSTUXRXwNi8bNRoz31D14en9 EOS8BCgapgYA2L4LJfCzekzeSr3rzgSTUXRXwNi8bNRoz31D14en9
cleos create account eosio rideom EOS5btzHW33f9zbhkwjJTYsoyRzXUNstx1Da9X2nTzk8BQztxoP3H EOS5btzHW33f9zbhkwjJTYsoyRzXUNstx1Da9X2nTzk8BQztxoP3H
cleos create account eosio eosio.token EOS6kYgMTCh1iqpq9XGNQbEi8Q6k5GujefN9DSs55dcjVyFAq7B6b EOS6kYgMTCh1iqpq9XGNQbEi8Q6k5GujefN9DSs55dcjVyFAq7B6b

echo "=== create user accounts ==="
# script for creating data into blockchain
create_accounts.sh rideoswallet


echo "=== deploy smart contract ==="
# $1 smart contract name
# $2 account holder name of the smart contract
# $3 wallet that holds the keys for the account
# $4 password for unlocking the wallet
deploy_contract.sh Users rideos rideoswallet $(cat rideos_wallet_password.txt)
deploy_contract.sh Orders rideor rideoswallet $(cat rideos_wallet_password.txt)
deploy_contract.sh Market rideom rideoswallet $(cat rideos_wallet_password.txt)
cleos set contract eosio.token /contracts/eosio.token

#echo "=== create mock data for contract ==="
# script for calling actions on the smart contract to create mock data
#create_mock_data.sh

# * Replace the script with different form of data that you would pushed into the blockchain when you start your own project

echo "=== end of setup blockchain accounts and smart contract ==="
# create a file to indicate the blockchain has been initialized
touch "/mnt/dev/data/initialized"

# put the background nodeos job to foreground for docker run
fg %1