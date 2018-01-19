<?php

session_start();

require_once 'lib/rb-mysql.php';

R::setup( 'mysql:host=localhost;dbname=analhin_piaras', 
         'analhin_user', 'Hezeka' );

$ip = $_SERVER['REMOTE_ADDR'];

$appid = "6334423";
$appkey = "6SE02NIE8S433QN4SAAV";
$redirect_uri = "http://ana.lh1.in/piaras/controllers/handler_vk.php";
$redirect_uri_l = "http://ana.lh1.in/piaras/controllers/handler_login.php";
$scope = "stats, email";

$url = 'https://www.google.com/recaptcha/api/siteverify';
$secret = '6LeV9kAUAAAAAFY6MwyCoquW6SBQoSJ5brPgnrlF';

$location = 'http://ana.lh1.in/piaras';

