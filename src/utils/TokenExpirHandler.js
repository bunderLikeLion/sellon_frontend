/*const handlerError = (err) => {
  const { response } = err;
  const { data } = response;
  const accessToken = localStorage.getItem('access_token');

  if ([401, 403].includes(response.status) && accessToken) {
    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    setUser(null);
    localStorage.clear();
    navigate('/login');
  }
  const error = (data && data.message) || response.statusText;
  return Promise.reject(error);
};*/
