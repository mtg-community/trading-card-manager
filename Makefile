setup-travis-environment:
	chmod -R +x travis-ci/
	chmod -R +x scripts/

setup-js-environment:
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
