#!/usr/bin/env sh
# https://docs.travis-ci.com/user/encrypting-files/

echo "Decrypting bitbucket ssh key..."
openssl aes-256-cbc -K $encrypted_385968bf931c_key \
  -iv $encrypted_385968bf931c_iv \
  -in .travis-ci/bitbucket_key.enc \
  -out .travis-ci/bitbucket_key -d

echo "Setting up SSH keys..."
eval "$(ssh-agent)"
chmod 600 .travis-ci/bitbucket_key
ssh-add .travis-ci/bitbucket_key

echo "Cloning secrets repository..."
REPO_SSH_URL="git@bitbucket.org:eduardomoroni/trading-card-manager-secrets.git"
SECRETS_PATH="trading-card-manager-secrets/secrets"
git clone --depth 1 "$REPO_SSH_URL"
mv "$SECRETS_PATH/google-services.json" mobile/android/app/google-services.json
mv "$SECRETS_PATH/GoogleService-Info.plist" mobile/ios/GoogleService-Info.plist
mv "$SECRETS_PATH/.env" mobile/.env
