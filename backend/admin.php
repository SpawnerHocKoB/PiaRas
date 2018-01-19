<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Админ панель</title>
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>

<a href="?page=c_add">Добавить чит</a>
<a href="?page=c_edit">Изменить чит</a>
<a href="?page=n_add">Добавить новость</a>
<a href="?page=n_edit">Изменить новость</a>

<? 

require_once 'db.php'; 
require_once "controllers/functions.php";

$extract = R::getAll( "SELECT * FROM users WHERE email = '$_SESSION[email]'" );   

if (empty($_SESSION['email'])) {
    header("location: $location/index.php");
}else if ($extract[0]['adm'] == 0){
    header("location: $location/index.php");
}else if ($_GET['page'] == 'c_add'){
    include 'templates/formadd.html';
}else if ($_GET['page'] == 'c_edit'){
    include 'templates/formedit.html';
}else if ($_GET['page'] == 'n_add'){
    include 'templates/form_news_add.html';
}else if ($_GET['page'] == 'n_edit'){
    include 'templates/form_news_edit.html';
}else{
    echo '<h1>Иди нахуй</h1>';
}

?> 

</body>
</html>