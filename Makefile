setup-travis-environment:
	chmod -R +x .travis-ci/
	chmod -R +x packages/mobile/scripts/
	.travis-ci/restore-secrets.sh
	npm install -g "npm@$(jq -r '.engines.npm' package.json)"

app_%:
	$(MAKE) -C packages/core $*

backend_%:
	$(MAKE) -C packages/backend $*

sonar-scanner:
	sonar-scanner

install:
	yarn install

docker_build-web:
	docker build -t mtgx_web_image .

docker_run-web:
	docker run \
		-v $(pwd):/usr/projects/trading-card-manager/ \
		-p 3000:3000 \
		--tty --interactive \
		--rm \
		mtgx_web_image

docker_remove-all-stopped:
	docker rm $(docker ps -a -q)

docker_delete-all-stopped:
	docker rm $(docker ps -a -q)

sonarqube:
	@sonar-scanner \
		-Dproject.settings=sonar-scanner.properties \
    -Dsonar.login=${SONAR_CLOUD_TOKEN}
