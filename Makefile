setup-travis-environment:
	chmod -R +x .travis-ci/
	chmod -R +x mobile/scripts/
	.travis-ci/restore-secrets.sh
	npm install -g "npm@$(jq -r '.engines.npm' package.json)"
	make install

mobile_%:
	$(MAKE) -C mobile $*

core_%:
	$(MAKE) -C core $*

backend_%:
	$(MAKE) -C backend $*

web_%:
	$(MAKE) -C web $*

sonar-scanner:
	sonar-scanner

code-coverage:
	npm run codecov
	$(MAKE) -C mobile sonar-scanner

clean:
	./scripts/clean

install:
	npm ci

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
