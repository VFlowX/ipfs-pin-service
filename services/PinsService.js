/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add pin object
* Add a new pin object for the current access token
*
* pin Pin
* returns PinStatus
* */
const addPin = ({ pin }) => new Promise(
  async (resolve, reject) => {
    console.log({ pin });
    try {
      resolve(Service.successResponse({
        pin,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Remove pin object
* Remove a pin object
*
* requestid String
* no response value expected for this operation
* */
const deletePinByRequestId = ({ requestid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        requestid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get pin object
* Get a pin object and its status
*
* requestid String
* returns PinStatus
* */
const getPinByRequestId = ({ requestid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        requestid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List pin objects
* List all the pin objects, matching optional filters; when no filter is provided, only successful pins are returned
*
* cid Set Return pin objects responsible for pinning the specified CID(s); be aware that using longer hash functions introduces further constraints on the number of CIDs that will fit under the limit of 2000 characters per URL  in browser contexts (optional)
* name String Return pin objects with specified name (by default a case-sensitive, exact match) (optional)
* match TextMatchingStrategy Customize the text matching strategy applied when the name filter is present; exact (the default) is a case-sensitive exact match, partial matches anywhere in the name, iexact and ipartial are case-insensitive versions of the exact and partial strategies (optional)
* status Set Return pin objects for pins with the specified status (when missing, service should default to pinned only) (optional)
* before Date Return results created (queued) before provided timestamp (optional)
* after Date Return results created (queued) after provided timestamp (optional)
* limit Integer Max records to return (optional)
* meta Map Return pin objects that match specified metadata keys passed as a string representation of a JSON object; when implementing a client library, make sure the parameter is URL-encoded to ensure safe transport (optional)
* returns PinResults
* */
const getPins = ({
  cid, name, match, status, before, after, limit, meta,
}) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        cid,
        name,
        match,
        status,
        before,
        after,
        limit,
        meta,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Replace pin object
* Replace an existing pin object (shortcut for executing remove and add operations in one step to avoid unnecessary garbage collection of blocks present in both recursive pins)
*
* requestid String
* pin Pin
* returns PinStatus
* */
const replacePinByRequestId = ({ requestid, pin }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        requestid,
        pin,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  addPin,
  deletePinByRequestId,
  getPinByRequestId,
  getPins,
  replacePinByRequestId,
};
