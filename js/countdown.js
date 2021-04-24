document.addEventListener('DOMContentLoaded', () => {
  const nextLaunchUrl = 'https://api.spacexdata.com/v4/launches/next';

  const apiCall = async () => {
    try {
      const response = await fetch(nextLaunchUrl);
      const json = await response.json();
      console.log(json);

      
    } catch (error) {
      console.log(error);
    }
  };

  apiCall();
});
