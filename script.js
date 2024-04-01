const urlParams = new URLSearchParams(window.location.search);
const cookieConfig = "path=/; domain=.buckedup.com;max-age=3600";
urlParams.forEach((value, key) => {
  document.cookie = `${key}=${value};${cookieConfig}`;
});