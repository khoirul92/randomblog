
var pages = [
"https://klikjenar.blogspot.com/2020/10/cara-merawat-wajah-tanpa-skincare-agar.html",
"https://klikjenar.blogspot.com/2020/10/tips-jitu-jika-kamu-dijauhi-teman.html",
"https://klikjenar.blogspot.com/2020/10/5-kesalahan-saat-bertengkar-dengan.html",
"https://klikjenar.blogspot.com/2020/10/khasiat-tersembunyi-terong-untuk.html",
"https://klikjenar.blogspot.com/2020/10/khasiat-buah-mengkudu-bagi-kesehatan.html",
"https://klikjenar.blogspot.com/2020/10/pilihlah-laki-laki-yang-bisa-mencintai.html",
"https://klikjenar.blogspot.com/2020/07/slain-montgomery-teen-was-attacked-with.html",


];
function randomPage() {
return pages[Math.round(Math.random() * (pages.length - 1,2,3))];
}
location.href= randomPage();
