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
fetch(apiUrl)
	.then((response) => response.json())
	.then((data) => {
		// Percorre a lista de repositórios e faz uma solicitação separada para obter a lista de commits em cada um
		data.forEach((repo) => {
			fetch(`https://api.github.com/repos/${repo.full_name}/commits`)
				.then((response) => response.json())
				.then((data) => {
					// Exibe a lista de commits em um elemento HTML no seu site
					const commitsList = document.getElementById("commits-list");
					data.forEach((commit) => {
						const commitItem = document.createElement("li");
						commitItem.innerText = `${commit.commit.author.name} - ${commit.commit.message} - ${commit.commit.author.date}`;
						commitsList.appendChild(commitItem);
					});
				})
				.catch((error) => {
					console.error(error);
				});
		});
	})
	.catch((error) => {
		console.error(error);
	});
