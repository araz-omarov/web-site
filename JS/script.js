var objPeople = [
    { username : "omarov", password : "araz" },
    { username : "turan",  password : "turan" }
];

function getInfo() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value;

    for (var i = 0; i < objPeople.length; i++) {
        if (username === objPeople[i].username && password === objPeople[i].password) {
            console.log(username + " is logged in !!!");
            window.location.href ="/HTML/main-page.html";
            return;
        }
    }

    console.log("Incorrect username or password");
    alert("Incorrect username or password");
}
    