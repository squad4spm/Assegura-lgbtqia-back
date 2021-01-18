<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}

// INCLUDING DATABASE AND MAKING OBJECT
require __DIR__.'/classes/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// IF REQUEST METHOD IS NOT POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Pagina não encontrada!');

// CHECKING EMPTY FIELDS
elseif(!isset($data->nome) 
    || !isset($data->email) 
    || !isset($data->senha)
    || empty(trim($data->nome))
    || empty(trim($data->email))
    || empty(trim($data->senha))
    ):

    $fields = ['fields' => ['nome','email','senha']];
    $returnData = msg(0,422,'Preencha os campos em branco',$fields);

// IF THERE ARE NO EMPTY FIELDS THEN-
else:
    
    $nome = trim($data->nome);
    $sobrenome = trim($data->sobrenome);
    $dataNascimento = trim($data->dataNascimento);
    $email = trim($data->email);
    $tipo = trim($data->tipo);
    $senha = trim($data->senha);
    $endereco = trim($data->endereco);
    $complemento = trim($data->complemento);
    $cidade = trim($data->cidade);
    $estado = trim($data->estado);
    $cep = trim($data->cep);
    $imagem = trim($data->imagem);

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)):
        $returnData = msg(0,422,'Endereço de e-mail invalido!');
    
    elseif(strlen($senha) < 8):
        $returnData = msg(0,422,'A senha deve deve conter pelo menos 8 caracteres!');

    elseif(strlen($nome) < 3):
        $returnData = msg(0,422,'O nome deve conter pelo menos 3 letras!');

    else:
        try{

            $check_email = "SELECT `email` FROM `usuario` WHERE `email`=:email";
            $check_email_stmt = $conn->prepare($check_email);
            $check_email_stmt->bindValue(':email', $email,PDO::PARAM_STR);
            $check_email_stmt->execute();

            if($check_email_stmt->rowCount()):
                $returnData = msg(0,422, 'Já existe uma conta cadastrada com esse e-mail!');
            
            else:
                $insert_query = "INSERT INTO `usuario`(`nome`,`sobrenome`,`dataNascimento`,`email`,`tipo`,`senha`,`endereco`,`complemento`,`cidade`,`estado`,`cep`,`imagem`) VALUES( :nome,:sobrenome,:dataNascimento,:email,:tipo,:senha,:endereco,:complemento,:cidade,:estado,:cep,:imagem)";

                $insert_stmt = $conn->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue(':nome', htmlspecialchars(strip_tags($nome)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':sobrenome', htmlspecialchars(strip_tags($sobrenome)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':dataNascimento', htmlspecialchars(strip_tags($dataNascimento)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':email', $email,PDO::PARAM_STR);
                $insert_stmt->bindValue(':tipo', htmlspecialchars(strip_tags($tipo)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':senha', password_hash($senha, PASSWORD_DEFAULT),PDO::PARAM_STR);
                $insert_stmt->bindValue(':endereco', htmlspecialchars(strip_tags($endereco)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':complemento', htmlspecialchars(strip_tags($complemento)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':cidade', htmlspecialchars(strip_tags($cidade)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':estado', htmlspecialchars(strip_tags($estado)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':cep', htmlspecialchars(strip_tags($cep)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':imagem', htmlspecialchars(strip_tags($imagem)),PDO::PARAM_STR);

                $insert_stmt->execute();

                $returnData = msg(1,201,'Você foi registrado com sucesso.');

            endif;

        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }
    endif;
    
endif;

echo json_encode($returnData);