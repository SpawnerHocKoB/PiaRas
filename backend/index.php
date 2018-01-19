<?php require_once 'db.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Главная</title>
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
<?php 
    
    if (!$_SESSION['email']) {
        
    echo '<a href="sign.php">SignUp</a><br>
        <a href="login.php">Login</a>';
        
    }else{
        echo 'Твой email:'.$_SESSION['email'].'<br><a href="'.$location.'/controllers/logout.php">Выход (нет)</a>';
        if ($_SESSION['user_id'] == ''){
            echo 'Вк не привязан';
        }else{
            echo '<br>Вк привязан';
//            echo ((isset($_SESSION['email'])))? "true" : "false";
        }
    }

?>
<!--
<script>
        
        $.ajax({
            type: "POST",
            url: "http://thennnier.zzz.com.ua/cheti/controllers/logout.php",
            success: function(result) {
                alert(result);
            }
        });
    
</script> 
-->
</body>
</html>