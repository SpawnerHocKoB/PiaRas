<?php 
require_once "../controllers/functions.php";
require_once '../db.php';

// Проверка вк и сохранение в сессию
if ($_GET['code']) {
    
	$token_vk = file_get_contents("https://oauth.vk.com/access_token?client_id=".$appid."&client_secret=".$appkey."&redirect_uri=".$redirect_uri_l."&code=".$_GET['code']); 
	$token_vk = json_decode($token_vk,true);

    if (R::count('users', "email = ? OR user_id = ?", array($token_vk['email'], $token_vk['user_id'])) > 0) {

        $_SESSION['user_id'] = $token_vk['user_id'];
        $_SESSION['email'] = $token_vk['email'];
        header('location:'.$location.'/index.php');
    
    } else {
		
        header('location:'.$location.'/sign.php');
		
    }
}

// Поиск почты через базу

$user_login = R::findOne('users', 'email = ?', array($data['email']));

// Проверка введенных данных

if (trim($data['email']) == '') {
	
    message('Введите e-mail');
	
} else if (!$user_login) {
	
    message('Почта не зарегистрирована');
	
} else if (!password_verify($data['password'], $user_login->password)) {
	
    message('Неправильный логин или пароль'); 
	
} else if (!$data['g-recaptcha-response']) {
	
    message('Заполните капчу');
	
} else {
    
 // Запрос капчы гугл и проверка

   $query = $url.'?secret='.$secret.'&response='.$data['g-recaptcha-response'].'&remoteip='.$ip;

   $q_data = json_decode(file_get_contents($query));

   if ($q_data->success == false) {
	   
	   message('Капча введена неверно');
	   
   } else {
               
		R::exec( "UPDATE `users` SET `ip` = '$ip'  WHERE `email` = '$data[email]'" );     
		$_SESSION['email'] = $data['email'];
	   
	    message('success');
               
    }
}

