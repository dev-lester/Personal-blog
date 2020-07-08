const postList = document.querySelector('.post');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
    if (user) {
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

const setupPost = function (data) {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const post = doc.data();
            const li = `
            <li>
                <div class="collapsible-header grey lighten-4">${post.title}</div>
                <div class="collapsible-body white">${post.content}</div>
            </li>         
            `;
            html += li;
        });
        postList.innerHTML = html;
    } else {
        postList.innerHTML = `<h5 class="center-align">Login or Signup to read my shitty Blogs</h5>
        <div class="center-align">
           <a href="#">Already have an account?</a>
        </div>
        `;
    }
}

// setup materialize components
window.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});