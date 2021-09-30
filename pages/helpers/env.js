import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const CURRENT_ENV = publicRuntimeConfig.ENV || null;
const CURRENT_API = publicRuntimeConfig.API || null;
const CURRENT_HOST = publicRuntimeConfig.HOST || null;
const BASE_URL = CURRENT_HOST;
const LOGO = ``;
const NO_IMAGE = `https://media.graphcms.com/kapUjG8yQkCl0Wgc6L8r`;
const NO_IMAGE_SIZE = 621;

const env = {
  CURRENT_ENV,
  CURRENT_API,
  CURRENT_HOST,
  BASE_URL,
  LOGO,
  NO_IMAGE,
  NO_IMAGE_SIZE
};

export default env;