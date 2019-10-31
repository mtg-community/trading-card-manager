deploy-functions: install
	@npx firebase use trading-card-manager-mtgx --token ${FIREBASE_DEPLOY_TOKEN} --non-interactive
	$(MAKE) -C ./functions deploy

test:
	$(MAKE) -C ./functions ci-check

install:
	yarn install
	$(MAKE) -C ./functions install

sonarqube:
	#$(MAKE) -C ./functions sonarqube
