/**
 * The TasksController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TasksService');
const createtasks = async (request, response) => {
  await Controller.handleRequest(request, response, service.createtasks);
};

const deletetasks = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletetasks);
};

const getAlltasks = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlltasks);
};

const gettasks = async (request, response) => {
  await Controller.handleRequest(request, response, service.gettasks);
};

const updatetasks = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatetasks);
};


module.exports = {
  createtasks,
  deletetasks,
  getAlltasks,
  gettasks,
  updatetasks,
};
