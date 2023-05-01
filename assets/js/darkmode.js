const body = document.body;

document.addEventListener("keydown", function (event) {
	if (event.key === "b" || event.key === "B") {
		console.log("Tecla B pressionada!");

		body.classList.toggle("dark");
	}
});
