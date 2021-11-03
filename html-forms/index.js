"use strict";

const form = document.getElementById("form");

document.getElementById("submit-btn").addEventListener("click", (e) => {
	e.preventDefault();

	const formUserData = new FormData(form);
	console.log(formUserData.get("username"));
	console.log(formUserData.get("emailaddress"));
	console.log(formUserData.get("age"));
	console.log(formUserData.get("password"));
	console.log(formUserData.get("dob"));
	console.log(formUserData.get("verify"));
	console.log(formUserData.get("feedback"));
	console.log(formUserData.get("gender"));
});
