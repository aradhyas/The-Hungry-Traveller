		

var Email = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/; 
var pwd = /^[A-Za-z\d]{6,8}$/;

		function validateForm()
		{
			var email = form.Email.value;
			var password = form.Password.value;
			var errors = [];

			if(!Email.test(email)) { alert("Enter a valid email address.");}
			if(!pwd.test(password)) { alert("Enter a valid password.");}
		}
