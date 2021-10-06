<?php
$field_name = isset($_REQUEST['nameF']) ? htmlspecialchars($_REQUEST['nameF']) : '';
$field_mail = isset($_REQUEST['emailF']) ? urldecode($_REQUEST['emailF']) : '';
$field_phone = isset($_REQUEST['phoneF']) ? filter_var($_REQUEST['phoneF'], FILTER_SANITIZE_NUMBER_INT) : '';
$field_message = isset($_REQUEST['commentsF']) ? htmlspecialchars($_REQUEST['commentsF']) : '';

// return error if email is not provided.
if(!$field_mail || $field_mail == ''){
	echo 'Error sending message. No email provided.';
	exit;
}
 
// return error if message is not provided.
if(!$field_message || $field_message == ''){
	echo 'Error sending message. No message provided.';
	exit;
}
 
$mail_to = 'david123beauchamp@gmail.com';
//$mail_to = 'david123beauchamp@gmail.com, well_iam_king@yahoo.com';
$subject = 'Message from Sebastopol Sharks site visitor ' . $field_name;
 
$body_message = 'From: ' .$field_name. "\n";
$body_message .= 'E-mail: ' .$field_mail. "\n";
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'Message: '.$field_message;
 
$headers = 'From: ' .$field_name. "\r\n";
$headers .= 'Reply-To: '.$field_mail."\r\n";

$from="From: $name<$field_mail>\r\nReturn-path: $field_mail";
 
$mail_status = mail($mail_to, $subject, $body_message, $from);
 
if ($mail_status) {
   echo 'Message sent.';
} else {
   echo 'Error sending email. Try again.';
}
?>