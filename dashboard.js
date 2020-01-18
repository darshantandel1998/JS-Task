const admin = JSON.parse(localStorage.getItem('admin'));
if (localStorage.getItem('adminLogin') == "false") {
    document.location = "Login.html";
}
$('#adminName').text(`Hello, ${admin.name}`);

below18 = 0, between1850 = 0, above50 = 0, birthdateName = "";
users.forEach(el => {
    if (el.calcAge() < 18)
        below18 += 1;
    else if (el.calcAge() >= 18 && el.calcAge() <= 50)
        between1850 += 1;
    else if (el.calcAge() > 50)
        above50 += 1;
    if (new Date().getMonth() + 1 == el.birthdate.substring(5, 7) && new Date().getDate() == el.birthdate.substring(8, 10))
        birthdateName += `${el.name}, `
});
birthdateName = birthdateName.slice(0, -2);
$('#flexBox')[0].innerHTML = `<div class="m-3 card card-body h5">Users < 18 Years <br> ${below18} Users.</div>
    <div class="m-3 card card-body h5">18-50 Years Users <br> ${between1850} Users.</div>
    <div class="m-3 card card-body h5">Users > 50 Years <br> ${above50} Users.</div>`;
if(birthdateName != "")
    $('#birthdayLine')[0].innerHTML = `Today is ${birthdateName} BirthDay!`;