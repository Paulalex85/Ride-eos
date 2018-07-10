#!/usr/bin/env bash

rm ./build/*

eosiocpp -o ./build/Users.wast ./contracts/Users/Users.cpp
eosiocpp -g ./build/Users.abi ./contracts/Users/Users.cpp

eosiocpp -o ./build/Products.wast ./contracts/Products/Products.cpp
eosiocpp -g ./build/Products.abi ./contracts/Products/Products.cpp

eosiocpp -o ./build/Orders.wast ./contracts/Orders/Orders.cpp
eosiocpp -g ./build/Orders.abi ./contracts/Orders/Orders.cpp