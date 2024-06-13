document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    var userData = localStorage.getItem('user');
    if (userData) {
        var user = JSON.parse(userData);
        if (user.username === username && user.password === password) {
            alert('Login successful!');
            // Redirect to dashboard or another page
            window.location.href = 'index2.html?username=' + encodeURIComponent(username);
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('No user found. Please sign up first.');
        // Redirect to signup page
        window.location.href = 'signup.html';
    }
});
