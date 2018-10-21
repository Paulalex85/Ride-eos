#!/usr/bin/env bash
set -o errexit

echo "=== starting MongoDB container ==="

echo "=== run docker container from the mongo image ==="
docker run --rm --name mongo_rideos_container -d -p 127.0.0.1:27018:27018 mongo:4.0

if [ "$1" != "--nolog" ]
then
    echo "=== follow mongo_rideos_container logs ==="
    docker logs mongo_rideos_container --follow
fi