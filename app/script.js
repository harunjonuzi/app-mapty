import "../src/scss/styles.scss";

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

// navigator.geolocation.getCurrentPosition(
//     function (position) {
//         console.log(position);
//     },
//     function () {
//         alert("Could not get your position");
//     }
// );

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
