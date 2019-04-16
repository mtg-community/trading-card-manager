#!/usr/bin/env sh
# https://docs.travis-ci.com/user/encrypting-files/

REPO_SSH_URL="git@bitbucket.org:eduardomoroni/trading-card-manager-secrets.git"
SECRETS_PATH="trading-card-manager-secrets/mobile"
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
git clone --depth 1 "$REPO_SSH_URL"

echo "Moving the secrets to the right folder..."
mv "$SECRETS_PATH/google-services.json" \
  packages/mobile/android/app/google-services.json
mv "$SECRETS_PATH/GoogleService-Info.plist" \
  packages/mobile/ios/GoogleService-Info.plist
mv "$SECRETS_PATH/.env" packages/mobile/.env
