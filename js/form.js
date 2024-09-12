/** allows us to send an email */
const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullname.value}<br><br> Email: ${email.value}<br><br> Message: ${msg.value}`;

    Email.send({
        SecureToken : "77eac908-5b7f-49a9-8f5b-024ff264d8e8",
        To : 'govan.dibotelo@gmail.com',
        From : 'govan.dibotelo@gmail.com',
        Subject : "Customer enquiry",
        Body : bodyMessage  
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Message sent successfully",
                    showConfirmButton: false
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Couldn't send message, something went wrong!",
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".input-form");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != "") {
            errorTxtEmail.innerText = "*Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "*Email cannot be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullname.classList.contains("error") && !email.classList.contains("error") && !msg.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});