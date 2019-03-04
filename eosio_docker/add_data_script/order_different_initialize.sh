#!/usr/bin/env bash

./user_accounts.sh
./order_perm.sh
./user_stackpower.sh

keyTester=$(openssl rand -hex 32)
keySeller=$(openssl rand -hex 32)

echo "key tester $keyTester"
echo "key seller $keySeller"

hashTester=$(echo -n $keyTester | xxd -r -p | sha256sum -b | awk '{print $1}')
hashSeller=$(echo -n $keySeller | xxd -r -p | sha256sum -b | awk '{print $1}')

cleos push action rideos needdeliver '["tester", "seller", "50.0000 SYS", "20.0000 SYS","order 1",0]' -p tester

cleos push action rideos initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
cleos push action rideos validatebuy '["1", "'$hashTester'"]' -p tester
cleos push action rideos validatedeli '["1","1"]' -p rider
cleos push action rideos validatesell '["1", "'$hashSeller'","0"]' -p seller
cleos get table rideos rideos stackpower
sleep 1

cleos push action rideos orderready '["1"]' -p seller
cleos push action rideos ordertaken '["1","'$keySeller'"]' -p rider
cleos push action rideos orderdelive '["1","'$keyTester'"]' -p rider

cleos get table rideos rideos order
cleos get table rideos rideos stackpower