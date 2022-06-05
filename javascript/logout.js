
const btnLogout = document.getElementById('btnLogout');
btnLogout.addEventListener('click', async() => {
    localStorage.removeItem('token');
    window.location = '/index.html';
});