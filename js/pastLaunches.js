const launchesContainer = document.querySelector('.launches__container');
const green = document.querySelector('.green');
const red = document.querySelector('.red');

const items = document.querySelector('.items');

launchesContainer.innerHTML = `<div class="container">
                                <div class="loader">
                                </div>
                               </div>`;

// links
const pastLaunchesUrl = 'https://api.spacexdata.com/v4/launches/past';

const pastLaunches = async () => {
  try {
    const response = await fetch(pastLaunchesUrl);
    const json = await response.json();
    json.reverse();
    console.log(json);

    launchesContainer.innerHTML = '';

    json.forEach((array, index) => {
      const launchLoop = json[index];
      const name = launchLoop.name;
      const date = launchLoop.date_utc;
      const newDate = date.split('T')[0];
      const succsess = launchLoop.success;
      const link = launchLoop.links.webcast;

      const successOrFailure = () => {
        if (succsess) {
          return `<span class="green">Succsess</span>`;
        } else {
          return `<span class="red">Failure</span>`;
        }
      };

      launchesContainer.innerHTML += `<div class="launches__items">
                                        <p class="launches__title">Mission: ${name}</p>
                                        <p class="launches__time">Launched at: ${newDate}</p>
                                        <a href="${link}" class="launches__link">Launch video</a>
                                        <p>Launch: ${successOrFailure()}</P>
                                      </div>`;
    });
  } catch (error) {
    launchesContainer.innerHTML = displayError('An error occured when loading countdown');
  }
};

pastLaunches();
