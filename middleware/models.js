
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recoveryAccountSchema = new Schema({
  recoveryEmailHash: {
    type: String,
    required: true,
    unique: true
  },
  safeAddress: {
    type: String,
    required: true,
    
  },
  recoveryModuleAddress: {
    type: String,
    required: true
  }
});

const recoveryModuleSchema = new Schema({
  recoveryModuleAddress: {
    type: String,
    required: true,
    unique: true
  },
  safeAddress: {
    type: String,
    required: false,
    
  },
  assigned: {
    type: Boolean,
    required: true,
  }
});

const RecoveryAccount = mongoose.model('recoveryAccount', recoveryAccountSchema);
const RecoveryModule = mongoose.model('recoveryModule', recoveryModuleSchema);

module.exports = { RecoveryAccount, RecoveryModule };