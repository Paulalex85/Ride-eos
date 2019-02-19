./market_apply.sh

cleos push action rideos endoffer '["rider", "0"]' -p tester

cleos get table rideos rideos offer
cleos get table rideos rideos order