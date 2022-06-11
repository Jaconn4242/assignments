const express = require("express")
const trackerRouter = express.Router()
const Tracker = require("../models/trackerLog.js")


// Get all trackerLogs by baby ID
trackerRouter.get('/:babyId/trackerLogs', (req, res, next) => {
    Tracker.find({ baby: req.params.babyId }, (err, trackerLogs) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(trackerLogs);
    });
  });

  // Add trackerLog to baby by babyId ID
trackerRouter.post('/:babyId/trackerLogs', (req, res, next) => {
    req.body.parent = req.auth._id; //makes user posting trackerLog and make that equal to the parent property in trackerLog schema
    req.body.baby = req.params.babyId;
    const newTrackerLog = new Tracker(req.body);
    newTrackerLog.save((err, savedTrackerLog) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(savedTrackerLog);
    });
  });
//Delete trackerLog by baby and only by the creator of the trackerLog
  trackerRouter.delete('/:babyId/trackerLogs/:trackerLogId', (req, res, next) => {
    Tracker.findOneAndRemove(
        { _id: req.params.trackerLogId, parent: req.auth._id },
        (err, deletedTrackerLog) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res
          .status(200)
          .send(`${deletedTrackerLog} deleted successfully`);
      }
    );
  });

  
  
  
  
  module.exports = trackerRouter