// Get the i1i8n details specified in next.config.js, if any
const getNextConfig = require("./getNextConfig");

const getI18n = () => {
  const nextConfig = getNextConfig();

  return nextConfig.i18n || { locales: [] };
};

module.exports = getI18n;
