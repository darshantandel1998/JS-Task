function logoutHandler() {
    id = Number(localStorage.getItem('userLogin'));
    users.forEach((el, i) => {
        if (el.id == id) {
            users[i].logout = new Date();
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('userLogin', -1);   
        }
    });
    window.location = "Login.html";
}