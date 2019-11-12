# Codeceptjs-boilerplate

CodeceptJs using WebdriverIO to run UI tests

### **Pre-requisites:**

- Node should be installed

- Java should be installed (required to run the selenium-standalone server)

- Docker (if you want to run tests using Docker)

### **Running tests locally:**

- Clone the repository

- Install all the required dependencies by running `npm install`

- Setup and start the selenium-standalone server by running `npm run start:selenium-standlone-server`

- In a separate terminal, execute the tests by running `npm run test`

### **Running tests using Docker:**

- Install docker for [mac](https://docs.docker.com/docker-for-mac/) or [windows](https://docs.docker.com/docker-for-windows/)

- Run tests using `docker-compose` by running the below command
```
docker-compose up --abort-on-container-exit --exit-code-from tests
```