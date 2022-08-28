const JSONUser = new URL(location).searchParams.get('user');
const user = JSON.parse(JSONUser);
let userInfoDiv = document.getElementsByClassName('userInfoDiv')[0];
userInfoDiv.innerText =
    `id: ${user.id},
         name: ${user.name},
         username: ${user.username},
         email: ${user.email},
         address:
                street: ${user.address.street},
                suite: ${user.address.suite},
                city: ${user.address.city},
                zipcode:${user.address.zipcode},
         geo: 
                lat: ${user.address.geo.lat},
                lng: ${user.address.geo.lng}
         phone: ${user.phone},
         website: ${user.website},
         company: 
                name: ${user.company.name},
                catchPhrase:${user.company.catchPhrase},
                bs: ${user.company.bs}`
let pos = document.getElementsByClassName('pos')[0];
let detailsBtn = document.createElement('button');
detailsBtn.innerText = 'POST OF CURRENT USER'
detailsBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            let postBox = document.getElementsByClassName('post-box')[0];
            postBox.innerHTML = '';
            for (const post of posts) {
                let divPost = document.createElement('div');
                divPost.innerText = post.title;
                let btn = document.createElement('a');
                btn.innerText = 'Get info post';
                btn.onclick = function () {
                    fetch(window.location.href = `post-details.html?post=${JSON.stringify(post)}`);
                }
                postBox.append(divPost);
                divPost.append(btn);
            }
        });
};
pos.append(detailsBtn);