const secret = 'passwordChad';
const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

module.exports = {
  secret,
  jwtConfig,
};
