const userLogin = async (reqBody) => {
  let response;
  await fetch("/public/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody),
  })
    .then((res) => {
      console.log(res);
      response = res;
    })
    .catch((error) => {
      console.log(error);
    });

    return response;
};


const logout = async () => {
  let response;
  await fetch("/public/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      console.log(res);
      response = res;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};

const autoLogin = async () => {
  let response;
  await fetch("/public/autoLogin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      console.log(res);
      response = res;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};

export { userLogin, logout, autoLogin };
