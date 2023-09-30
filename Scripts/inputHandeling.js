function handleform(event) {
    event.preventDefault();
    const name = document.getElementById("InputName").value;
    const email = document.getElementById("InputEmail").value;
    const message = document.getElementById("FormControlTextarea").value;
    const displayName = document.getElementById("notificationContent");
    const notification = document.getElementById("notification");

    
}

function handleNumberofusers() {
    const numberOfUsers = Number(document.getElementById("customRange").value);
    const priceCatagory1 = document.getElementById("plancatagory1");
    const priceCatagory2 = document.getElementById("plancatagory2");
    const priceCatagory3 = document.getElementById("plancatagory3");
    const displayNumberOfUsers = document.getElementById("displayNumberOfUsers");

    displayNumberOfUsers.innerHTML = numberOfUsers;
    if (numberOfUsers <= 10) {
        priceCatagory1.style.scale = 1.1;
        priceCatagory1.style.boxShadow = "0 0.25rem 1.75rem rgba(0, 0, 0, .07)";

        priceCatagory2.style.scale = 1;
        priceCatagory2.style.boxShadow = "";
        priceCatagory3.style.scale = 1;
        priceCatagory3.style.boxShadow = "";
    } else if (numberOfUsers > 10 && numberOfUsers <= 20) {
        priceCatagory2.style.scale = 1.1;
        priceCatagory2.style.boxShadow = "0 0.25rem 1.75rem rgba(0, 0, 0, .07)";

        priceCatagory1.style.scale = 1;
        priceCatagory1.style.boxShadow = "";
        priceCatagory3.style.scale = 1;
        priceCatagory3.style.boxShadow = "";
    } else {
        priceCatagory3.style.scale = 1.1;
        priceCatagory3.style.boxShadow = "0 0.25rem 1.75rem rgba(0, 0, 0, .07)";

        priceCatagory2.style.scale = 1;
        priceCatagory2.style.boxShadow = "";
        priceCatagory1.style.scale = 1;
        priceCatagory1.style.boxShadow = "";
    }
}
