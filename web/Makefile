install:
	$(MAKE) -C ../core install
	npm ci

ci-check:
	npm run test

build:
	npm run build

start:
	npm start

deploy:
	npm run build
	@npx firebase deploy --token ${FIREBASE_DEPLOY_TOKEN}

clean:
	echo 'CLEAN'

sonar-scanner:
	echo 'SONAR SCANNER'
