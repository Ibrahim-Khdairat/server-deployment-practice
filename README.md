# server-deployment-practice

##### Author  : Ibrahim Khdairat

* [Test Report](https://github.com/Ibrahim-Khdairat/server-deployment-practice/actions)

* [Status](https://ibrahimkh-server-deploy-dev.herokuapp.com/status)

* [GitHub - Pull Request](https://github.com/Ibrahim-Khdairat/server-deployment-practice/pull/1)

##### Setup
`.env` requirements
  * `PORT` - Port Number

**Running the app**
* `npm start`
* Endpoint: `/status`
Returns Object

>{
  "domain": "ibrahimkh-server-deploy-dev.herokuapp.com",
  "status": "running",
  "port": 3000
}


**Tests**
* Unit Tests: `npm run test`
