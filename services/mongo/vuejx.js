const logger = require('../logger');
const axios = require('axios');
const vuejxToken = process.env.VUEJX_TOKEN
const vuejxEndpoint = 'http://vuejx-core:3000/'
async function userCreate({ db, collection, body, actionCode, app }) {
  let data = JSON.stringify({
    query: `mutation userCreate ($token: String, $db: String, $collection: String, $body: JSON, $actionCode: String, $app: String) {
      userCreate (token: $token, db: $db, collection: $collection, body: $body, actionCode: $actionCode, app: $app)
  }`,
    variables: { "token": vuejxToken, "db": db, "collection": collection, "body": body, "actionCode": actionCode, "app": app }
  });

  let config = {
    method: 'post',
    url: vuejxEndpoint,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return await axios.request(config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      logger.log(error);
    });
}
async function userUpdateOne({ db, collection, body, filter, sort, actionCode, app }) {
  let data = JSON.stringify({
    query: `mutation userUpdateOne ($token: String, $db: String, $collection: String, $body: JSON, $filter: JSON, $sort: JSON, $skip: Int, $actionCode: String, $app: String) {
      userUpdateOne (token: $token, db: $db, collection: $collection, body: $body, filter: $filter, sort: $sort, skip: $skip, actionCode: $actionCode, app: $app)
  }`,
    variables: { "token": vuejxToken, "db": db, "collection": collection, "body": body, "filter": filter, "sort": sort, "skip": 0, "actionCode": actionCode, "app": app }
  });

  let config = {
    method: 'post',
    url: vuejxEndpoint,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return await axios.request(config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      logger.log(error);
    });
}

async function search({ db, collection, body, app }) {
  let data = JSON.stringify({
    query: `query search ($token: String, $body: JSON, $db: String, $collection: String, $app: String, $cache: String) {
      search (token: $token, body: $body, db: $db, collection: $collection, app: $app, cache: $cache)
  }`,
    variables: { "token": vuejxToken, "body": body, "db": db, "collection": collection, "app": app, "cache": false }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: vuejxEndpoint,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return await axios.request(config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      logger.log(error);
    });
}

module.exports = {
  userCreate,
  userUpdateOne,
  search
}