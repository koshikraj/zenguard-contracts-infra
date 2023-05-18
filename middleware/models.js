import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const recoveryAccountSchema = new Schema({
  recoveryEmailHash: {
    type: String,
    required: true,
    unique: true
  },

  webAuthnCreds: {
    type: Object,
    required: false,
    unique: true
  },
  
  safeAddress: {
    type: String,
    required: true,
    
  },
  recoveryModuleAddress: {
    type: String,
    required: true
  }, 
  chainId: {
    type: Number,
    required: true,
    
  },
});

const recoveryModuleSchema = new Schema({
  recoveryModuleAddress: {
    type: String,
    required: true,
    unique: true
  },
  chainId: {
    type: Number,
    required: true,
    
  },
});

export const RecoveryAccount = mongoose.model('recoveryAccount', recoveryAccountSchema);
export const RecoveryModule = mongoose.model('recoveryModule', recoveryModuleSchema);

// module.exports = { RecoveryAccount, RecoveryModule };