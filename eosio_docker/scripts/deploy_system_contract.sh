# $1 - smart contract name
# $2 - account name

CONTRACTS_DIR="/opt/eosio/bin/contracts"

echo "Deploying the $2 contract"

# Move into contracts /src directory
cd "$CONTRACTS_DIR/$1/$2/src"

# Compile the smart contract to wasm and abi files using the EOSIO.CDT (Contract Development Toolkit)
# https://github.com/EOSIO/eosio.cdt
eosio-cpp -abigen "$2.cpp" -o "$2.wasm" -I ../include

# Move back into the executable directory
cd /opt/eosio/bin/

# Set (deploy) the compiled contract to the blockchain
cleos set contract $2 "$CONTRACTS_DIR/$1/$2/src" "$2.wasm" "$2.abi" -p $2@active