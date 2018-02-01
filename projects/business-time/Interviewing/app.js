var navbar = 	'<a href="../index.html"><h1>Tech JobPrep</h1></a>' + 
				'<ul>' + 
					'<a href="../About/index.html"><li>About</li></a>' + 
					'<a href="../Skills/index.html"><li>Skills</li></a>' + 
					'<a href="../Presentation/index.html"><li>Presentation</li></a>' + 
					'<a href="index.html"><li>Interviewing</li></a>' + 
				'</ul>';


$(function() {
	document.getElementById("navbar").innerHTML = navbar;
 	$("#favicon-placeholder").load("../favicon.html");
});