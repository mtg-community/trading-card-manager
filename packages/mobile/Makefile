install:
	echo "Install and Build Core Module"
	$(MAKE) -C ../core install
	$(MAKE) -C ../core build
	echo "Bootstrap Lerna Projects"
	$(MAKE) -C ../.. install

ci-check:
	npm run ci:check

clean:
	scripts/clean

build-android:
	android/gradlew app:assembleRelease -p android/

run-android:
	npm run android

build-ios:
	bundle exec fastlane ios test

sonarqube:
	@sonar-scanner \
		-Dproject.settings=sonar-scanner.properties \
    -Dsonar.login=${SONAR_CLOUD_TOKEN}
