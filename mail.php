<?php
// $name = $_POST['name'];
// $email= $_POST['email_id'];
// $phone = $_POST['phone'];
// $subject_mail = $_POST['subject'];
// $message = $_POST['message'];
// $subject = "Mail from fatima_school_website contact form";
// $to = "nurajabegum81@gmail.com"
// $headers = "From: ".$name. "\r\n" .

// $txt = "You have recieved an email from ".$name ."\r\nEmail Id: " .$email ."\r\nPhone No: ". $phone ."\r\n Subject: " .$subject_mail ."\r\n Message:" .$message;

// if($email! = NULL){
//     mail($to, $subject, $txt, $headers);
// }






 if(isset($_POST['btn-send']))
 {
  $name = $_POST['name'];
$email= $_POST['email_id'];
 $phone = $_POST['phone'];
$subject_mail = $_POST['subject'];
$message = $_POST['message'];
$subject = "Mail from fatima_school_website contact form";
$txt = "You have recieved an email from ".$name ."\r\nEmail Id: " .$email ."\r\nPhone No: ". $phone ."\r\n Subject: " .$subject_mail ."\r\n Message:" .$message;

   if(empty($name) || empty($name) || empty($subject) || empty($message))
    {
        header('location:error-404.html');
    }
    else
   {
       $to = "nurajabegum81@gmail.com";
        if(mail($to,$subject_mail,$message,$email,$txt, $subject))
       {
           header("location:thankyou.html");
       }
    }
 }
 else
 {
    header("location:index.php");
}




?>