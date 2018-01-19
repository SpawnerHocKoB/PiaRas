<form id="regform" action="/controllers/handler_reg" method="POST" role="form">
    <input type="text" name="email" placeholder="Введите email">
    <input type="password" name="password" placeholder="Введите пароль">
    <input type="password" name="password_2" placeholder="Введите пароль повторно">
    <?php echo "<a class='login' href='https://oauth.vk.com/authorize?client_id=".$appid. "&display=page&redirect_uri=".$redirect_uri. "&scope=".$scope. "&response_type=code&v=5.67'>Через вк</a>"; ?>
    <div class="g-recaptcha" data-sitekey="6LeV9kAUAAAAAOtYOxoOR79NJb8OCAz5YmuStHnK"></div>
    <input type="submit" name="button" value="Отправить" id="send">
    <div class="modal-error" data-attr="login"></div>
</form>

<script>
    $("#send").click(function(e) {
        e.preventDefault();
        $("div.modal-error").text("");
        var form = $("#regform");
        $.ajax({
            type: "POST",
            url: "http://ana.lh1.in/piaras/controllers/handler_reg.php",
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