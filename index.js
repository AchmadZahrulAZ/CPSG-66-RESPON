const renderUserItem = user => {
    return `
        <div class="shadow p-3 mt-2">
            <span class="user-id small">${user.id}</span>
            <h3 class="username">${user.username}</h3>
            <h3 class="username">${user.password}</h3>
        </div>
    `
}

window.addEventListener('load', () => {
    fetch('/api/list-login')
        .then(res => res.json())
        .then(result => {
            console.log(result);

            const userContainer = document.getElementsByClassName('user-container')[0]
            userContainer.innerHTML = result.map(renderUserItem).join('')

        })
        .catch(eror => {
            console.log(eror);
        })
})

