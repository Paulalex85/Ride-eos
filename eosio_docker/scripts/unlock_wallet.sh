#!/usr/bin/env bash
# unlock the wallet, ignore error if already unlocked
cleos wallet unlock -n rideoswallet --password $(cat rideos_wallet_password.txt)