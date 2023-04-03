/**
 * The PinsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PinsService');
const addPin = async (request, response) => {
  await Controller.handleRequest(request, response, service.addPin);
};

const deletePinByRequestId = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePinByRequestId);
};

const getPinByRequestId = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPinByRequestId);
};

const getPins = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPins);
};

const replacePinByRequestId = async (request, response) => {
  await Controller.handleRequest(request, response, service.replacePinByRequestId);
};


module.exports = {
  addPin,
  deletePinByRequestId,
  getPinByRequestId,
  getPins,
  replacePinByRequestId,
};
