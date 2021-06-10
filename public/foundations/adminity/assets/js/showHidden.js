function myFunctionUbahPassword() {
  var passwordLama = document.getElementById("inputPasswordLama");
  var passwordBaru = document.getElementById("inputPasswordBaru");
  var konfirmasiPassword = document.getElementById("konfirmasiPassword");

  if (passwordLama.type === "password") {
	    passwordLama.type = "text";
	    passwordBaru.type = "text";
	    konfirmasiPassword.type = "text";
  } else {
	   	passwordLama.type = "password";
	   	passwordBaru.type = "password";
	    konfirmasiPassword.type = "password";
  }
}

function myFunctionLogin() {
  var password = document.getElementById("kataSandi");
  var show = document.getElementById("show");
  var hide = document.getElementById("hide");

  if (password.type === "password") {
	    password.type = "text";
	    hide.style.display = "block";
	    show.style.display = "none";
  } else {
	   	password.type = "password";
	   	hide.style.display = "none";
	   	show.style.display = "block";
  }
}

function myFunctionPengumuman() {
  var show = document.getElementById("show");
  var hide = document.getElementById("hide");

  if (password.type === "password") {
	    password.type = "text";
	    hide.style.display = "block";
	    show.style.display = "none";
  } else {
	   	password.type = "password";
	   	hide.style.display = "none";
	   	show.style.display = "block";
  }
}