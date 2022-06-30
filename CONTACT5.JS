 function demo(){
    var name = document.getElementById("name").value;
    var ph = document.getElementById("phone no").value;
    var emi = document.getElementById("e-mail").value;
    var ms = document.getElementById("message").value;
    var ps = document.getElementById("password").value;
    
    if(name != name.match(/[A-Za-z]{3,}/)){ 
        alert("ENTER VALID NAME😁");
    }else if(ph != ph.match(/[0-9]{9,}/)) {
        alert("ENTER VALID MOBILE NO😋");
    }else if(emi != eni.match(/[a-z]+@[a-z]{8,12}/))  {
        alert("ENTER VALID E-MAIL🥱");
    }else if(ms != ms.match(/[A-Za-z]{8,12}/)) {
        alert("ENTER VALID ADDRESS😓");
    }
    else if(ps != ps.match(/[A-Za-z][0-9]{9,12}/)) {
        alert("ENTER VALID PASSWORD😭😭😭");
    }
    else {
    alert("thnx")
    }


}