./user_accounts.sh
./market_places.sh

sleep 1
cleos push action rideos stackpow '["tester", "50.0000 SYS","0"]' -p tester
sleep 1
cleos push action rideos stackpow '["tester", "50.0000 SYS","0"]' -p tester
cleos push action rideos stackpow '["tester", "50.0000 SYS","1"]' -p tester

cleos get table rideos rideos user
cleos get table rideos rideos stackpower