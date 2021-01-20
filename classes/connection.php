  
<?php

class Database
{
    public static function dbConnection()
    {
        
        $conn = new PDO(
            "mysql:host=localhost;dbname=assegura",
            "root",
            ""
        );

        if ($conn) {
            return $conn;
            echo "<h1>Deu certooooo</h1>";
        } else {
            echo "<h1>Erro ao realizar conexão</h1>";
        }
    }
}