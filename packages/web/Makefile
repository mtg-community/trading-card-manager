install:
	$(MAKE) -C ../core install
	$(MAKE) -C ../core build
	$(MAKE) -C ../.. install

ci-check:
	npm run test:coverage

build:
	npm run build

start:
	npm start

deploy:
	npm run build
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}

clean:
	echo 'CLEAN'

sonarqube:
	@sonar-scanner \
		-Dproject.settings=sonar-scanner.properties \
    -Dsonar.login=${SONAR_CLOUD_TOKEN}

end-to-end:
	$(MAKE) -C ./qa end-to-end-test

install-e2e:
	$(MAKE) -C ./qa install
