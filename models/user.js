const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, require: true },
    profit_perhour: { type: Number, require: true },
    coins: { type: Number, require: true },
    fan_tokens_level: { type: Number, require: true },
    btc_pairs_level: { type: Number, require: true },
    eth_pairs_level: { type: Number, require: true },
    top_10_cmc_pairs_level: { type: Number, require: true }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;