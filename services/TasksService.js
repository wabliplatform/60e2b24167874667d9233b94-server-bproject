/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Tasks } = require('../models/Tasks');

/**
* Creates the data
*
* tasks Tasks data to be created
* returns tasks
* */
const createtasks = ({ tasks }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Tasks(tasks).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* tasksId String the Id parameter
* no response value expected for this operation
* */
const deletetasks = ({ tasksId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Tasks.findOneAndDelete({ _id:tasksId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlltasks = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Tasks.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* tasksId String the Id parameter
* returns tasks
* */
const gettasks = ({ tasksId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Tasks.findById(tasksId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* tasksId String the Id parameter
* tasks Tasks data to be updated (optional)
* returns tasks
* */
const updatetasks = ({ tasksId, tasks }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Tasks.findOneAndUpdate({ _id:tasksId },tasks).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createtasks,
  deletetasks,
  getAlltasks,
  gettasks,
  updatetasks,
};
