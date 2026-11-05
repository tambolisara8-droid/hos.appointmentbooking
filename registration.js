const form = document.getElementById("registrationForm");

form.addEventListener("submit",function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();
    
    const mobile = document.getElementById("mobile").value.trim();

    const password = document.getElementById("password").value.trim();

    const confirm = document.getElementById("confirm").value.trim();

    if(name ===""){

        alert("Please enter your name");

        return;
    }    

    if(email ===""){

        alert("Please enter your email");

        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    
        alert("Please enter a valid email");
    
        return;
}
    if (!/^\d{10}$/.test(mobile)) {
    
        alert("Please enter a valid 10-digit mobile number");
    
        return;
}
    if(password ===""){

        alert("Please select a password");

        return;
    }

    if(confirm ===""){

        alert("Please select a confirm");

        return;
    }

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Registration Successful!");
    window.location.href = "login.html";
    document.getElementById("message").textContent = 
        "Registration successful for " + name;
    form.reset();
});
    
