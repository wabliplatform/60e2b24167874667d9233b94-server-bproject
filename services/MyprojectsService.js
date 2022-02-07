/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Myprojects } = require('../models/Myprojects');

/**
* Creates the data
*
* myprojects Myprojects data to be created
* returns myprojects
* */
const createmyprojects = ({ myprojects }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Myprojects(myprojects).save();
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
* myprojectsId String the Id parameter
* no response value expected for this operation
* */
const deletemyprojects = ({ myprojectsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Myprojects.findOneAndDelete({ _id:myprojectsId }).exec();
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
const getAllmyprojects = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await Myprojects.find().exec();
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
* myprojectsId String the Id parameter
* returns myprojects
* */
const getmyprojects = ({ myprojectsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Myprojects.findById(myprojectsId).exec();
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
* myprojectsId String the Id parameter
* myprojects Myprojects data to be updated (optional)
* returns myprojects
* */
const updatemyprojects = ({ myprojectsId, myprojects }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Myprojects.findOneAndUpdate({ _id:myprojectsId },myprojects).exec();
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
  createmyprojects,
  deletemyprojects,
  getAllmyprojects,
  getmyprojects,
  updatemyprojects,
};
