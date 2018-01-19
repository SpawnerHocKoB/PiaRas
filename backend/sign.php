<?php require_once 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SignUp</title>
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
<?php if($_SESSION['vk'] == 1) { 
    include 'templates/regvk.php';
    unset($_SESSION['vk']);
}else{ 
    include 'templates/reg.php';
} ?>
</body>
</html>