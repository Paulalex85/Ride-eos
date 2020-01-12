#!/usr/bin/env bash

./user_accounts.sh

buyer="tester"
seller="seller"
deliver="rider"
priceSeller="50.0000 SYS"
priceDeliver"20.0000 SYS"
details="order details"

keyTester=$(openssl rand -hex 32)
keySeller=$(openssl rand -hex 32)

echo "key tester $keyTester"
echo "key seller $keySeller"

hashTester=$(echo -n $keyTester | sha256sum -b | awk '{print $1}')
hashSeller=$(echo -n $keySeller | sha256sum -b | awk '{print $1}')


cleos push action blockdeliver initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
sleep 1

cleos push action blockdeliver initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
cleos push action blockdeliver validatebuy '["1", "'$hashTester'"]' -p tester
cleos push action blockdeliver validatedeli '["1"]' -p rider
cleos push action blockdeliver validatesell '["1", "'$hashSeller'"]' -p seller
sleep 1

cleos push action blockdeliver initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
cleos push action blockdeliver validatebuy '["2", "'$hashTester'"]' -p tester
cleos push action blockdeliver validatedeli '["2"]' -p rider
cleos push action blockdeliver validatesell '["2", "'$hashSeller'"]' -p seller
cleos push action blockdeliver orderready '["2"]' -p seller
sleep 1

cleos push action blockdeliver initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
cleos push action blockdeliver validatebuy '["3", "'$hashTester'"]' -p tester
cleos push action blockdeliver validatedeli '["3"]' -p rider
cleos push action blockdeliver validatesell '["3", "'$hashSeller'"]' -p seller
cleos push action blockdeliver orderready '["3"]' -p seller
cleos push action blockdeliver ordertaken '["3","'$keySeller'"]' -p rider
sleep 1

cleos push action blockdeliver initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
cleos push action blockdeliver validatebuy '["4", "'$hashTester'"]' -p tester
cleos push action blockdeliver validatedeli '["4"]' -p rider
cleos push action blockdeliver validatesell '["4", "'$hashSeller'"]' -p seller
cleos push action blockdeliver orderready '["4"]' -p seller
cleos push action blockdeliver ordertaken '["4","'$keySeller'"]' -p rider
cleos push action blockdeliver orderdelive '["4","'$keyTester'"]' -p rider
sleep 1

cleos push action blockdeliver initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
cleos push action blockdeliver initcancel '["5", "tester"]' -p tester
sleep 1

cleos push action blockdeliver initialize '["tester", "seller", "rider","50.0000 SYS", "20.0000 SYS","order 2",0]' -p tester
cleos push action blockdeliver validatebuy '["6", "'$hashTester'"]' -p tester
cleos push action blockdeliver validatedeli '["6"]' -p rider
cleos push action blockdeliver validatesell '["6", "'$hashSeller'"]' -p seller
sleep 1
cleos push action blockdeliver delaycancel '["6"]' -p tester

cleos get table blockdeliver blockdeliver order