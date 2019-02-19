#!/usr/bin/env bash

./user_accounts.sh
./order_perm.sh
./market_places.sh

keyTester=$(openssl rand -hex 32)
keySeller=$(openssl rand -hex 32)

echo "key tester $keyTester"
echo "key seller $keySeller"

hashTester=$(echo -n $keyTester | xxd -r -p | sha256sum -b | awk '{print $1}')
hashSeller=$(echo -n $keySeller | xxd -r -p | sha256sum -b | awk '{print $1}')

cleos push action rideos needdeliver '["tester", "seller", "50.0000 SYS", "20.0000 SYS","order 1",0,0]' -p tester

cleos push action rideos initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0,0]' -p tester
sleep 1

cleos push action rideos initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 4",0,0]' -p tester
cleos push action rideos validatebuy '["2", "'$hashTester'"]' -p tester
cleos push action rideos validatedeli '["2"]' -p rider
cleos push action rideos validatesell '["2", "'$hashSeller'"]' -p seller

cleos push action rideos initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 5",0,0]' -p tester
cleos push action rideos validatebuy '["3", "'$hashTester'"]' -p tester
cleos push action rideos validatedeli '["3"]' -p rider
cleos push action rideos validatesell '["3", "'$hashSeller'"]' -p seller
cleos push action rideos orderready '["3"]' -p seller

cleos push action rideos initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 6",0,0]' -p tester
cleos push action rideos validatebuy '["4", "'$hashTester'"]' -p tester
cleos push action rideos validatedeli '["4"]' -p rider
cleos push action rideos validatesell '["4", "'$hashSeller'"]' -p seller
cleos push action rideos orderready '["4"]' -p seller
cleos push action rideos ordertaken '["4","'$keySeller'"]' -p rider

cleos get table rideos rideos order