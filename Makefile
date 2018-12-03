setup-travis-environment:
	chmod -R +x .travis-ci/
	chmod -R +x mobile/scripts/
	.travis-ci/restore-secrets.sh
	make install

mobile_%:
	$(MAKE) -C mobile $*

domain_%:
	$(MAKE) -C domain $*

backend_%:
	$(MAKE) -C backend $*

web_%:
	$(MAKE) -C web $*

sonar-scanner:
	sonar-scanner

code-coverage:
	npm run codecov
	$(MAKE) -C mobile sonar-scanner

install:
	npm ci
