function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
    {
        alert("login successfully");window.location.href="http://127.0.0.1:5501/index.html";

        return false;
    }

else
{
    alert("login failed");
}
}
