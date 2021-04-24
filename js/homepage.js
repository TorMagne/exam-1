const headerSubTitle = document.querySelector('.header__sub__title');
const informationHeader = document.querySelector('.information__container');
const nextLaunchUrl = 'https://api.spacexdata.com/v4/launches/next';
const nextRocket = 'https://api.spacexdata.com/v4/rockets/';

const nextLaunch = async () => {
  try {
    // nextlaunch
    const response = await fetch(nextLaunchUrl);
    const launchJson = await response.json();

    const date = launchJson.date_unix;
    const nextLaunch = new Date(date * 1000);
    const launchName = launchJson.name;
    // id for the rocket for next launch
    const rocketId = launchJson.rocket;

    // the rocket for next launch
    const rocketResponse = await fetch(nextRocket + rocketId);
    const rocketJson = await rocketResponse.json();
    const rocketName = rocketJson.name;
    const rocketFirstFlight = rocketJson.first_flight;
    const rocketDescription = rocketJson.description;
    console.log(rocketJson);

    // api html
    headerSubTitle.innerHTML += launchName;
    informationHeader.innerHTML += `<p class="information__para">The ${launchName} will launch at ${nextLaunch}</p> 
    <p class="information__para"> The ${launchName} will use the rocket ${rocketName} witch 
    had it's first use in ${rocketFirstFlight}.
    ${rocketDescription}`;

    // console.log(json);
  } catch (error) {
    console.log(error);
  }
};

nextLaunch();
