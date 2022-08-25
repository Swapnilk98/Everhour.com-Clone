const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    client_Name: String,
    selectProject: String,
    email: String,
    add_Bussiness:String
});

const clientModel = mongoose.model('Clients', clientSchema);
module.exports = clientModel;