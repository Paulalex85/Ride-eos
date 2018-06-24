#!/usr/bin/env bash

eosiocpp -o ./build/Users.wast ./contracts/Users/Users.cpp
eosiocpp -g ./build/Users.abi ./contracts/Users/Users.cpp

eosiocpp -o ./build/Products.wast ./contracts/Products/Products.cpp
eosiocpp -g ./build/Products.abi ./contracts/Products/Products.cpp