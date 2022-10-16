const userObj = {
  name: 'chad beatdown',
  email: 'chad@gmail.com',
  password: 'passwordChad',
};

const adminObj = {
  name: 'chad adm',
  email: 'chadAdm@gmail.com',
  password: 'passwordChadAdm',
  role: 'admin',
};

const emailError = {
  email: 'cha@gmail.com',
  password: 'passwordChad',
};

const passwordError = {
  email: 'chad@gmail.com',
  password: 'password',
};

const correctLogin = {
  email: 'chad@gmail.com',
  password: 'passwordChad',
};

const correctLoginAdmin = {
  email: 'chadAdm@gmail.com',
  password: 'passwordChadAdm',
};

const recipeObj = {
  name: 'Bolo de chocolate',
  ingredients: 'Trigo, chocolate, ovo, manteiga',
  preparation: '10 min no forno',
};

const recipeObjModify = {
  name: 'Bolo de morango',
  ingredients: 'Trigo, morango, ovo, manteiga',
  preparation: '10 min no forno',
};

module.exports = {
  userObj,
  adminObj,
  emailError,
  passwordError,
  correctLogin,
  correctLoginAdmin,
  recipeObj,
  recipeObjModify,
};
