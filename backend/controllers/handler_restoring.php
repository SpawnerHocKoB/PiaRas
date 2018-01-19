<?php 
require_once '../db.php';
require_once "../controllers/functions.php";


if (!empty($data['email'])){
    
    if(R::count('users', "email = ?", array($data['email'])) > 0){ 
    $code_restore = random_str(5);

    $text = "Ваш код для восстановления пароля: $code_restore";
    $Name = 'ПидорастыЧитерасты';
    $subject = 'Подтверждение почты';
    $Semail = 'sosemhuy@reg.ru';
    $header = "From: ". $Name . " <" . $Semail . ">\r\n";

    mail($data['email'], $subject, $text, $header);
    
    $_SESSION['email'] = $data['email'];
    $_SESSION['c_restore'] = $code_restore;
    redi('restoring.php');
   
}else{
        
    message('Такая почта не зарегистрирована');

    }
}



    