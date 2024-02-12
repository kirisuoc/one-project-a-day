const timeSince = (date) => {
    const seconds = Math.floor(
        (new Date() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    if (seconds < 10) {
        return "just now";
    }
    return Math.floor(seconds) + " seconds ago"    
}

//? defined comment authors
const users = {
    'cousi9': {
        name: 'Erik Rubio',
        src: 'img/rubio.jpg'
    },
    'pam95': {
        name: 'Pamela Salw',
        src: 'img/pamela.jpg'
    },
    'erik95': {
        name: 'Erik Cousillas',
        src: 'img/erik.png'
    },

};

const loggedUser = users['erik95'];
let comments = [
    {
        id: 1,
        text: 'Thanks everyone!',
        author: users['cousi9'],
        createdAt: '2024-02-10 12:00:00',
    },
    {
        id: 2,
        text: 'Im am on it, will get back to you at the end of the week :)',
        author: users['pam95'],
        createdAt: '2024-01-03 12:00:00',
    },
    {
        id: 3,
        text: 'I will prepare Instagram strategy, Pam will take care about Facebook',
        author: users['erik95'],
        createdAt: '2023-02-10 12:00:00',
    },

];

const authedUser = document.querySelector('.authed-user');
const authorHTML = DOMPurify.sanitize(`<img class="avatar" src="${loggedUser.src}"alt="${loggedUser.name}">`
    );

authedUser.innerHTML = authorHTML;

const commentsWrapper = document.querySelector('.discussion__comments');

//? generate comment HTML based on comment object
const createComment = (comment) => {
    const newDate = new Date(comment.createdAt);

    //? sanitize comment HTML
    return DOMPurify.sanitize(`<div class="comment">
        <div class="avatar">
            <img
                class="avatar"
                src="${comment.author.src}"
                alt="${comment.author.name}"
            >
        </div>
        <div class="comment__body">
            <div class="comment__author">
                ${comment.author.name}
                <time
                    datetime="${comment.createdAt}"
                    class="comment__date"
                >
                    ${timeSince(newDate)}
                </time>
            </div>
            <div class="comment__text">
                <p>${comment.text}</p>
            </div>
        </div>
    </div>`)
}

const commentsMapped = comments.map(comment =>
    createComment(comment)
);

const innerComments = commentsMapped.join('');
commentsWrapper.innerHTML = innerComments;

const newCommentForm = document.getElementById(
    'newcomment__form'
);

const newCommentTextarea = document.querySelector(
    '#newcomment__form textarea'
);

newCommentForm.addEventListener(
    'submit',
    (e) => {
        e.stopPropagation();
        e.preventDefault();
        // Obtiene el valor del área de texto y elimina espacios en blanco al principio y al final
        const newCommentTextareaValue = newCommentTextarea.value.trim();

        if (newCommentTextareaValue.length > 0) {
            const newComment = {
                id: comments.length + 1,
                text: newCommentTextareaValue,
                author: loggedUser,
                createdAt: new Date().toISOString(),
            };
    
            const comment = document.createElement('div');
            comment.innerHTML = createComment(newComment);
    
            if (commentsWrapper.hasChildNodes()) {
                commentsWrapper.insertBefore(
                    comment,
                    commentsWrapper.childNodes[0]
                );
            } else {
                commentsWrapper.appendChild(comment);
            }
        }

        //? reset form after submit
        newCommentForm.reset();
    }
);