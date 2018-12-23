#!/usr/bin/env sh
# https://docs.travis-ci.com/user/encrypting-files/

REPO_SSH_URL="git@bitbucket.org:eduardomoroni/trading-card-manager-secrets.git"
SECRETS_PATH="trading-card-manager-secrets/web"
KEY_PATH=".circleci/bitbucket_key"
KEY_ENCODING_EXTENSION=".enc"

echo "Decrypting bitbucket ssh key..."
openssl aes-256-cbc -d \
  -in "$KEY_PATH$KEY_ENCODING_EXTENSION" \
  -out "$KEY_PATH" \
  -k "$BITBUCKET"

echo "Setting up SSH keys..."
eval "$(ssh-agent)"
chmod 600 "$KEY_PATH"
ssh-add "$KEY_PATH"

echo "Cloning secrets repository..."
git clone --depth 1 "$REPO_SSH_URL"

echo "Moving the secrets to the right folder..."
mv "$SECRETS_PATH/.env" web/.env
