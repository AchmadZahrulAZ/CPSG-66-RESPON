window.addEventListener('load', () => {

    document.getElementById('submit').addEventListener('click', () => {

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const role = document.getElementById('role').value

        // if (!name || !company) return console.log('Isi dulu bossque');

        fetch(`/api/login?username=${email}&password=${password}&role=${role}`)
            .then(res => res.json())
            .then(result => {
                console.log('success', result);
            })
            .catch(eror => {
                console.log(eror);
            })
    })
})