'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude, longitude } = position.coords;

    const apiLinkGoogleMaps = `https://www.google.pt/maps/@${latitude},${longitude}`;
    const coords = [latitude, longitude];

    const map = L.map('map').setView(coords, 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on('click', function (mapEvent) {
      console.log(mapEvent?.latlng);
      let { lat, lng } = mapEvent?.latlng;
      L.marker([lat, lng]).addTo(map).bindPopup('Workout').openPopup();
    });
  },
  function () {
    alert('Could not get your location');
  }
);
