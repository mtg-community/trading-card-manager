install:
#	npm ci
	npm install

ci-check:
	npm run ci:check

clean:
	scripts/clean.sh

build-android: clean ci-check
	android/gradlew assembleRelease -p android/

build-ios: clean ci-check
	bundle exec fastlane ios test

sonar-scanner:
	npm run test:coverage
	sonar-scanner
