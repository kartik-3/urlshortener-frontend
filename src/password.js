import { validateEmail, checkUser } from "./utilityFunctions.js";

document
  .querySelector("#reset-password-btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const mail = document.querySelector("#email").value;
    if (validateEmail(mail)) {
      const data = {
        email: mail,
        sendMail: true,
      };
      checkUser(data).then((response) => {
        if (response.status != 404) {
          swal({
            text:
              "A verification link has been sent to your mail id. Please click on that link.",
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
