let baseUrl = '';
baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/backend/api/' : 'https://octo.propulsion-learn.ch/backend/api/'
export const defaultUserProfileBanner = require('./assets/images/banner.png');
export default baseUrl;
