FROM ubuntu:18.04

RUN echo "INSTALLING EOSIO AND CDT"
RUN apt-get update && apt-get install -y wget sudo curl npm
RUN wget https://github.com/EOSIO/eosio.cdt/releases/download/v1.6.2/eosio.cdt_1.6.2-1-ubuntu-18.04_amd64.deb
RUN apt-get update && sudo apt install -y ./eosio.cdt_1.6.2-1-ubuntu-18.04_amd64.deb
RUN wget https://github.com/eosio/eos/releases/download/v1.8.1/eosio_1.8.1-1-ubuntu-18.04_amd64.deb
RUN apt-get update && sudo apt install -y ./eosio_1.8.1-1-ubuntu-18.04_amd64.deb

RUN echo "INSTALLING CONTRACTS"
RUN mkdir -p "/opt/eosio/bin/contracts"

RUN echo "INSTALLING EOSIO.CONTRACTS"
RUN wget https://github.com/EOSIO/eosio.contracts/archive/v1.7.0.tar.gz
RUN mkdir -p /eosio.contracts
RUN tar xvzf ./v1.7.0.tar.gz -C /eosio.contracts
RUN mv /eosio.contracts/eosio.contracts-1.7.0 /opt/eosio/bin/contracts
RUN mv /opt/eosio/bin/contracts/eosio.contracts-1.7.0 /opt/eosio/bin/contracts/eosio.contracts