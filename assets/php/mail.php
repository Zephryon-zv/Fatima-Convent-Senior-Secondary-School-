<?php
$name = $_POST['name'];
$email= $_POST['email_id'];
$phone = $_POST['phone'];
$subject_mail = $_POST['subject'];
$message = $_POST['message'];
$subject = "Mail from fatima_school_website contact form";
$to = "nurajabegum81@gmail.com"
$headers = "From: ".$name. "\r\n" .

$txt = "You have recieved an email from ".$name ."\r\nEmail Id: " .$email ."\r\nPhone No: ". $phone ."\r\n Subject: " .$subject_mail ."\r\n Message:" .$message;

if($email! = NULL){
    mail($to, $subject, $txt, $headers);
}






// if(isset($_POST['btn-send']))
// {
//    $UserName = $_POST['UName'];
//    $Email = $_POST['Email'];
//    $Subject = $_POST['Subject'];
//    $Msg = $_POST['msg'];

//    if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
//    {
//        header('location:index.php?error');
//    }
//    else
//    {
//        $to = "admin@onlineittuts.com";

//        if(mail($to,$Subject,$Msg,$Email))
//        {
//            header("location:index.php?success");
//        }
//    }
// }
// else
// {
//     header("location:index.php");
// }




?>