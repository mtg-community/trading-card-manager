# Based on https://github.com/newtmitch/docker-sonar-scanner/blob/master/Dockerfile.sonarscanner-3.2.0-full
FROM openjdk:8

LABEL maintainer="Eduardo Moroni <eduardomoroni@gmail.com>"

RUN apt-get update
RUN apt-get install -y curl git tmux htop maven sudo
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN sudo apt-get install -y nodejs build-essential

# CircleCI dependencies
RUN sudo apt-get install -y git-all
RUN sudo apt-get install -y openssh-server
RUN sudo apt-get install -y tar
RUN sudo apt-get install -y gzip
RUN sudo apt-get install -y ca-certificates

WORKDIR /root

RUN curl --insecure -o ./sonarscanner.zip -L https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-3.2.0.1227-linux.zip
RUN unzip sonarscanner.zip
RUN rm sonarscanner.zip
RUN mv sonar-scanner-3.2.0.1227-linux sonar-scanner

ENV SONAR_RUNNER_HOME=/root/sonar-scanner
ENV PATH $PATH:/root/sonar-scanner/bin

LABEL com.circleci.preserve-entrypoint=true

ENTRYPOINT root
