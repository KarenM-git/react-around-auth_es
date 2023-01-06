const BASE_URL = "https://register.nomoreparties.co";

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((res) => {
          console.log(res)
        if (res.error) {
          throw new Error(res.error);
        }
      })
};


export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
      .then((data) => {
          console.log(data);
      // does data have a jwt in it?
      if (data.token) {
        // if so, save it to local storage and return data
        // don't worry about this line now -- it will be explained soon
        localStorage.setItem("token", data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
};


export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res);
}; 