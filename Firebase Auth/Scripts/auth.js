

//listen for auth status change
auth.onAuthStateChanged(user => {

    console.log(user);
    if (user) {
        console.log('user logged in', user);
        //get data
        db.collection('Movie').onSnapshot(snapshot => {

            setupMovies(snapshot.docs);
            setupUI(user);

        }).catch(err=> {
            console.log(err.message)
        });
    } else {
        console.log('user logged out');
        setupMovies([]);
        setupUI();
    }
})

//create new movie
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {

    e.preventDefault();
    db.collection('Movie').add({
        ["Movie Name"]: createForm['title'].value,
        Genre: createForm['genre'].value,
        Runtime: createForm['runtime'].value

    }).then(() => {
        //clear form and close modal
        createForm.reset(); // Reset form fields
        // Close modal after sign-up
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
    }).catch(err => {
        console.log(err.message);

    })

})



const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);

    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log('User signed up:', cred.user); 
        signupForm.reset(); // Reset form fields
        // Close modal after sign-up
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
    }).catch((error) => {
        console.error('Error signing up:', error.message);
    });


});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
       
        loginForm.reset(); // Reset form fields
        // Close modal after sign-up
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
    })

})
