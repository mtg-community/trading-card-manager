#!/usr/bin/env sh
# https://docs.travis-ci.com/user/encrypting-files/

REPO_SSH_URL="git@bitbucket.org:eduardomoroni/trading-card-manager-secrets.git"
SECRETS_PATH=".secrets"
KEY_PATH=".travis-ci/bitbucket_key"
KEY_ENCODING_EXTENSION=".enc"

echo "Decrypting bitbucket ssh key"
openssl aes-256-cbc -K $encrypted_43f02176fa37_key \
  -iv $encrypted_43f02176fa37_iv \
  -in .travis-ci/bitbucket_key.enc \
  -out .travis-ci/bitbucket_key -d

echo "Setting up SSH keys..."
eval "$(ssh-agent)"
chmod 600 "$KEY_PATH"
ssh-add "$KEY_PATH"

echo "Cloning secrets repository..."
git clone --depth 1 "$REPO_SSH_URL" "$SECRETS_PATH"

echo "Moving the secrets to the right folder..."
mv "$SECRETS_PATH/mobile/.env" packages/frontend/.env
