<?php
$recipient = 'anne.eberhard@gmx.net';

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"):
        header("Access-Control-Allow-Origin: *");

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'] . "\n\n" . $newsletterMessage;

        $subject = "Contact Form Submission from $name";
        $headers = "From: $email";

        mail($recipient, $subject, $message, $headers);
        echo json_encode(['success' => true, 'message' => 'Erfolgreich versendet']);
        break;
    default:
        header("Allow: POST", true, 405);
        exit;
}
?>