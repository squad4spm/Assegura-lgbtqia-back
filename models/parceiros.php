  
<?php
require "../classes/connection.php";

class Parceiros
{

    public static function getAll()
    {
        $connection = Database::dbConnection();

        $stmt = $connection->query("SELECT * FROM parceiros");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        //return $stmt->fetch_all(MYSQLI_ASSOC);

    }

}