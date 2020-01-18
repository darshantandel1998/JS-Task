class User {
    constructor(id, name, email, password, birthdate, login, logout) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
        this.login = login;
        this.logout = logout;
    }

    calcAge() {
        return new Date().getFullYear() - Number(this.birthdate.substring(0, 4));
    }
}

//Users Array Build
let users = [];
if (localStorage.getItem('users') == null) {
    localStorage.setItem('users', JSON.stringify(users));
} else {
    users = JSON.parse(localStorage.getItem('users'));
    users.forEach((el, i) => {
        users[i] = Object.assign(new User, el);
    });
}

//Core Functionality
function adminLogin() {
    localStorage.setItem('adminLogin', true);
    window.location = "Dashboard.html";
}

function adminLogout() {
    localStorage.setItem('adminLogin', false);
    window.location = "Login.html";
}

function userLogin(id) {
    adminLogout();
    users.forEach((el, i) => {
        if(el.id == id) {
            users[i].login = new Date().toString();
        }
    });
    storeUsers();
    localStorage.setItem('userLogin', id);
    window.location = "SubUser.html";
}

function userLogout() {
    id = Number(localStorage.getItem('userLogin'));
    users.forEach((el, i) => {
        if(el.id == id) {
            users[i].logout = new Date().toString();
        }
    });
    storeUsers();
    localStorage.removeItem('userLogin');
    window.location = "Login.html";
}

function storeUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}
