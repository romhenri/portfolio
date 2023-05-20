const APIURL = 'https://api.github.com/users/'

var publicRepos = document.querySelector('.public-repos')
var starsCount = document.querySelector('.stars-count')

let username = 'romhenri'

getUser(username)

async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username)

		updateStats(data)
	} catch (err) {
		console.log('Stats do Github NÃO carregados')
	}
}

function updateStats(data) {
	console.log('Stats do Github carregados')

	publicRepos.innerHTML = `
	${data.public_repos}
	`
}

// Commits

const token = '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'

// Starts

fetch('https://api.github.com/users/romhenri/repos')
	.then((response) => response.json())
	.then((data) => {
		let totalStars = 0
		data.forEach((repo) => {
			totalStars += repo.stargazers_count
		})
		starsCount.innerHTML = `${totalStars}`
		counterAnimation()
	})
