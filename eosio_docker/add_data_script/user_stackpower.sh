./user_accounts.sh
./market_places.sh

sleep 1
cleos push action rideos stackpow '["tester", "50.0000 SYS","0"]' -p tester
sleep 1
cleos push action rideos stackpow '["tester", "50.0000 SYS","0"]' -p tester
cleos push action rideos stackpow '["tester", "50.0000 SYS","1"]' -p tester
sleep 1

cleos get table rideos rideos user
cleos get table rideos rideos stackpower
cleos get table rideos rideos place

cleos push action rideos unlockpow '["tester", "10.0000 SYS","0"]' -p tester
cleos push action rideos unlockpow '["tester", "10.0000 SYS","1"]' -p tester
sleep 1
cleos push action rideos unlockpow '["tester", "40.0000 SYS","3"]' -p tester

cleos get table rideos rideos stackpower
cleos get table rideos rideos place

sleep 10
cleos push action rideos unstackpow '["tester", "3"]' -p tester

cleos get table rideos rideos user
cleos get table rideos rideos stackpower