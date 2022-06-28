function getData() {
    let user = {
        firstName:document.getElementById('firstName').value, 
        lastName:document.getElementById('lastName').value,
        email:document.getElementById('email').value,
    }
    if(user.firstName===""){
        let outputResults="FirstName is mandatory."
        alert(outputResults)
    }
    else if(user.lastName===""){
        let outputResults="LastName is mandatory."
        alert(outputResults)
    }
    else if(user.email===""){
        let outputResults="email is mandatory."
        alert(outputResults)
    }
    else{
    let outputResult=user.firstName+" "+user.lastName+" "+"is successfully registered"
    alert(outputResult)
    }
    let ButtonElement=document.getElementById('btnPerform').value;
    
}
   
