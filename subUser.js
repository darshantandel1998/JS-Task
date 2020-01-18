if (localStorage.getItem('userLogin') == null) {
    userLogout();
}

id = Number(localStorage.getItem('userLogin'));
users.forEach((el, i) => {
    if (el.id == id) {
        $('#userName').text(`Hello, ${el.name}`);
        if (new Date().getMonth() + 1 == el.birthdate.substring(5, 7) && new Date().getDate() == el.birthdate.substring(8, 10))
            $('#birthdayWish').removeClass('d-none');
    }
});

document.getElementById('logout').addEventListener('click', e => {
    e.preventDefault();
    userLogout();
});