install:
	yarn install
	sh	scripts/secrets

test:
	yarn test --coverage
	yarn types:check
	yarn lint
	yarn prettier:check

build:
	yarn build-web

sonarqube:
	echo 'Sonarqube'
#	@sonar-scanner \
#		-Dproject.settings=sonar-scanner.properties \
#    -Dsonar.login=${SONAR_CLOUD_TOKEN}

deploy:
	echo 'Deploy'
# 	yarn build-web
# 	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}
