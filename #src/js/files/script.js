//Sub-Menu
let iconSubMenu = document.querySelectorAll(".burger-sub-menu,.sub-menu__mob-title");
if (iconSubMenu != null) {
	let subMenu = document.querySelector(".sub-menu");
	let menu = document.querySelector(".menu");
	for (let index = 0; index < iconSubMenu.length; index++) {
		const el = iconSubMenu[index];
		el.addEventListener("click", function (e) {
			el.classList.toggle("_active");
			subMenu.classList.toggle("_active");
			menu.classList.toggle("_active");
		});
	}
}
//=================
let fileInput = document.querySelectorAll(".form__file");
Array.prototype.forEach.call(fileInput, function (input) {
	let label = input.nextElementSibling;

	input.addEventListener("change", function (e) {
		let countFiles = "";
		if (this.files && this.files.length >= 1) countFiles = this.files.length;

		if (countFiles) label.innerText = "Выбрано файлов: " + countFiles;
		label.classList.add("_attached");
	});
});
//=================
// ({
// 	plugins: ["jsdom-quokka-plugin"],
// });

//=================
const sliderPopups = document.querySelectorAll("._popup-link");
for (let index = 0; index < sliderPopups.length; index++) {
  const el = sliderPopups[index];
  
	el.addEventListener("click", function (e) {
    let item = el.getAttribute("href").replace("#", "");
		popup_open(item);
	});
}
//=================
let langSelect = document.querySelectorAll(".lang");
if (langSelect != null) {
	for (let index = 0; index < langSelect.length; index++) {
		const el = langSelect[index];
		el.addEventListener("click", function (e) {
			el.classList.toggle("_active");
		});
	}
}