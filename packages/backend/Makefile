install:
	yarn install
	cd functions && yarn install

deploy:
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}

deploy-functions:
	# cd functions && npm run deploy

test:
	$(MAKE) -C ./functions ci-check

install:
	$(MAKE) -C ./functions install

sonarqube:
	#$(MAKE) -C ./functions sonarqube
