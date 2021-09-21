import Axios from '../../axios';

//////////
// ACTIONS
//////////

export const setToken = (token) => {
  return { type: 'USER_ADD_TOKEN', payload: token };
};

export const addUserData = (data) => {
  return { type: 'USER_ADD_DATA', payload: data };
};

//////////
// API HANDLING
//////////

export const apiUserVerifyToken = (token) => (dispatch) => {
  const url = 'auth/token/verify/';
  const msgData = {
    token: token,
  };

  Axios.post(url, msgData)
    .then((response) => {
      dispatch(setToken(token));
      dispatch(apiUserGetData(token));
      console.log('Token verification successful.');
    })
    .catch((error) => {
      dispatch(setToken(null));
      console.log('Token invalid. Please log in.');
    });
};

export const apiUserLogin = (email, password) => (dispatch) => {
  const url = 'auth/token/';
  const msgData = {
    email: email,
    password: password,
  };

  console.log('trying login');
  Axios.post(url, msgData)
    .then((response) => {
      const token = response.data.access;
      dispatch(setToken(token));
      dispatch(apiUserGetData(token));
      console.log('Login successful.');
      return true;
    })
    .catch((error) => {
      dispatch(setToken(''));
      console.log('Login failed', error.response.data);
      return false;
    });
};


export const apiUserSignUp = (email) => (dispatch) => {
  dispatch(addUserData({email: email}))
  const url = 'registration/';
  const msgData = {
    email: email,
  };

  Axios.post(url, msgData)
    .then((response) => {
      console.log('Registration successful.');
    })
    .catch((error) => {
      console.log('Registration error', error.response.data);
    });
};

export const apiUserVerify = (
  email,
  userName,
  code,
  password,
  passwordRepeat,
  ) => (dispatch) => {
    const url = 'registration/validate/';
    const msgData = {
      email: email,
      username: userName,
      code: code,
      password: password,
      password_confirmation: passwordRepeat,
    };

  Axios.patch(url, msgData)
    .then((response) => {
      console.log('Registration successful.');
    })
    .catch((error) => {
      console.log('Registration failed', error.response.data);
    });
};

export const apiUserGetData = (token) => (dispatch) => {
  // check if token is valid
  if (!token) {
    console.log('invalid token');
    return false;
  }

  // prepare data
  const url = 'user/me/';
  const auth = 'Bearer ' + token;
  const headers = { headers: { Authorization: auth } };

  Axios.get(url, headers)
    .then((response) => {
      dispatch(addUserData(response.data));
      console.log('User data retrieved');
    })
    .catch((error) => {
      console.log('apiUserGetData', error.response.data);
    });
};



