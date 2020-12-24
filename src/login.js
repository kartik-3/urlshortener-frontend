import {
  checkUser,
  loginUser,
  validateEmail,
  checkLogin,
  userLogout,
  showLogin2,
  showLogout2,
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
        showLogout2(res);
      } else {
        showLogin2();
      }
    });
})();

document.querySelector("#login-btn-2").addEventListener("click", (event) => {
  event.preventDefault();
  const mail = document.querySelector("#email").value;
  const pw = document.querySelector("#password").value;
  if (validateEmail(mail)) {
    const data = {
      email: mail,
      sendMail: false,
    };
    checkUser(data).then((response) => {
      if (response.status != 404) {
        loginUser({ email: mail, password: pw }).then((res) => {
          if (res.status == 200) {
            swal({
              text: "User has logged in!",
            });
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
                  showLogout2(res);
                } else {
                  showLogin2();
                }
              });
          } else {
            swal({
              text: "Invalid user.",
            });
          }
        });
      } else {
        swal({ text: "User does not exist." });
      }
    });
  } else {
    $("#email").popover("show");

    setTimeout(function () {
      $("#email").popover("hide");
    }, 5000);
  }
});

document.querySelector("#logout-btn-2").addEventListener("click", () => {
  userLogout().then((response) => {
    if (response.status == 200) {
      swal({ text: "User logged out!" });
      showLogin2();
    } else {
      swal({ text: "Some error occurred." });
    }
  });
});
