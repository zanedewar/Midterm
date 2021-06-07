window.onload = function() {
	menuFunction();
};
function menuFunction() {
	document.getElementById("topmenu").innerHTML = `<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="about.html">About Me</a></li>
				<li><a href="coursework.html">Coursework</a></li>
				<li><a href="artifacts.html">Artifacts</a></li>
				<li><a href="modass.html">Module Assignments</a></li>
				<li><a href="contact.html">Contact Me</a></li>
				<li><a href="interests.html">Interests</a><li>
			</ul>`
}
function validateForm() {
	var errorMessages = "";
	var validName = validateName(document.getElementById("userName").value, 20);
	var validEmail = validateEmail(document.getElementById("userEmail").value);
	var validComments = validateComments(document.getElementById("userComments").value);
	if(!validName)
		errorMessages += "<p>Name is required and cannot be greater than 20 characters.</p>"
	if(!validEmail)
		errorMessages +="<p>Invalid email</p>"
	if(!validComments)
		errorMessages += "<p>Comments are required</p>"
	document.getElementById("errorMessages").innerHTML = errorMessages;
	console.log(errorMessages);
	return errorMessages.length === 0;
}
function validateName(firstName, maxLength) {
	return !(firstName === "null" || firstName ==="" || firstName.length > maxLength || !checkCharacters(firstName));
}
function validateEmail(email) {
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length);
}
function validateComments(comments) {
	return comments.length > 0;
}