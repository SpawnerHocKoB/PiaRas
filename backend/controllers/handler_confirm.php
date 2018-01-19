<?php 
require_once '../db.php';
require_once "../controllers/functions.php";


if (empty($data['r_code'])){
    message('Вы не ввели код');
}else if ($_SESSION['c_restore'] != trim($data['r_code'])) {
    message('huy');
}else{
    $_SESSION['restore'] = 1;
    unset($_SESSION['c_restore']);
    redi('restoring.php');
}

