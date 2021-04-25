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

    // id for the launch pad for next launch
    const launchPadId = launchJson.launchpad;
    // launch pad for next launch
    const launchPadResponce = await fetch(nextLaunchPad + launchPadId);
    const launchPadJson = await launchPadResponce.json();
    const launchPadName = launchPadJson.name;
    const launchPadFullName = launchPadJson.full_name;
    const launchPadLocation = launchPadJson.locality;
    const launchPadTimezone = launchPadJson.timezone;
    const launchPadLatitude = launchPadJson.latitude;
    const launchPadLongtitude = launchPadJson.longitude;
    const launchPadDetails = launchPadJson.details;

    // api html
    headerSubTitle.innerHTML += launchName;
    informationHeader.innerHTML += `<p class="information__para">
                                    The ${launchName}  will launch at ${nextLaunch}</p> 
                                    <p class="information__para">
                                    The ${launchName} will use the rocket ${rocketName} witch 
                                    had it's first use in ${rocketFirstFlight}.<p class="information__para">
                                    ${rocketDescription}</p>`;

    // information from api about launchpad details
    lPadname.innerHTML += `<p>Name: ${launchPadFullName}.</p> 
                          <p>${launchPadName}   for short</p>`;
    lPadLocation.innerHTML += `<ul>
                    <li>
                    Location: ${launchPadLocation}
                    </li>
                    <li>
                    Timezone: ${launchPadTimezone}
                    </li>
                    <li>
                    Latitude: ${launchPadLatitude}
                    </li>
                    <li>
                    Longtitude: ${launchPadLongtitude}
                    </li>
                    </ul>`;
    lPaddetails.innerHTML += `<p>${launchPadDetails}</p>`;
    // console.log(json);
  } catch (error) {
    console.log(error);
  }
};

nextLaunch();
