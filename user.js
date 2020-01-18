const admin = JSON.parse(localStorage.getItem('admin'));
if (localStorage.getItem('adminLogin') == "false") {
    document.location = "Login.html";
}
$('#adminName').text(`Hello, ${admin.name}`);
displayUsers();

function displayUsers() {
    let usersList = "";
    users.forEach((el, i) => {
        day = el.birthdate.substring(8, 10);
        month = el.birthdate.substring(5, 7);
        year = el.birthdate.substring(0, 4);
        usersList += `<tr>
                            <td>${el.name}</td>
                            <td>${el.email}</td>
                            <td>${el.password}</td>
                            <td>${day}/${month}/${year}</td>
                            <td>${el.calcAge()}</td>
                            <td><a href="#" onclick="formHandlerEdit(${el.id})">Edit</a></td>
                            <td><a href="#" onclick="formHandlerDelete(${el.id})">Delete</a></td>
                        </tr>`;
    });
    if (usersList != "") {
        const resultDOM = document.getElementById("usersTable");
        resultDOM.innerHTML = `<table class="mt-5 table table-bordered>
                                    <thead class="thead-secondary">
                                        <tr class="table-secondary">
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Birthdate</th>
                                            <th>Age</th>
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    ${usersList}
                                </table>`;
    }
}

const form = document.getElementById('userForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.name.value.length == 0)
        alert("Name must be require");
    else if (!(form.name.value.match(/^([a-zA-Z ]){2,30}$/)))
        alert("Name must be valid");
    else if (!(form.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
        alert("Enter a valid email format");
    else if (form.password.value.length < 8)
        alert("Password must be min 8 character");
    else if (form.birthdate.value == "")
        alert("Enter a birthdate");
    else {
        if (form.id.value == "-1") {
            idIndex = 0
            if (users.length != 0) {
                idIndex = Number(users[users.length - 1].id) + 1;
            }
            users.push(new User(idIndex, form.name.value, form.email.value, form.password.value, form.birthdate.value));
        } else {
            users.forEach((el, i) => {
                if (el.id == form.id.value) {
                    users[i] = new User(el.id, form.name.value, form.email.value, form.password.value, form.birthdate.value);
                }
            });
        }
        storeUsers();
        window.location.reload();
    }
    return false
}, false);

function formHandlerEdit(id) {
    document.getElementById('formName').textContent = "Update Users";
    users.forEach((el, i) => {
        if (el.id == id) {
            form.id.value = el.id;
            form.name.value = el.name;
            form.email.value = el.email;
            form.password.value = el.password;
            form.birthdate.value = el.birthdate;
            form.btn.textContent = "Update User";
        }
    });
}

function formHandlerDelete(id) {
    users.forEach((el, i) => {
        if (el.id == id) {
            users.splice(i, 1);
            storeUsers();
            window.location.reload();
        }
    });
}