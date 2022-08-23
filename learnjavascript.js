function agedetector() {
	var boyr = window.prompt("Enter your bornyear:");
	var pryr = window.prompt("Enter the current year:");
	var yrage = pryr - boyr;
	document.write("You are", "&nbsp", yrage,"&nbsp", "years old");
}
