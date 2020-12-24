import { convertUrl } from "./utilityFunctions.js";

document
  .querySelector("#shorten-new-url-save-btn")
  .addEventListener("click", () => {
    const bigUrl = document.querySelector("#big-url").value;
    convertUrl({ url: bigUrl })
      .then((res) => {
        if (res.status === 400) {
          swal({ text: "Invalid request" });
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (!(typeof data === "object")) {
          return;
        } else {
          if (!data.shortUri) {
            swal({ text: "Provided URL has already been converted once" });
          } else {
            document.querySelector("#short-url").value =
              "Converted URL is https://url-shortener-backend-kartik.herokuapp.com/" + data.shortUri;
            document.querySelector("#short-url").classList.remove("d-none");
            swal({
              text: "URL converted successfully.",
            });
          }
        }
      });
  });
