install:
#	npm ci
	npm install

ci-check:
	npm run ci:check

clean:
	scripts/clean.sh

build-android: clean
	android/gradlew assembleRelease -p android/

build-ios: clean
	bundle exec fastlane ios test

sonar-scanner:
	sonar-scanner
