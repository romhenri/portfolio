const body = document.body;
const darkMode = document.getElementById("darkMode");

if (body.classList.contains("dark")) {
	darkMode.checked = true;
}

document.addEventListener("keydown", function (event) {
	if (event.key === "b" || event.key === "B") {
		console.log("Tecla B pressionada!");

		body.classList.toggle("dark");
	}

	if (body.classList.contains("dark")) {
		darkMode.checked = true;
	} else {
		darkMode.checked = false;
	}
});

darkMode.addEventListener("click", () => {
	if (darkMode.value) {
		body.classList.toggle("dark");
	}
});
