require('dotenv').config(); // Import dotenv first

const dev = {
    app: {
        port: process.env.PORT || 4000  // "PORT" must be in uppercase
    },

    db: {
        url: process.env.DB_URL || "mongodb://localhost:27017/userDemoDB"
    }
};

module.exports = dev;  // Make sure to export

