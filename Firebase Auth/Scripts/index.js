const MoviesList = document.querySelector('.Movie');
const LoggedOUTLinks = document.querySelectorAll('.logged-out');
const LoggedINLinks = document.querySelectorAll('.logged-in');
const AcconutDetails = document.querySelector('.account-details');
const setupUI = (user) => {
    if (user) {
        //account info
        const html = `
        <div>Logged in as ${user.email}</div>
        `;

        AcconutDetails.innerHTML = html;
        //toggle ui
        LoggedINLinks.forEach(item => item.style.display = 'block');
        LoggedOUTLinks.forEach(item => item.style.display = 'none');

    } else {
        //hide account info
        AcconutDetails.innerHTML = '';

        //toggle ui
        LoggedINLinks.forEach(item => item.style.display = 'none');
        LoggedOUTLinks.forEach(item => item.style.display = 'block');

    }


}


//set up movies
const setupMovies = (data) => {
    if (data.length) {

        let html = '';
        data.forEach(doc => {
            const movie = doc.data();
            const li = `
        <li>
            <div class="collapsible-header grey lighten-4">${movie["Movie Name"]}</div>
            <div class="collapsible-body white">${movie.Genre}</div>
            <div class="collapsible-body white">${movie.Runtime} minutes</div>
        </li>        
        `;

            html += li
        });
        MoviesList.innerHTML = html;
    } else {
        MoviesList.innerHTML = '<h5 class="center-align white-text" style="font-size: 2.5rem;"><strong>Login To View Movies</strong></h5>';
    }
};


// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});
