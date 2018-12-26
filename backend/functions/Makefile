sonarqube:
	@sonar-scanner \
		-Dproject.settings=sonar-scanner.properties \
    -Dsonar.login=${SONAR_CLOUD_TOKEN}

ci-check:
	npm run test:coverage
