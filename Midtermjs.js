window.onload = function() {
	console.log("hello");
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