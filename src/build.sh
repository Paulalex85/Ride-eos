#!/usr/bin/env bash

eosiocpp -o ./contracts/Users/Users.wast ./contracts/Users/Users.cpp
eosiocpp -g ./contracts/Users/Users.abi ./contracts/Users/Users.cpp

eosiocpp -o ./contracts/Products/Products.wast ./contracts/Products/Products.cpp
eosiocpp -g ./contracts/Products/Products.abi ./contracts/Products/Products.cpp

eosiocpp -o ./contracts/Orders/Orders.wast ./contracts/Orders/Orders.cpp
eosiocpp -g ./contracts/Orders/Orders.abi ./contracts/Orders/Orders.cpp