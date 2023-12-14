/********f************
    
	Project Final
	Name: Alan Cruz
	Date: December 13, 2023
	Description:Portfolio page form validation

*********************/
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let comments = document.getElementById('comments').value;

    if (name === '' || email === '' || comments === '') {
        alert('All fields must be filled out');
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Form Submitted

    alert('Form submitted successfully!');
    return true;
}
