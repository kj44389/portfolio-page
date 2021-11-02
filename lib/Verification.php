<?php

     /**
      * undocumented class
      */
     class Verification  
     {
          // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          // /const re = /[<>()[\]\\.,;:\s@\"\\R\\n\/\=]/gm; name
          // /[<>[\]\\;\"\\R\/\=]/gm
          function checkEmail($email){
               $email_length = explode(',', $email);

               if(count($email_length)>1){
                    return [false, $email];
               }
               $email = trim($email);
               $email = strip_tags($email);
               $email = stripslashes($email);
               $email = htmlspecialchars($email);
               $email = htmlentities($email, ENT_QUOTES,'UTF-8');
               $email = filter_var($email, FILTER_SANITIZE_EMAIL);

               if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    return [true, $email];
               }
               return [false, $email];


          }
          function checkName($name){
               $name = trim($name);
               $name = strip_tags($name);
               $name = stripslashes($name);
               $name = htmlspecialchars($name);
               $name = htmlentities($name, ENT_QUOTES,'UTF-8');
               $name = filter_var($name, FILTER_SANITIZE_STRING);

               return [true, $name];

          }
          function checkMsg($msg){
               $msg = trim($msg);
               $msg = strip_tags($msg);
               $msg = stripslashes($msg);
               $msg = htmlspecialchars($msg);
               $msg = htmlentities($msg, ENT_QUOTES,'UTF-8');
               $msg = filter_var($msg, FILTER_SANITIZE_STRING);

               return [true, $msg];
          }       
     }

?>
     