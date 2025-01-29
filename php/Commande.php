<?php
$host = 'localhost'; 
$dbname = 'blindtaste'; 
$username = 'root'; 
$password = ''; 

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "La connexion a réussi !<br>";
} catch (PDOException $e) {
    die("La connexion a échoué : " . $e->getMessage());
}

if (isset($_POST['envoyer'])) {
    $Client_Name = $_POST['name'] ?? ''; 
    $Client_FirstName = $_POST['first_Name'] ?? '';
    $Client_Mail = $_POST['mail'] ?? '';
    $Client_Phone = $_POST['phone_Number'] ?? '';
    $Client_Delivery = $_POST['delivery_Address'] ?? '';
    $Command_Date = $_POST['card_Number'] ?? '';

    try {
        $sql = "INSERT INTO command (Client_Name, Client_FirstName, Client_Mail, Client_Phone, Client_Delivery, Command_Date) 
                VALUES (:Client_Name, :Client_FirstName, :Client_Mail, :Client_Phone, :Client_Delivery, NOW())"; // 

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':Client_Name', $Client_Name);
        $stmt->bindParam(':Client_FirstName', $Client_FirstName);
        $stmt->bindParam(':Client_Mail', $Client_Mail);
        $stmt->bindParam(':Client_Phone', $Client_Phone);
        $stmt->bindParam(':Client_Delivery', $Client_Delivery);

        $stmt->execute();

        echo "Commande insérée avec succès !";

    } catch (PDOException $e) {
        echo "Erreur lors de l'insertion : " . $e->getMessage();
    }
}
?>
