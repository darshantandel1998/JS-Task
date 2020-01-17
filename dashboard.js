const admin = JSON.parse(localStorage.getItem('admin'));
adminLogin = localStorage.getItem('adminLogin');
if (adminLogin != "1") {
    alert("Resticted Page");
    document.location = "Login.html";
}

low = 0, mid = 0, high = 0
users.forEach(el => {
    if (el.calcAge() < 18)
        low += 1;
    else if (el.calcAge() >= 18 && el.calcAge() <= 50)
        mid += 1;
    else if (el.calcAge() > 50)
        high += 1;
})
const resultDOM = document.getElementById("result");
resultDOM.innerHTML = `<ol>
                            <li>Users < 18 Years <br> ${low} Users.</li>
                            <li>18-50 Years Users <br> ${mid} Users.</li>
                            <li>Users > 50 Years <br> ${high} Users.</li>
                        </ol>`;
