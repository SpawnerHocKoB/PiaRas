<?php 

require_once "../controllers/functions.php";
require_once '../db.php';
    
$extract = R::getAll( "SELECT * FROM users WHERE email = '$_SESSION[email]'" );  

$neko = R::getAll( "SELECT * FROM cheat WHERE cheat = '$data[name_cheat]'" );   

$id_cheat = $neko[0]['id'];

function c_add() {
    
    global $data;
        
    $book = R::dispense( 'cheat' );
    $book->cheat = $data['name_cheat'];
    $book->game = $data['name_game'];
    $book->price = $data['price'];
    $book->version = $data['version'];
    R::store($book);
    
}

function c_edit() {
    
    global $data;
    
    R::exec( "UPDATE `cheat` SET `cheat` = '$data[name_cheat]', `game` = '$data[name_game]', `price` = '$data[price]', `version` = '$data[version]' WHERE id = '$data[id]' " ); 
    
}

function n_add() {

    global $data;
    global $id_cheat;
    
    $book = R::dispense( 'news' );
    $book->name = $data['name_news'];
    $book->text = $data['text'];
    $book->cheat_id = $id_cheat;
    R::store($book);
       
}

function n_edit() {
    
    global $data;
    global $id_cheat;
    
    R::exec( "UPDATE `news` SET `name` = '$data[name_news]', `text` = '$data[text]', `cheat_id` = '$id_cheat' WHERE id = '$data[id]' " ); 
}

if (empty($_SESSION['email'])) {
    header("location: $location/index.php");
}else if ($extract[0]['adm'] == 0) {
    header("location: $location/index.php");
}else{
    

if ($data['type'] == 'add') {
        c_add();
    }

if ($data['type'] == 'edit') {
        c_edit(); 
    }

if ($data['type'] == 'addNews') {     
        n_add();
    }

if ($data['type'] == 'editNews') {
        n_edit();
    }

}




