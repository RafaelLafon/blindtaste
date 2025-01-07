<?php
try {
    // Connexion à la base de données
    $pdo = new PDO('mysql:host=localhost;dbname=blindtaste', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Vérification si le formulaire a été soumis
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Récupérer les données du formulaire (assurez-vous que ces champs existent dans votre formulaire)
        $Name = $_POST['name'] ?? '';
        $First_Name = $_POST['first_Name'] ?? '';
        $Mail = $_POST['mail'] ?? '';
        $Phone_Number = $_POST['phone_Number'] ?? '';
        $Delivery_Address = $_POST['delivery_Address'] ?? '';
        $Card_Number = $_POST['card_Number'] ?? '';
        $Card_Holder_Name = $_POST['card_Holder_Name'] ?? '';
        $Card_Expiration_Date = $_POST['card_Expiration_Date'] ?? '';
        $Card_Brand = $_POST['card_Brand'] ?? '';

        // Vérifier si l'email existe déjà dans la base de données
        $stmtCheckEmail = $pdo->prepare("SELECT COUNT(*) FROM Command WHERE mail = :mail");
        $stmtCheckEmail->execute([':mail' => $Mail]);
        $emailExists = $stmtCheckEmail->fetchColumn();

        if ($emailExists > 0) {
            echo "Ce Mail est déjà utilisé, veuillez en choisir un autre.";
        } else {
            // Requête SQL pour insérer les données dans la table Command
            $sql = "INSERT INTO Command (name, first_Name, mail, phone_Number, delivery_Address, card_Number, card_Holder_Name, card_Expiration_Date, card_Brand) 
                    VALUES (:name, :first_Name, :mail, :phone_Number, :delivery_Address, :card_Number, :card_Holder_Name, :card_Expiration_Date, :card_Brand)";
            $stmt = $pdo->prepare($sql);

            // Exécution de la requête avec les données envoyées
            if ($stmt->execute([
                ':name' => $Name, 
                ':first_Name' => $First_Name, 
                ':mail' => $Mail, 
                ':phone_Number' => $Phone_Number, 
                ':delivery_Address' => $Delivery_Address, 
                ':card_Number' => $Card_Number, 
                ':card_Holder_Name' => $Card_Holder_Name, 
                ':card_Expiration_Date' => $Card_Expiration_Date, 
                ':card_Brand' => $Card_Brand
            ])) {
                // Redirection après l'insertion réussie
                header('Location: confirmation.php');
                exit;
            } else {
                echo "Une erreur est survenue lors de l'enregistrement.";
            }
        }
    }
} catch (PDOException $e) {
    // Gérer les erreurs de connexion PDO
    echo "Erreur de connexion : " . $e->getMessage();
}
?>