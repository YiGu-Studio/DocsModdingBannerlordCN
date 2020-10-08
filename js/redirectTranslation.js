/**
 *  Redirect header navigation links to different translated versions of the current page
 */
$(document).ready(function () {
  $("body > header > div > nav > li > a").click(function (e) {
    e.preventDefault();
    var oldUrl = $(this).attr("href"); // Get current translation url
    var newUrl = `${oldUrl}/${location.pathname.split("/").slice(3).join("/")}`;
    location.href = newUrl; // Set herf value
    return false;
  });
});
