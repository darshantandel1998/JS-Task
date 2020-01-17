class User {
    constructor(id, name, email, password, birthDate, birthMonth, birthYear, login, logout) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthDate = Number(birthDate);
        this.birthMonth = Number(birthMonth);
        this.birthYear = Number(birthYear);
        this.login = Date.parse(login);
        this.logout = Date.parse(logout);
    }

    birthdateString() {
        return `${this.birthDate}-${this.birthMonth}-${this.birthYear}`;
    }

    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}

let users = []
if (localStorage.getItem('users') == null) {
    localStorage.setItem('users', JSON.stringify(users))
} else {
    users = JSON.parse(localStorage.getItem('users'));
    users.forEach((el, i) => {
        users[i] = Object.assign(new User, el);
    });
}