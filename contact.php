<?php
$field_name = $_POST['name'];
$field_mail = $_POST['email'];
$field_phone = $_POST['phone'];
$field_message = $_POST['comments'];
 
$mail_to = 'david123beauchamp@gmail.com, well_iam_king@yahoo.com';
$subject = 'Message from Sebastopol Sharks site visitor ' . $field_name;
 
$body_message = 'From: ' .$field_name. "\n";
$body_message .= 'E-mail: ' .$field_mail. "\n";
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'Message: '.$field_message;
 
$headers = 'From: ' .$field_name. "\r\n";
$headers .= 'Reply-To: '.$field_mail."\r\n";

$from="From: $name<$field_mail>\r\nReturn-path: $field_mail";
 
$mail_status = mail($mail_to, $subject, $body_message, $from);
 
if ($mail_status) { ?>
   <script language="javascript" type="text/javascript">
      alert('Thanks for your interest in our club. We will get back to as soon as possible.');
      window.location = 'index.html';
   </script>
<?php
}
else { ?>
   <script language="javascript" type="text/javascript">
      alert('Message failed. Please, send an email to david123beauchamp@gmail.com');
      window.location = 'index.html';
   </script>
<?php
}
?>