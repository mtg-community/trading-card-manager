sonarqube:
	@sonar-scanner \
		-Dproject.settings=sonar-scanner.properties \
    -Dsonar.login=${SONAR_CLOUD_TOKEN}

ci-check:
	npm run test:coverage

install:
	yarn install

deploy:
	@npx firebase deploy --only functions -m "Pipe $CIRCLE_BRANCH Commit $CIRCLE_SHA1" --token $FIREBASE_TOKEN
