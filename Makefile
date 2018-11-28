setup-travis-environment:
	chmod -R +x travis-ci/
	chmod -R +x scripts/

setup-js-environment:
	nvm install && nvm use
	npm install -g "npm@$(jq -r '.engines.npm' package.json)"
	npm ci

ci-check:
	npm run ci:check

build-android: ci-check
	./android/gradlew assembleRelease -p android/

build-ios: ci-check
	bundle exec fastlane ios test

sonar-scanner:
	npm run test:coverage
	sonar-scanner
