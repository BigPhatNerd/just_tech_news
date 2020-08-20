async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    console.log("\n\nclicked!\n\n\n")
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('\n\nsuccess\n\n');
            document.location.replace('/dashboard/');

        } else {
            alert(response.statusText);
        }
    }
};


async function loginHandler(event) {
    console.log("clicked!");
    event.preventDefault();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password

        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log("Success!");
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }


}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginHandler);









//