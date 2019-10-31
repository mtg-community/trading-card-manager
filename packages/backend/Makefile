deploy: install
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}

deploy-functions: install
	@npx firebase login --non-interactive --token ${FIREBASE_DEPLOY_TOKEN}
	@npx firebase use trading-card-manager-mtgx --token ${FIREBASE_DEPLOY_TOKEN}
	$(MAKE) -C ./functions deploy

test:
	$(MAKE) -C ./functions ci-check

install:
	yarn install
	$(MAKE) -C ./functions install

sonarqube:
	#$(MAKE) -C ./functions sonarqube
