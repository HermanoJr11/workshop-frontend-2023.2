const starWarsApi = document.querySelector('#starwarsApi')
const starWarsCount = 82


const fetchStarwars = async () => {
    for (let i = 0; i <= starWarsCount; i++) {
        await getStarwars(i)
    }
}

const getStarwars = async () => {
    const url = `https://swapi.dev/api/people/`
    const response = await fetch(url)
    const data = await response.json()
    // createStarWarsCard(data)
    console.log(data.results[0].name)
    
}

const createStarWarsCard = (sw) => {
    const card = document.createElement('div')
    card.classList.add('starwars')

    const name = sw.name[0].toUpperCase() + starWarsCount.name.slice(1)
    const eyes = sw.eyes_collor.toString().padStart(3, 0)
    const height = sw.height.toUpperCase() + starWarsApi.name

}

getStarwars()
