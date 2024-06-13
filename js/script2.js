document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
	var mobile = document.getElementById('mobile').value;

    // Create an object to store user information
    var user = {
        username: username,
        password: password,
		mobile:mobile
    };

    // Convert object to JSON string
    var userData = JSON.stringify(user);

    // Store user data in local storage (for demonstration purposes)
    localStorage.setItem('user', userData);

    // Redirect to login page
    window.location.href = 'signin.html';
});
