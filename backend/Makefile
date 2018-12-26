install:
	npm ci
	cd functions && npm ci

deploy:
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}

deploy-functions:
	cd functions && npm run deploy

ci-check:
	$(MAKE) -C ./functions ci-check
