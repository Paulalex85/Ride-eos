#!/usr/bin/env bash
# unlock the wallet, ignore error if already unlocked
if [ ! -z $3 ]; then ./cleos wallet unlock -n rideoswallet --password $(cat rideos_wallet_password.txt) || true; fi