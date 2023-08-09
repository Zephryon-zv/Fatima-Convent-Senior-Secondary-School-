<?php 

    if(isset($_POST['btn-send']))
    {
      $name = $_POST['Name'];
      $email= $_POST['Email'];
       $phone = $_POST['Phone'];
      $mail = $_POST['Subject'];
      $message = $_POST['Message'];
      $headers = "Mail from fatima_school_website contact form".$name;
      $txt = "You have recieved an email from ".$name ."\r\nEmail Id: " .$email ."\r\nPhone No: ". $phone ."\r\n Subject: " .$subject_mail ."\r\n Message:" .$message;
      

       if(empty($name) || empty($name) || empty($mail) || empty($message))
       {
         echo("Filled the info")
       }
       else
       {
           $to = "nurajabegum81@gmail.com";

           if(mail($to,$mail,$message,$txt, $headers))
           {
              echo("Mail send")
           }
       }
    }
    else
    {
        // header("location:thankyou.html");
        echo("Failed");
    }
?>