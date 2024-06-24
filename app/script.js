import "../src/scss/styles.scss";

// prettier-ignore
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    const map = L.map("map").setView(coords, 15);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on("click", function (mapEvent) {
      form.classList.remove("hidden");
      inputDistance.focus();
      // console.log(mapEvent);
      // const { lat, lng } = mapEvent.latlng;
      // console.log(lat);
      // console.log(lng);

      // L.marker([lat, lng])
      //   .addTo(map)
      //   .bindPopup(
      //     L.popup({
      //       maxWidth: 250,
      //       minWidth: 100,
      //       autoClose: false,
      //       closeOnClick: false,
      //       className: "cycling-popup",
      //     })
      //   )
      //   .setPopupContent("Workout")
      //   .openPopup();
    });
  },
  function () {
    alert("Could not get your position");
  }
);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

var expect = function (val1) {
  return {
    toBe(val2) {
      if (val1 === val2) {
        return true;
      } else if (val1 !== val2) {
        throw new Error("Not Equal");
      }
    },

    notToBe(val2) {
      if (val1 !== val2) {
        return true;
      } else if (val1 === val2) {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).notToBe(2));
