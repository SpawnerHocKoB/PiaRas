<form action="controllers/handler_vk.php" method="POST" id="regform">
    <p>*Необязательно</p>
    <input type="text" name="email" placeholder="Введите Email" value="<?php if (!empty($_SESSION['email'])){ echo $_SESSION['email']; }?>">
    <input type="password" name="password" placeholder="Введите пароль">
    <input type="password" name="password_2" placeholder="Введите пароль еще раз"><br>
    <div class="g-recaptcha" data-sitekey="6LeV9kAUAAAAAOtYOxoOR79NJb8OCAz5YmuStHnK"></div><br>
    <input type="submit" name="submit" value="Отправить" id="send"><br>
    <div class="modal-error" data-attr="login"></div><br>
    <a href="index.php">Перейти на главную</a>
</form>

<script>
    $("#send").click(function(e) {
        e.preventDefault();
        $("div.modal-error").text("");
        var form = $("#regform");
        $.ajax({
            type: "POST",
            url: "http://ana.lh1.in/piaras/controllers/handler_vk.php",
            data: $(form).serialize(),
            success: function(result) {
                var array = jQuery.parseJSON(result);
                if (array.redi){ location(array.redi); }
                $("div[data-attr='login']").text(array.message);
            }
        });
        
        function location(url){
            window.location.href='/piaras/' + url;
        }
        
    });
</script>