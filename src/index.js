import {
  validateEmail,
  createUser,
  checkLogin,
  userLogout,
  showLogin,
  showLogout,
} from "./utilityFunctions.js";

(() => {
  checkLogin()
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        swal({ text: "Unauthorized user!" });
      }
    })
    .then((res) => {
      if (res.userLoggedIn) {
        showLogout(res);
      } else {
        showLogin();
      }
    });
})();

document.querySelector("#sign-up-btn").addEventListener("click", () => {
  const email = document.querySelector("#email").value;
  if (!validateEmail(email)) {
    $("#email").popover("show");
    setTimeout(function () {
      $("#email").popover("hide");
    }, 5000);
  } else {
    $("#sign-up-modal").modal("show");
  }
});

document
  .querySelector("#save-create-password")
  .addEventListener("click", () => {
    const pw1 = document.querySelector("#create-password").value;
    const pw2 = document.querySelector("#create-confirm-password").value;
    const email = document.querySelector("#email").value;

    if (pw1 !== pw2) {
      swal({ text: "Passwords don't match!" });
    } else {
      const data = {
        email: email,
        password: pw1,
      };

      createUser(data).then((response) => {
        if (response.status != 200) {
          swal({ text: "User already exists." });
        } else {
          swal({ text: "Signed up successfully!" });
        }
      });
    }
  });

document.querySelector("#logout-btn").addEventListener("click", () => {
  userLogout().then((response) => {
    if (response.status == 200) {
      swal({ text: "User logged out!" });
      showLogin();
    } else {
      swal({ text: "Some error occurred." });
    }
  });
});
