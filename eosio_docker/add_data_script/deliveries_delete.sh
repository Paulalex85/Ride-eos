./order_different_initialize.sh

sleep 10

# cleos push action rideos deletedelive '["0"]' -p tester

# cleos get table rideos rideos place
# cleos get table rideos rideos deliveries

cleos push action rideos cleandelive '["0"]' -p tester

cleos get table rideos rideos place
cleos get table rideos rideos deliveries