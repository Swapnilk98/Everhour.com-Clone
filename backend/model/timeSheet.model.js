const mongoose = require('mongoose');

const timeSheetSchema = new mongoose.Schema({
    end: String,
    project: String,
    start: String,
    timeHour:String,
    title:String
});

const timeSheetModel = mongoose.model('timesheet', timeSheetSchema);
module.exports = timeSheetModel;