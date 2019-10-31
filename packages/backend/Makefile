deploy: install
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}

deploy-functions: install
	@npx firebase use trading-card-manager --token ${FIREBASE_DEPLOY_TOKEN}
	cd functions && npm run deploy

test:
	$(MAKE) -C ./functions ci-check

install:
	yarn install
	$(MAKE) -C ./functions install

sonarqube:
	#$(MAKE) -C ./functions sonarqube
