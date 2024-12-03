document.addEventListener('DOMContentLoaded', () => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    // Admin Panel Visibility
    const adminPanelLink = document.getElementById('admin-panel');
    if (adminPanelLink) {
        adminPanelLink.style.display = isAdmin ? 'inline' : 'none';
        if (isAdmin) {
            console.log('Admin mode activated.');
        } else {
            console.log('User mode activated.');
        }
    }
});

// Clear admin status when signing out
function signOut() {
    localStorage.removeItem('isAdmin'); // Remove admin status
    window.location.href = 'sign_in.html'; // Redirect to sign-in page
}
