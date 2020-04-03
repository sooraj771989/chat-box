// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

export const getUsername = () => {
  const userStr = sessionStorage.getItem('username');
  if (userStr) return userStr;
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user, username) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('user', JSON.stringify(user));
}

export const getLoginURL = () => {
  const url = 'https://test-lbadmin-m.enterprisebot.co/api/v2/adminusers/login';
  return url;
}

//get sessionURL
export const getSessionURL = (id) => {
  const rr = `https://test-lbadmin-m.enterprisebot.co/api/v2/botsessions?filter=%7B%22limit%22%3A20%2C%22skip%22%3A0%2C%22order%22%3A%22id%20DESC%22%2C%22where%22%3A%7B%22agentId%22%3A%225bcee5bafe751a289f6154cf%22%7D%7D`;
  return rr;
}

// get the chatURL
export const getChatURL = (id) => {
  const getChatUrl= `https://test-lbadmin-m.enterprisebot.co/api/v2/botsessions/${id}/botmessage`
  return getChatUrl;
}

// set the token and user from chat click
export const setUserId = (token) => {
  const url = token;
}