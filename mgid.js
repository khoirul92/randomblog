var pages = [
"https://klikjenar.blogspot.com/",
"https://cornerkick86.blogspot.com/",
"https://footballcontroversial77.blogspot.com/",
"https://www.clickjenar.site/",
"https://bussines.clickjenar.site/",



];
function randomPage() {
return pages[Math.round(Math.random() * (pages.length - 1,2,3))];
}
location.href= randomPage();
