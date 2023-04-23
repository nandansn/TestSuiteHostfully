
FROM cypress/browsers:latest

RUN mkdir /hostfully-project

WORKDIR /hostfully-project

RUN mkdir mochawesome-report

COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./tsconfig.json .
COPY ./cypress ./cypress

RUN npm install

# ENTRYPOINT ["npx","cypress","run"]
CMD ["npm", "run", "test"]
# #With CMD in this case, we can specify more parameters to the last entrypoint.