
var pages = [
"https://minimalisthousedesign77.blogspot.com/",
"https://stramingmovieonline.blogspot.com/",



];
function randomPage() {
return pages[Math.round(Math.random() * (pages.length - 1,2,3))];
}
location.href= randomPage();
