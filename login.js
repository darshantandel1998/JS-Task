if (localStorage.getItem('adminLogin') == "true") {
    window.location = "Dashboard.html";
} else if (localStorage.getItem('userLogin') != null) {
    window.location = "SubUser.html";
}
if (localStorage.getItem('admin') != null) {
    document.getElementById('admin-register').style.display = 'None';
}

const form = document.getElementById('loginForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    if (!(form.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
        alert("Enter a valid email format");
    else if (form.password.value.length < 8)
        alert("Password must be min 8 character");
    else {
        const email = form.email.value;
        const password = form.password.value;
        if (localStorage.getItem('admin') != null) {
            const admin = JSON.parse(localStorage.getItem('admin'));
            if (admin.email == email && admin.password == password) {
                adminLogin();
            }
        }
        users.forEach((el, i) => {
            if (el.email == email && el.password == password) {
                userLogin(el.id);
            }
        });
    }
});

document.getElementById('registerButton').addEventListener('click', e => {
    e.preventDefault();
    document.location = "Regitstration.html";
});
