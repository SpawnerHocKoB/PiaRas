<?php

include '../db.php';

unset($_SESSION['user_id']);
unset($_SESSION['email']);

$auth = ((isset($_SESSION['email'])))? "true" : "false";
echo '{ "auth" : "'.$auth.'" }';