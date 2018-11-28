setup-travis-environment:
	chmod -R +x travis-ci/
	chmod -R +x mobile/scripts/

install:
	$(MAKE) -C mobile install

ci-check:
	$(MAKE) -C mobile ci-check

build-android: ci-check
	$(MAKE) -C mobile build-android

build-ios: ci-check
	$(MAKE) -C mobile build-ios

sonar-scanner:
	$(MAKE) -C mobile sonar-scanner

mobile-%:
	echo $@
