const APIURL = "https://api.github.com/users/";

var publicRepos = document.querySelector(".public-repos");

let username = "romhenri";

getUser(username);

async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username);

		updateStats(data);
	} catch (err) {
		console.log("Stats do Github NÃO carregados");
	}
}

function updateStats(data) {
	console.log("Stats do Github carregados");

	publicRepos.innerHTML = `
	${data.public_repos}
	`;
}
