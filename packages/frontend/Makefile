install:
	yarn install

test:
	yarn prettier:check
	yarn lint
	yarn types:check
	yarn test

build:
	yarn build-web
	yarn build-ios
	yarn build-android

sonarqube:
	echo 'Sonarqube'
#	@sonar-scanner \
#		-Dproject.settings=sonar-scanner.properties \
#    -Dsonar.login=${SONAR_CLOUD_TOKEN}

deploy:
	echo 'Deploy'
