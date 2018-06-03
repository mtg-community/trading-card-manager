#!/usr/bin/env bash

# fails if any command fail
set -e
set -o pipefail

npm run test
npm run flow
npm run eslint

