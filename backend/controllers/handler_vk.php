<?php
require_once "../controllers/functions.php";
require_once '../db.php';

// Проверка вк и сохранение в сессию

if ($_GET['code']) {
    
    $token_vk = file_get_contents("https://oauth.vk.com/access_token?client_id=".$appid."&client_secret=".$appkey."&redirect_uri=".$redirect_uri."&code=".$_GET['code']); 
    $token_vk = json_decode($token_vk,true);
    $_SESSION['user_id'] = $token_vk['user_id'];
    $_SESSION['email'] = $token_vk['email'];
    $_SESSION['vk'] = 1;
   
	if (R::count('users', "email = ? OR user_id = ?", array($token_vk['email'], $token_vk['user_id'])) > 0) {
		
		header('location:'.$location.'/#/vk-complete');
		
	} else {

		$token = random_str(30);

		$book = R::dispense( 'users' );
		$book->email = $token_vk['email'];
		$book->password = 'NO';
		$book->verified = 0;
		$book->token = $token;
		$book->ip = $ip;
		$book->user_id = $token_vk['user_id'];
		$book->adm = 0;
		$book->ban = 0;
		R::store($book);

		header('location:'.$location.'/#/signin');
        
    } 
}

// Проверка введенных данных

if (trim($data['email']) == '') {
	
	message('Введите email');
	
} else if (!filter_var( $data['email'], FILTER_VALIDATE_EMAIL)) {
	
	message('Некорректный формат почты');
	
} else if ($data['password'] != $data['repeat-password']) {
	
	message('Пароли не совпадают');
	
} else if (strlen($data['password']) < 6) {
	
	message('Пароль не менее 6 символов');   
	
} else if (!$data['g-recaptcha-response']) {
	
	message('Заполните капчу');
	
} else {

// Запрос капчы гугл и проверка
   $query = $url.'?secret='.$secret.'&response='.$data['g-recaptcha-response'].'&remoteip='.$ip;

   $q_data = json_decode(file_get_contents($query));

	if ($q_data->success == false) {
		
	   message('Капча введена неверно');
		
	} else {
// Сохранение в сессию и отправка на базу
	   $passwordHash = password_hash( $_POST['password'], PASSWORD_DEFAULT);  // Хеширование пароля  

	   R::exec( "UPDATE `users` SET `email` = '$data[email]', `password` = '$passwordHash'  WHERE `user_id` = '$_SESSION[user_id]'" );
		
		header('location:'.$location.'/#/');

// Отправка письма с кодом
		$text = "Для подтверждения своей почты, перейдите по указанной ссылке: cheti/verified.php/?code=$token";
		$Name = 'ПидорастыЧитерасты';
		$subject = 'Подтверждение почты';
		$Semail = 'sosemhuy@reg.ru';
		$header = "From: ". $Name . " <" . $Semail . ">\r\n";

		mail($data['email'], $subject, $text, $header);
	}
}
