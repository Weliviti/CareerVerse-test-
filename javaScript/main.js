// Grab the signup form
const signupForm = document.getElementById("signupForm");

if (signupForm) { // check if the element exists
    signupForm.addEventListener("submit", function(e){
        e.preventDefault(); // prevent page reload

        const fullname = signupForm.fullname.value.trim();
        const email = signupForm.email.value.trim();
        const password = signupForm.password.value;
        const confirmPassword = signupForm.confirmPassword.value;

        // Basic validation
        if(password !== confirmPassword){
            alert("Passwords do not match!");
            return;
        }

        // Check if user already exists
        if(localStorage.getItem(email)){
            alert("User already exists with this email!");
            return;
        }

        // Create user object
        const user = {
            fullname: fullname,
            email: email,
            password: password // plain text for demo only
        };

        // Save to LocalStorage
        localStorage.setItem(email, JSON.stringify(user));

        alert("Account created successfully!");
        signupForm.reset(); // clear form
    });
}
