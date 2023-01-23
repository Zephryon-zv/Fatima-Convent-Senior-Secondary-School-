
// $('#form').on('submit', function(event) {
// 	event.preventDefault(); // prevent reload
// 	//  var params = {
// 	// 		from_name : document.getElementById("Name").value='',
// 	// 		email_id : document.getElementById("Email").value='',
// 	// 		message : document.getElementById("Message").value='',
// 	// 		phone : document.getElementById("Phone").value='',
// 	// 		subject : document.getElementById("Subject").value=''
// 	// 	}


// 	// 	emailjs.send("service_88kktfa","template_txfaohc", params).then(function(res){
// 	// 		 alert("Your Mail Is Sent!")
// 	// 	 })
				
//   var formData = new FormData(this);
// 				 formData.append('service_id', 'service_88kktfa');
// 				 formData.append('template_id', 'template_txfaohc');
// 	 formData.append('user_id', 'WtTFiyLzg19ww4rzN');
// 	//  formData.append('email', params.email_id)
			 
// $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//    type: 'POST',
// 	data: formData,
// 	contentType: false, // auto-detection
//   processData: false// no need to parse formData to string
// }).done(function() {
// 	   alert('Your mail is sent!');
//   }).fail(function(error) {
// 	  alert('Oops... ' + JSON.stringify(error))});


// });

      // listen to the form submission
    //   document.getElementById("#myForm").addEventListener("submit", function (event) {
    //       event.preventDefault();

    //       const serviceID = "service_88kktfa";
    //       const templateID = "template_txfaohc";

    //       // send the email here
    //       emailjs.sendForm(serviceID, templateID, this).then(
    //         (response) => {
    //           console.log("SUCCESS!", response.status, response.text);
    //           alert("SUCCESS!");
    //         },
    //         (error) => {
    //           console.log("FAILED...", error);
    //           alert("FAILED...", error);
    //         }
    //       );
    //     });




// 	function sendMail(){
		
// 		let fullname = document.getElementById("name").value;
// 		let phoneNo = document.getElementById("phone").value;
// 		let emailId = document.getElementById("email_id").value;
// 		let UserMessage = document.getElementById("message").value;
// 		let Subject = document.getElementById("subject").value;


// 		var contactParams = {
// 			from_name: fullname,
// 			message: UserMessage,
// 			phone: phoneNo,
// 			email_id: emailId,
// 			subject: Subject

// 		};
// 		event.preventDefault();
// 		emailjs.sendForm('service_88kktfa','template_txfaohc','#myForm').then(function(response) {
// 			alert("Sucess")
// 			console.log('SUCCESS!', response.status, response.text);
// 		 }, function(error) {
// 			alert("failed")
// 			console.log('FAILED...', error);
// 		 });
// return false;
// 	}

	//  Bind the event handler to the "submit" JavaScript event

	


/**** EmailJS****/

// function SendMail(){
//     var params = {
//         from_name : document.getElementById("Name").value,
//         email_id : document.getElementById("Email").value,
//         message : document.getElementById("Message").value,
//         phone : document.getElementById("Phone").value,
//         subject : document.getElementById("Subject").value
//     }
//     emailjs.send("service_88kktfa","template_txfaohc", params).then(function(res){
//         alert("Success!" + res.status)
// 		return false;
//     })

// 	if(params = 0){
// alert("please filled the form!")

// 	}else{
// 		alert("form is submitted")
// 	}
// }

// function display() {
// 	let result = document.getElementById("result");
// 	result.innerHTML = "<b>The button is clicked and form is not submitted yet.</b>"
//  }

				/**** Scroll Reveal****/

