<?php
$name = $_GET["name"];
$name = $_GET["email"];
$text = $_GET["text"];

echo $name;
echo $email;
echo $text;

$empfanger = "manari1721@gmail.com";
$betreff = "Nachricht von deiner Website!";
$nachricht = "$name hat dir eine Nachricht gesendet. \nDie Nachricht lautet: $text. \nSeine E-Mail lautet: $email";
$header = "From: $sname <$email>";

mail($empfanger, $betreff, $nachricht, $header);
?>


