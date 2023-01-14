



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


$('#form').on('submit', function(event) {
    event.preventDefault(); // prevent reload
	 var params = {
	        from_name : document.getElementById("Name").value='',
	 email_id : document.getElementById("Email").value='',
	        message : document.getElementById("Message").value='',
	        phone : document.getElementById("Phone").value='',
	       subject : document.getElementById("Subject").value=''
	    }


    var formData = new FormData(this);
    formData.append('service_id', 'service_88kktfa');
    formData.append('template_id', 'template_txfaohc');
    formData.append('user_id', 'WtTFiyLzg19ww4rzN');
	//  formData.append('email', params.email_id)
 
	  emailjs.send("service_88kktfa","template_txfaohc", params).then(function(res){
	alert("Your Mail Is Sent!")
   })//.done(function(){
	// 		alert("Your Mail Is Sent!")
	// 	 }).fail(function(error){
	// 		alert("Opps...." + JSON.stringify(error))
	// 	 });

//     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//         type: 'POST',
//         data: params && formData,
//         contentType: false, // auto-detection
//         processData: false // no need to parse formData to string
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//          alert('Oops... ' + JSON.stringify(error));
// });


});

// function display() {
// 	let result = document.getElementById("result");
// 	result.innerHTML = "<b>The button is clicked and form is not submitted yet.</b>"
//  }

function callback(event){
	event.preventDefault()
 }
 
				/**** Scroll Reveal****/

