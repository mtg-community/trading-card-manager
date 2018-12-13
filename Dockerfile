FROM node:carbon
WORKDIR /usr/projects/trading-card-manager/

COPY ./Makefile ./

# Checkout Core
COPY ./core ./core
RUN make core_install

# Checkout Web
COPY ./web ./web
RUN make web_install

# Starts App
EXPOSE 3000
CMD [ "make", "web_start" ]
USER node
