// get data from db 

// listen to auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('post').get().then(snapshot => {
            setupPost(snapshot.docs);
            setupUI(user);
        });
    } else {
        setupUI();
        setupPost([]);
    }
});

// signup
const signupForm = document.querySelector('#signup-form');
const logout = document.querySelector('#logout');
const loginForm = document.querySelector('#login-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    // signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }).catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
});

// logout

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});
// login

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    // login existing user
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});