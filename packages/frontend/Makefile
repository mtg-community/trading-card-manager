install:
	yarn install

ci-check:
	yarn prettier:check
	yarn lint
	yarn types:check
	yarn test

build:
	yarn build-web
	yarn build-ios
	yarn build-android

sonarqube:
	@sonar-scanner \
		-Dproject.settings=sonar-scanner.properties \
    -Dsonar.login=${SONAR_CLOUD_TOKEN}
