const cardsList = document.querySelector('#cards-list')

const POSTS_API = 'https://jsonplaceholder.typicode.com/posts'

const renderCards = (posts) => {
    cardsList.innerHTML = posts.map((post) => `
        <div class="card">
            <span class="card-id">#${post.id}</span>
            <h3 class="card-title">${post.title}</h3>
            <p class="card-body">${post.body}</p>
        </div>
    `).join('')
}

const loadCards = async () => {
    try {
        const response = await fetch(POSTS_API)

        if (!response.ok) {
            throw new Error(`Ошибка запроса: ${response.status}`)
        }

        const posts = await response.json()
        renderCards(posts)
    } catch (error) {
        console.error('Ошибка загрузки карточек:', error)
        cardsList.innerHTML = '<p class="cards-error">Не удалось загрузить карточки</p>'
    }
}

loadCards()