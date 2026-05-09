let losAngelesElement = document.getElementById("los-angeles");
let parisElement = document.getElementById("paris");
let tokyoElement = document.getElementById("tokyo");
let timezoneSelect = document.getElementById("timezone-select");

let flagMap = {
  "America/Los_Angeles": "🇺🇸",
  "America/New_York": "🇺🇸",
  "Europe/London": "🇬🇧",
  "Europe/Paris": "🇫🇷",
  "Asia/Tokyo": "🇯🇵",
  "Pacific/Auckland": "🇳🇿"
};

function updateTime() {
  let losAngelesTime = moment().tz("America/Los_Angeles");
  let parisTime = moment().tz("Europe/Paris");
  let tokyoTime = moment().tz("Asia/Tokyo");

  // Los Angeles
  losAngelesElement.querySelector("h2").innerHTML =
    `Los Angeles ${flagMap["America/Los_Angeles"]}`;
  losAngelesElement.querySelector(".date").innerHTML =
    losAngelesTime.format("MMMM Do YYYY");
  losAngelesElement.querySelector(".time").innerHTML =
    `${losAngelesTime.format("h:mm:ss")} <small>${losAngelesTime.format("A")}</small>`;

  // Paris
  parisElement.querySelector("h2").innerHTML =
    `Paris ${flagMap["Europe/Paris"]}`;
  parisElement.querySelector(".date").innerHTML =
    parisTime.format("MMMM Do YYYY");
  parisElement.querySelector(".time").innerHTML =
    `${parisTime.format("h:mm:ss")} <small>${parisTime.format("A")}</small>`;

  // Tokyo
  tokyoElement.querySelector("h2").innerHTML =
    `Tokyo ${flagMap["Asia/Tokyo"]}`;
  tokyoElement.querySelector(".date").innerHTML =
    tokyoTime.format("MMMM Do YYYY");
  tokyoElement.querySelector(".time").innerHTML =
    `${tokyoTime.format("h:mm:ss")} <small>${tokyoTime.format("A")}</small>`;
}

// Handle dropdown selection
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) return;

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let flag = flagMap[cityTimeZone] || "";

  let citiesElement = document.querySelector("#timezone");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName} ${flag}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")} 
        <small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

timezoneSelect.addEventListener("change", updateCity);
