document.addEventListener('DOMContentLoaded', () => {
  const nextLaunchUrl = 'https://api.spacexdata.com/v4/launches/next';
  const day = document.querySelector('.countdown__days');
  const hour = document.querySelector('.countdown__hours');
  const minute = document.querySelector('.countdown__minutes');
  const second = document.querySelector('.countdown__seconds');

  const countDownError = document.querySelector('#countdown-error');

  const nextLaunchApi = async () => {
    try {
      const response = await fetch(nextLaunchUrl);
      const json = await response.json();

      const time = json.date_unix;

      // const year = new Date().getFullYear();
      const nextLaunch = new Date(time * 1000);

      const updateCountDown = () => {
        const currentTime = new Date();
        const diff = nextLaunch - currentTime;

        const d = Math.floor(diff / 1000 / 60 / 60 / 24 + 1);
        const h = Math.floor(diff / 1000 / 60 / 60 + 1) % 24;
        const m = Math.floor(diff / 1000 / 60 + 1) % 60;
        const s = Math.floor(diff / 1000) % 60;

        day.innerHTML = `<span class="countdown__time">${d}</span>
         <p class="countdown__para">Days</p>`;
        hour.innerHTML = `<span class="countdown__time">${h < 10 ? '0' + h : h}</span>
         <p class="countdown__para">Hours</p>`;
        minute.innerHTML = `<span class="countdown__time">${m < 10 ? '0' + m : m}</span>
         <p class="countdown__para">Minutes</p>`;
        second.innerHTML = `<span class="countdown__time">${s < 10 ? '0' + s : s}</span>
        <p class="countdown__para">Seconds</p>`;
      };

      setInterval(updateCountDown, 1000);
    } catch (error) {
      countDownError.innerHTML = displayError('An error occured when loadgind countdown');
    }
  };

  nextLaunchApi();
});
