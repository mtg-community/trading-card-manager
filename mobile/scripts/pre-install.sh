#!/usr/bin/env bash

if [[ "$CI" != "" ]];
  then
  if [[ "$OSTYPE" == "darwin"* ]]; then
    echo 'INSTALLING MACOS CI DEPENDENCIES'
    brew install jq
  else
    echo 'INSTALLING NON MACOS CI DEPENDENCIES'
    yes | sdkmanager "platforms;android-27"
    yes | sdkmanager "platforms;android-25"
    yes | sdkmanager "build-tools;27.0.3"
    #y | scripts/android-emulator.sh create
  fi

#  . ~/.nvm/nvm.sh
#  nvm install
#  nvm use
#  npm install -g "npm@$(jq -r '.engines.npm' package.json)"
    cd ../core
    npm install
    cd ../mobile
fi

npm install ../core
