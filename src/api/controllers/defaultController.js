const defaultService = require('../services/defaultService');
require('dotenv').config();

const Hello = async (request, response) => {
  try {
    const default1 = await defaultService.getDefault();
    return response.status(200).json(default1);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};

module.exports = { Hello };
