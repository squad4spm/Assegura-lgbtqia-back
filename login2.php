<?php
include('connectionDB.php');

if(empty($_POST['email']) || empty($_POST['senha'])){
    header('Location: index.php');
    exit();
}

$email = mysqli_real_escape_string($connectionDB, $_POST['email']);
$senha = mysqli_real_escape_string($connectionDB, $_POST['senha']);

$query = "select id, email from email where email = '{$email} and senha = md5('{$senha}')";

$result = mysqli_query($connectionDB, $query);

$row = mysqli_num_rows($result);