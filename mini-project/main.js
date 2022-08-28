const mainContainer = document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let userContainer = document.createElement('div');
            let stud = document.createElement('button');
            userContainer.innerText = `${user.id} : ${user.name}`;
            stud.innerText = 'details';
            stud.onclick = function () {
                fetch(window.location.href =`user-details.html?user=${JSON.stringify(user)}`);
            }
            userContainer.appendChild(stud);
            mainContainer.appendChild(userContainer);
        }
    });