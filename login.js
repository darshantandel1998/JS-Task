if (localStorage.getItem('admin') != null) {
    document.getElementById('adminRegister').style.display = "None";
}

function formHandlerLogin(form) {
    if (!(form.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
        alert("Enter a valid email format");
    else if (form.password.value.length < 8)
        alert("Password must be min 8 character");
    else {
        let email = form.email.value;
        let password = form.password.value;
        if (localStorage.getItem('admin') != null) {
            const admin = JSON.parse(localStorage.getItem('admin'));
            if (admin.email == email && admin.password == password) {
                localStorage.setItem('adminLogin', 1);
                window.location = "Dashboard.html";
            }
        }
        users.forEach((el, i) => {
            if (el.email == email && el.password == password) {
                users[i].login = new Date();
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('userLogin', el.id);
                window.location = "SubUser.html";
            }
        })
    }
}

function formHandlerRegister(form) {
    document.location = "Regitstration.html";
}