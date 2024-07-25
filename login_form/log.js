// let_userdata=[
//     {id:1,name : 'nilesh',age:23},
// ]
// localStorage.setItem('usedata',
// JSON.stringify(_userdata));

// let_retrieveuserData =
// JSON.parse(localStorage.getItem('userData'));
// console.log(let_retrieveuserData);

// function validate(e) {

    
//     // if (username == username && password == password) {
//     //     window.location.href = "login_form";
//     // } else {
//     //     alert("username and password is incorrect")
//     // }
// }
document.getElementById("form_submit").addEventListener("submit",function(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // let data = localStorage.setItem("data", JSON.stringify({ username, password }));
    // let data = localStorage.setItem(username, JSON.stringify({ username, password }));
    let data = JSON.parse(localStorage.getItem(username));
    if (username == data.name && password == data.password) {
        alert("login successfully");
        // redirect code
        window.location.href="http://127.0.0.1:5501/index.html";
    }
    else {
        alert("login failed");
    }
})
