<?php

header('Access-Control-Allow-Origin: *');

function message($text){
    echo '{ "message" : "'.$text.'" }';
}

function redi($text){
    echo '{ "redi" : "'.$text.'" }';
}

function random_str($num){
    return substr(str_shuffle('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 0, $num);
}

$data = $_POST;