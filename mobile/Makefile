install:
	npm ci

ci-check:
	npm run ci:check

clean:
	scripts/clean.sh

build-android: ci-check
	android/gradlew assembleRelease -p android/

build-ios: ci-check
	bundle exec fastlane ios test

sonar-scanner:
	npm run test:coverage
	sonar-scanner
