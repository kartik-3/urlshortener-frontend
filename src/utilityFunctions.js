export function validateEmail(mail) {
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(mail).toLowerCase());
}

export const checkString = (rand) => {
  const response = fetch(
    `https://url-shortener-backend-kartik.herokuapp.com/email/${rand}`
  );
  return response;
};

export const updateUser = async (data) => {
  const response = await fetch(
    "https://url-shortener-backend-kartik.herokuapp.com/email",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

export const createUser = async (data) => {
  const response = await fetch(
    "https://url-shortener-backend-kartik.herokuapp.com/email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

export const checkUser = async (data) => {
  const response = await fetch(
    "https://url-shortener-backend-kartik.herokuapp.com/email",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

export const loginUser = async (data) => {
  const response = await fetch(
    "https://url-shortener-backend-kartik.herokuapp.com/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(data),
    }
  );
  return response;
};

export const checkLogin = async () => {
  const response = await fetch(
    "https://url-shortener-backend-kartik.herokuapp.com/",
    {
      method: "GET",
      credentials: "same-origin",
    }
  );
  return response;
};

export const userLogout = async () => {
  const response = await fetch(
    "https://url-shortener-backend-kartik.herokuapp.com/logout/",
    {
      method: "GET",
      credentials: "same-origin",
    }
  );
  return response;
};

export const convertUrl = async (data) => {
  const response = await fetch(
    "https://url-shortener-backend-kartik.herokuapp.com/url",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

export const getUrls = async () => {
  const response = await fetch(
    "https://url-shortener-backend-kartik.herokuapp.com/url"
  );
  return response;
};

export const showLogin = () => {
  if (document.querySelector("#login-btn").classList.contains("d-none")) {
    document.querySelector("#login-btn").classList.remove("d-none");
  }
  if (!document.querySelector("#logout-btn").classList.contains("d-none")) {
    document.querySelector("#logout-btn").classList.add("d-none");
    document.querySelector("#logged-in-label").classList.add("d-none");
  }
};

export const showLogout = (res) => {
  if (!document.querySelector("#login-btn").classList.contains("d-none")) {
    document.querySelector("#login-btn").classList.add("d-none");
  }
  if (document.querySelector("#logout-btn").classList.contains("d-none")) {
    document.querySelector("#logout-btn").classList.remove("d-none");
    document.querySelector("#logged-in-label").classList.remove("d-none");
  }
  document.querySelector("#logged-in-user").value = res.email;
};

export const showLogin2 = () => {
  if (document.querySelector("#login-btn-2").classList.contains("d-none")) {
    document.querySelector("#login-btn-2").classList.remove("d-none");
    document.querySelector("#email-label").classList.remove("d-none");
    document.querySelector("#password-label").classList.remove("d-none");
  }
  if (!document.querySelector("#logout-btn-2").classList.contains("d-none")) {
    document.querySelector("#logout-btn-2").classList.add("d-none");
    document.querySelector("#logged-in-label-2").classList.add("d-none");
  }
};

export const showLogout2 = (res) => {
  if (!document.querySelector("#login-btn-2").classList.contains("d-none")) {
    document.querySelector("#login-btn-2").classList.add("d-none");
    document.querySelector("#email-label").classList.add("d-none");
    document.querySelector("#password-label").classList.add("d-none");
  }
  if (document.querySelector("#logout-btn-2").classList.contains("d-none")) {
    document.querySelector("#logout-btn-2").classList.remove("d-none");
    document.querySelector("#logged-in-label-2").classList.remove("d-none");
  }
  document.querySelector("#logged-in-user-2").value = res.email;
};
