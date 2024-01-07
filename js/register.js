
const usernameElm = document.getElementById('username-1');
const mailElm = document.getElementById('email');
const passElm = document.getElementById('password-1');
const registerForm = document.getElementById('register');
function handleRegister(e) {
    e.preventDefault();
    const user = {
        username: usernameElm.value,
        email: mailElm.value,
        password: passElm.value,

    }
    const usersLocal = localStorage.getItem('users');
    if (usersLocal === null) {
        const users = [user];

        localStorage.setItem('users', JSON.stringify(users));
    } else {
        const users = JSON.parse(usersLocal);
       
        for (let index = 0; index < users.length; index++) {
            const element = users[index];
            if(element.email === user.mail) {
                alert('Bi trung email!');
                return;
            }
        }
    }
    usernameElm.value = "";
    mailElm.value = "";
    passElm.value = "";
    alert("Dang ky thanh cong!")
    window.location = "./home.html"
}
registerForm.addEventListener('submit', handleRegister);
