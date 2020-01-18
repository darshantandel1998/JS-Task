const admin = JSON.parse(localStorage.getItem('admin'));
if (localStorage.getItem('adminLogin') == "false") {
    document.location = "Login.html";
}
$('#adminName').text(`Hello, ${admin.name}`);
displayUsers();

function displayUsers() {
    let usersList = "";
    users.forEach((element, index) => {
        usersList += `<tr>
                            <td>${element.name}</td>
                            <td>${element.login}</td>
                            <td>${element.logout}</td>
                        </tr>`;
    });
    if (usersList != "") {
        const resultDOM = document.getElementById("usersSessionTable");
        resultDOM.innerHTML = `<table class="mt-4 table table-bordered>
                                    <thead class="thead-secondary">
                                        <tr class="table-secondary">
                                            <th>Name</th>
                                            <th>Login Date Time</th>
                                            <th>Logout Date Time</th>
                                        </tr>
                                    </thead>
                                    ${usersList}
                                </table>`;
    }
}