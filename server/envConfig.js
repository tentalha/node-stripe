require("dotenv").config();

const PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;
const SECRET = process.env.STRIPE_SECRET_KEY;

module.exports = { PUBLISHABLE_KEY, SECRET };
