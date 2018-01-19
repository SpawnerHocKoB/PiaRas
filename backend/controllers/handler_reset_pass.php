<?php 
require_once '../db.php';
require_once "../controllers/functions.php";


if (empty($data['password'])){
    message('Вы не ввели пароль');
}else if ($data['password'] != $data['password_2']) {
    message('Пароли не совпадают');
}else if (strlen($data['password']) < 6){
    message('Пароль не менее 6 символов');   
}else{  

   $passwordHash = password_hash( $_POST['password'], PASSWORD_DEFAULT);  // Хеширование пароля  
    R::exec( "UPDATE `users` SET `password` = '$passwordHash'  WHERE `email` = '$_SESSION[email]'" );
    unset($_SESSION['restore']);
    redi('login.php');
    
}

