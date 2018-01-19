<?php 

require_once "../db.php";
require_once "../controllers/functions.php";

$auth = ((isset($_SESSION['email'])))? "true" : "false";

if ($auth == 'true'){

	$extract = R::getAll( "SELECT * FROM users WHERE email = '$_SESSION[email]'" );    
    
    echo '{
        "email": "'.$extract[0]['email'].'",
        "user_id": "'.$extract[0]['user_id'].'",
        "adm": "'.$extract[0]['adm'].'",
        "ban": "'.$extract[0]['ban'].'"
    }';

} else {
	
    echo '{"auth": "false"}';
	
}
