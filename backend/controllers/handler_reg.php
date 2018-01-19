<?php 

require_once "../db.php";
require_once "../controllers/functions.php";



// Проверка введенных данных

if (trim($data['email']) == '')	{
	
   message('Введите email');
	
} else if (R::count('users', "email = ?", array($data['email'])) > 0){
	
   message('Почта уже зарегистрирована');
	
} else if (!filter_var( $data['email'], FILTER_VALIDATE_EMAIL)){
	
   message('Некорректный формат почты');
	
} else if ($data['password'] != $data['repeat-password']){
	
   message('Пароли не совпадают');
	
} else if (strlen($data['password']) < 6){
	
   message('Пароль не менее 6 символов');   
	
} else if (!$data['g-recaptcha-response']){
	
   message('Заполните капчу');
	
} else {

// Запрос капчы гугл и проверка

   $query = $url.'?secret='.$secret.'&response='.$data['g-recaptcha-response'].'&remoteip='.$ip;

   $q_data = json_decode(file_get_contents($query));

   if ($q_data->success == false) {
	   message('Капча введена неверно');
   }else{

// Сохранение в сессию и отправка на базу

	   $_SESSION['email'] = $data['email'];

	   $passwordHash = password_hash( $_POST['password'], PASSWORD_DEFAULT);  // Хеширование пароля
	   $token = random_str(30);

	   $book = R::dispense( 'users' );
	   $book->email = $data['email'];
	   $book->password = $passwordHash;
	   $book->verified = 0;
	   $book->token = $token;
	   $book->ip = $ip;
	   $book->user_id = 'No';
	   $book->adm = 0;
	   $book->ban = 0;
	   R::store($book);

// Отправка письма с кодом

		$text = "Для подтверждения своей почты, перейдите по <a href=".$location."piaras/controllers/verified.php/?code=".$token.">данной ссылке</a>";
		$Name = 'PIARAS Admin';
		$subject = 'Подтверждение почты';
		$Semail = 'admin@ana.lh1.in';
		$header = "From: ". $Name . " <" . $Semail . ">\r\n";

		mail($data['email'], $subject, $text, $header);

		message('success');

   }
}

?>

