<?php 

require_once '../db.php';
require_once '../controllers/functions.php';
    
$email = $_SESSION['email'];

$extract = R::getAll( "SELECT * FROM users WHERE email = '$email'" );

$token = $extract[0]['token'];

if ($_GET['code'] == $token) {
    R::exec( "UPDATE users SET token = 'NULL', verified = '1' WHERE `email` = '$email'");
    header('location: /');
}else{
    echo 'Упс.. Что-то пошло не так';
}
