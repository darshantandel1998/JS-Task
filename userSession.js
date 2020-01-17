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
        resultDOM.innerHTML = `<table border="1">
                                    <tr>
                                        <th>Name</th>
                                        <th>Login Date Time</th>
                                        <th>Logout Date Time</th>
                                    </tr>
                                    ${usersList}
                                </table>`;
    }
}