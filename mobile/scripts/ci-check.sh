#!/usr/bin/env bash

# fails if any command fail
set -e
set -o pipefail


if [[ "$CI" != "" ]];
  then
  # npm run test
  # npm run flow
  # npm run eslint
  echo 'IGNORING FOR NOW'
fi

