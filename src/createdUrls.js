import { getUrls } from "./utilityFunctions.js";

let tr = [],
  th1 = [],
  td2 = [],
  td3 = [],
  td4 = [],
  td5 = [];

(() => {
  getUrls()
    .then((res) => res.json())
    .then((data) => {
      const urlTable = document.querySelector("#url-table");
      if (data.length === 0) {
        if (!urlTable.classList.contains("d-none")) {
          urlTable.classList.add("d-none");
        }
      } else {
        if (urlTable.classList.contains("d-none")) {
          urlTable.classList.remove("d-none");
        }
      }
      const tbody = document.querySelector("#url-tbody");
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        tr[i] = document.createElement("tr");
        th1[i] = document.createElement("th");
        td2[i] = document.createElement("td");
        td3[i] = document.createElement("td");
        td4[i] = document.createElement("td");
        td5[i] = document.createElement("td");

        th1[i].innerText = i + 1;
        td2[i].innerText = data[i].originalUrl;
        td3[i].innerText = "https://url-shortener-backend-kartik.herokuapp.com/url/" + data[i].shortUrl;
        td4[i].innerText = data[i].creationDate;
        td5[i].innerText = data[i].creationTime;

        tr[i].appendChild(th1[i]);
        tr[i].appendChild(td2[i]);
        tr[i].appendChild(td3[i]);
        tr[i].appendChild(td4[i]);
        tr[i].appendChild(td5[i]);
        tbody.appendChild(tr[i]);
      }
    });
})();
