<?php require_once 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Авторизация</title>
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
<form id="loginform" action="/controllers/handler_login" method="POST" >
    <input type="text" name="email" placeholder="Введите Email">
    <input type="password" name="password" placeholder="Введите пароль">
    <?php echo "<a class='login' href='https://oauth.vk.com/authorize?client_id=".$appid. "&display=page&redirect_uri=".$redirect_uri_l. "&scope=".$scope. "&response_type=code&v=5.67'>Через Вк</a>"; ?>
    <div class="g-recaptcha" data-sitekey="6LeV9kAUAAAAAOtYOxoOR79NJb8OCAz5YmuStHnK"></div>
    <input type="submit" name="submit" value="Отправить" id="send">
    <a href="restoring.php">Восстановление пароля</a>
    <div class="modal-error" data-attr="login"></div>
</form>

<script>
    $("#send").click(function(e) {
        e.preventDefault();
        $("div.modal-error").text("");
        var form = $("#loginform");
        $.ajax({
            type: "POST",
            url: "http://ana.lh1.in/piaras/controllers/handler_login.php",
            data: $(form).serialize(),
            success: function(result) {
                var array = jQuery.parseJSON(result);
                if (array.redi){ location(array.redi); }
                $("div[data-attr='login']").text(array.message);
            }
        });
        
        function location(url){
            window.location.href='/cheti/' + url;
        }
        
    });
</script>
</body>
</html>