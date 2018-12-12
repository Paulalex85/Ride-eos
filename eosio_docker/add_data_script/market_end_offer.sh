./market_apply.sh

cleos push action rideom endoffer '["rider", "0"]' -p tester

cleos get table rideom rideom offer
cleos get table rideor rideor order