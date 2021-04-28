#!/bin/bash
#npm install -g codecov
yarn quasar test --unit jest && codecov -t cfb96bda-6e0b-4788-9bf6-ee85a8feb4aa

exit 0