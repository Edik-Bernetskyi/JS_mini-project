const JOSINPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JOSINPost);
let postInfoDiv = document.getElementsByClassName('postInfoDiv')[0];
postInfoDiv.innerText =
    `userId: ${post.userId},
                        id: ${post.id},
                        title: ${post.title},
                        body: ${post.body}`
let com = document.getElementsByClassName('com')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            let comDiv = document.createElement('div');
            comDiv .innerText =
                `postId:${comment.postId},
                        id:${comment.id},
                        name:${comment.name},
                        email:${comment.email},
                        body:${comment.body}`;
            com.append(comDiv);
        }
    });