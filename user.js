displayUsers();

function displayUsers() {
    let usersList = "";
    users.forEach((element, index) => {
        usersList += `<tr>
                            <td>${element.name}</td>
                            <td>${element.email}</td>
                            <td>${element.password}</td>
                            <td>${element.birthdateString()}</td>
                            <td>${element.calcAge()}</td>
                            <td><a href="#" onclick="formHandlerEdit(${element.id})">Edit</a> &nbsp; <a href="#" onclick="formHandlerDelete(${element.id})">Delete</a></td>
                        </tr>`;
    });
    if (usersList != "") {
        const resultDOM = document.getElementById("usersTable");
        resultDOM.innerHTML = `<table border="1">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Birthdate</th>
                                        <th>Age</th>
                                        <th>Action</th>
                                    </tr>
                                    ${usersList}
                                </table>`;
    }
}

function formHandlerAddUser(form) {
    if (form.name.value.length == 0)
        alert("Name must be require");
    else if (!(form.name.value.match(/^([a-zA-Z ]){2,30}$/)))
        alert("Name must be valid");
    else if (!(form.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
        alert("Enter a valid email format");
    else if (form.password.value.length < 8)
        alert("Password must be min 8 character");
    else if (form.birthDate.value == "")
        alert("Enter a birthdate");
    else {
        if (form.id.value == "-1") {
            idIndex = 0
            if (users.length != 0) {
                idIndex = Number(users[users.length - 1].id) + 1;
            }
            users.push(new User(idIndex, form.name.value, form.email.value, form.password.value, form.birthDate.value.slice(8, 10), form.birthDate.value.slice(5, 7), form.birthDate.value.slice(0, 4)));

        } else {
            users.forEach((el, i) => {
                if (el.id == form.id.value) {
                    users[i] = new User(el.id, form.name.value, form.email.value, form.password.value, form.birthDate.value.slice(8, 10), form.birthDate.value.slice(5, 7), form.birthDate.value.slice(0, 4));
                }
            });
        }
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    }
}

function formHandlerEdit(id) {
    document.getElementById('title').textContent = "Update Users";
    formDOM = document.getElementById('userForm');
    users.forEach((el, i) => {
        if (el.id == id) {
            formDOM.id.value = el.id;
            formDOM.name.value = el.name;
            formDOM.email.value = el.email;
            formDOM.password.value = el.password;
            formDOM.birthDate.value = ("000" + el.birthYear).slice(-4) + "-" + ("0" + el.birthMonth).slice(-2) + "-" + ("0" + el.birthDate).slice(-2);
            formDOM.btn.value = "Update User";
        }
    });
}

function formHandlerDelete(id) {
    users.forEach((el, i) => {
        if (el.id == id) {
            users.splice(i, 1);
            localStorage.setItem('users', JSON.stringify(users));
            location.reload();
        }
    });
}