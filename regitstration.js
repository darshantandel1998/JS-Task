function formHandlerRegister(form) {
    if (form.name.value.length == 0)
        alert("Name must be require");
    else if (!(form.name.value.match(/^([a-zA-Z ]){2,30}$/)))
        alert("Name must be valid");
    else if (!(form.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
        alert("Enter a valid email format");
    else if (form.password.value.length < 8)
        alert("Password must be min 8 character");
    else if (form.password.value != form.rePassword.value)
        alert("Password not matched");
    else if (form.city.selectedIndex == 0)
        alert("select City");
    else if (form.state.selectedIndex == 0)
        alert("select State");
    else if (!form.tndc.checked)
        alert("Please agree terms and condition");
    else {
        const admin = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            city: form.city.value,
            state: form.state.value
        }
        localStorage.setItem('admin', JSON.stringify(admin))
        alert("Successfully Admin Registered")
        window.location = "Login.html";
    }
}