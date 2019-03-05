./market_offer.sh

cleos push action rideos deleteorder '["1"]' -p tester
cleos push action rideos deleteuser '["tester"]' -p tester
cleos get table rideos rideos user
cleos get table rideos rideos order
cleos get table rideos rideos stackpower
sleep 1

cleos push action rideos withdraw '["tester","9930.0000 SYS"]' -p tester
cleos get table rideos rideos user
cleos get table rideos rideos stackpower
sleep 1

cleos push action rideos deleteuser '["tester"]' -p tester
cleos get table rideos rideos user