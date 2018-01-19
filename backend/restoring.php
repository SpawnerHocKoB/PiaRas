<? include'db.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Восстановление пароля</title>
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>

<? 
if ($_SESSION['restore'] == 1) {
    include 'templates/rest_pass.html';
}else if ($_SESSION['c_restore'] == ''){
    include 'templates/rest.html';
}else{
    include 'templates/confirm.html';
    echo '<br>'.$_SESSION['c_restore'];
} 
?>

</body>
</html>