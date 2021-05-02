const headerSubTitle = document.querySelector('.header__sub__title');
const informationHeader = document.querySelector('.information__container');
// links
const nextLaunchUrl = 'https://api.spacexdata.com/v4/launches/next';
const nextRocket = 'https://api.spacexdata.com/v4/rockets/';
const nextLaunchPad = 'https://api.spacexdata.com/v4/launchpads/';
// launchpad details classes
const lPadname = document.querySelector('.summary__pad__name');
const lPadLocation = document.querySelector('.summary__pad__location');
const lPaddetails = document.querySelector('.summary_pad__details');

const nextLaunch = async () => {
  try {
    // nextlaunch
    const response = await fetch(nextLaunchUrl);
    const launchJson = await response.json();

    const date = launchJson.date_unix;
    const nextLaunch = new Date(date * 1000);

    // id for the rocket for next launch
    const rocketId = launchJson.rocket;
    // the rocket for next launch
    const rocketResponse = await fetch(nextRocket + rocketId);
    const rocketJson = await rocketResponse.json();
    console.log(rocketJson);

    // id for the launch pad for next launch
    const launchPadId = launchJson.launchpad;
    // launch pad for next launch
    const launchPadResponce = await fetch(nextLaunchPad + launchPadId);
    const launchPadJson = await launchPadResponce.json();

    // api html
    headerSubTitle.innerHTML += launchJson.name;
    informationHeader.innerHTML += `<p class="information__para">
                                    The ${launchJson.name}  will launch at ${nextLaunch}</p> 
                                    <p class="information__para">
                                    The ${launchJson.name} will use the rocket ${rocketJson.name} witch 
                                    had it's first use in ${rocketJson.first_flight}.<p class="information__para">
                                    ${rocketJson.description}</p>`;

    // information from api about launchpad details
    lPadname.innerHTML += `<p>Name: ${launchPadJson.full_name}.</p> 
                          <p>${launchPadJson.name}   for short</p>`;
    lPadLocation.innerHTML += `<ul>
                    <li>
                    Location: ${launchPadJson.locality}
                    </li>
                    <li>
                    Timezone: ${launchPadJson.timezone}
                    </li>
                    <li>
                    Latitude: ${launchPadJson.latitude}
                    </li>
                    <li>
                    Longtitude: ${launchPadJson.longitude}
                    </li>
                    </ul>`;
    lPaddetails.innerHTML += `<p>${launchPadJson.details}</p>`;
  } catch (error) {
    informationHeader.innerHTML = displayError('An error occured when loading countdown');
    lPadname.innerHTML = displayError('An error occured when loading countdown');
    lPadLocation.innerHTML = displayError('An error occured when loading countdown');
  }
};

nextLaunch();
