const launchesContainer = document.querySelector('.launches__container');
const green = document.querySelector('.green');
const red = document.querySelector('.red');

const items = document.querySelector('.items');

launchesContainer.innerHTML = `<div class="loader"></div>`;

const error = document.querySelector('#countdown-error');

// links
const upcomingUrl = 'https://api.spacexdata.com/v4/launches/upcoming';

const pastLaunches = async () => {
  try {
    const response = await fetch(upcomingUrl);
    const json = await response.json();
    console.log(json);

    launchesContainer.innerHTML = '';

    json.forEach((array, index) => {
      const launchLoop = json[index];
      const name = launchLoop.name;
      const date = launchLoop.date_utc;
      const newDate = date.split('T')[0];

      launchesContainer.innerHTML += `<div class="launches__items">
                                        <p class="launches__title">Mission: ${name}</p>
                                        <p class="launches__time">Launch date: ${newDate}</p>
                                      </div>`;
    });
  } catch (error) {
    error.innerHTML = displayError('An error occured when loading countdown');
  }
};

pastLaunches();
