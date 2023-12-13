console.log("i am working");

const populate = async (value, currency) => {
  let myStr = "";
  const url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_cCUvpo0Svcokxp3Sop72DA0f7YeJ2k8UkjhfClsG&base_currency=" +
    currency;

  let response = await fetch(url);
  let rjson = await response.json();
  document.querySelector(".output").style.display = " block"

  console.log(rjson);

  for (let key of Object.keys(rjson["data"])) {
    myStr += `
      <tr>
        <td>${key}</td>
        <td>${rjson["data"][key]["code"]}</td>
        <td>${rjson["data"][key]["value"] * value}</td>
      </tr>`;
  }

  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", async (e) => {
  e.preventDefault();
 

  const value = parseInt(document.querySelector("input[name='quantity']").value);
  const currency = document.querySelector("select[name='currency']").value;

  await populate(value, currency);
});
