// /** @type {import('next').NextConfig} */
const fs = require("fs");
const { i18n } = require('./next-i18next.config')


const nextConfig = {
  reactStrictMode: false,
  styledComponents: true,
  i18n
}

module.exports = nextConfig
