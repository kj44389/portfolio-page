<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\OAuth;
//Alias the League Google OAuth2 provider class
use League\OAuth2\Client\Provider\Google;

date_default_timezone_set('Etc/UTC');
require './Verification.php';
require '../vendor/autoload.php';


$json = file_get_contents('php://input');
$data = json_decode($json);


// VERIFICATION
$verification = new Verification;

[$email_status, $email] = $verification->checkEmail($data->email);
[$name_status, $name] = $verification->checkName($data->name);
[$msg_status, $msg] = $verification->checkMsg($data->msg);


if ($email_status && $name_status && $msg_status) {


     // EMAIL SECTION

     //Create a new PHPMailer instance
     $mail = new PHPMailer();
     //Tell PHPMailer to use SMTP
     $mail->isSMTP();

     //Enable SMTP debugging
     //SMTP::DEBUG_OFF = off (for production use)
     //SMTP::DEBUG_CLIENT = client messages
     //SMTP::DEBUG_SERVER = client and server messages
     $mail->SMTPDebug = SMTP::DEBUG_OFF;

     //Set the hostname of the mail server
     $mail->Host = 'smtp.gmail.com';

     //Set the SMTP port number:
     // - 465 for SMTP with implicit TLS, a.k.a. RFC8314 SMTPS or
     // - 587 for SMTP+STARTTLS
     $mail->Port = 465;

     //Set the encryption mechanism to use:
     // - SMTPS (implicit TLS on port 465) or
     // - STARTTLS (explicit TLS on port 587)
     $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

     //Whether to use SMTP authentication
     $mail->SMTPAuth = true;

     //Set AuthType to use XOAUTH2
     $mail->AuthType = 'XOAUTH2';

     //Fill in authentication details here
     //Either the gmail account owner, or the user that gave consent
     $gmail_email = getenv('GMAIL_EMAIL');
     $clientId = getenv('GMAIL_ID');
     $clientSecret = getenv('GMAIL_SECRET');

     //Obtained by configuring and running get_oauth_token.php
     //after setting up an app in Google Developer Console.
     $refreshToken = getenv('GMAIL_TOKEN');

     // //Create a new OAuth2 provider instance
     $provider = new Google(
         [
             'clientId' => $clientId,
             'clientSecret' => $clientSecret,
         ]
     );

     //Pass the OAuth provider instance to PHPMailer
     $mail->setOAuth(
         new OAuth(
             [
                 'provider' => $provider,
                 'clientId' => $clientId,
                 'clientSecret' => $clientSecret,
                 'refreshToken' => $refreshToken,
                 'userName' => $gmail_email,
             ]
         )
     );

     //Set who the message is to be sent from
     //For gmail, this generally needs to be the same as the user you logged in as
     $mail->setFrom($email, 'Portfolio Kontakt - '. $name);

     //Set who the message is to be sent to
     $mail->addAddress(getenv('GMAIL_EMAIL_TO'), 'Jarosław Kudzia');

     //Set the subject line
     $mail->Subject = 'Portfolio Kontakt - '. $name;

     //Read an HTML message body from an external file, convert referenced images to embedded,
     //convert HTML into a basic plain-text alternative body
     $mail->CharSet = PHPMailer::CHARSET_UTF8;
     // $mail->msgHTML(file_get_contents('contentsutf8.html'), __DIR__);
     $mail->msgHTML($msg);

     //Replace the plain text body with one created manually
     $mail->AltBody = 'This is a plain-text message body';

     //Attach an image file
     // $mail->addAttachment('images/phpmailer_mini.png');

     //send the message, check for errorss
     if (!$mail->send()) {
          $send_status = false;
          $send_info = "Error occurred while sending. Please try again later.";
        } else {
            $send_status = true;
            $send_info = "Message sent successfully";
     }
     $return_arr[] = array(
          'status' => $send_status,
          'info' => $send_info
     );
     
     echo json_encode($return_arr);
}

