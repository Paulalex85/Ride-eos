#!/usr/bin/env bash

./user_accounts.sh

keyTester=$(openssl rand -hex 32)
keySeller=$(openssl rand -hex 32)

echo "key tester $keyTester"
echo "key seller $keySeller"

hashTester=$(echo -n $keyTester | xxd -r -p | sha256sum -b | awk '{print $1}')
hashSeller=$(echo -n $keySeller | xxd -r -p | sha256sum -b | awk '{print $1}')


cleos push action rideos initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
cleos push action rideos validatebuy '["0", "'$hashTester'"]' -p tester
cleos push action rideos validatedeli '["0"]' -p rider
cleos push action rideos validatesell '["0", "'$hashSeller'"]' -p seller
sleep 1

cleos push action rideos orderready '["0"]' -p seller
cleos push action rideos ordertaken '["0","'$keySeller'"]' -p rider
cleos push action rideos orderdelive '["0","'$keyTester'"]' -p rider
sleep 1

cleos get table rideos rideos order

cleos push action rideos deleteorder '["0"]' -p tester
cleos get table rideos rideos order