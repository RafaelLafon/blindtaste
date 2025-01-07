<?php
try {
    // Connexion à la base de données
    $pdo = new PDO('mysql:host=localhost;dbname=mysticube', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie!<br>";

    // Vérification si le formulaire a été soumis
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Données de test pour l'insertion
        $nom = "Test";
        $prenom = "User";
        $email = "test123@example.com"; // Email unique
        $telephone = "0123456789";
        $adresse = "Test Address";
        $numCarte = "1234567812345678";
        $nomCarte = "Test User";
        $dateExpirationFormatted = "2024-12-01"; // Format YYYY-MM-DD
        $ccv = "123";

        // Vérifier si l'email existe déjà dans la base de données
        $stmtCheckEmail = $pdo->prepare("SELECT COUNT(*) FROM commande WHERE Email = :email");
        $stmtCheckEmail->execute([':email' => $email]);
        $emailExists = $stmtCheckEmail->fetchColumn();

        if ($emailExists > 0) {
            echo "Cet email est déjà utilisé, veuillez en choisir un autre.<br>";
        } else {
            // Requête SQL pour insérer les données dans la table Commande
            $sql = "INSERT INTO commande (Nom, Prenom, Email, Telephone, Adresse_Livraison, Num_Carte, Nom_Carte, Date_Expiration, CCV) 
                    VALUES (:nom, :prenom, :email, :telephone, :adresse, :numCarte, :nomCarte, :dateExpiration, :ccv)";
            $stmt = $pdo->prepare($sql);

            // Log de la requête SQL avant son exécution (pour débogage)
            echo "Requête SQL : " . $sql . "<br>";

            // Exécution de la requête avec les données envoyées
            if ($stmt->execute([
                ':nom' => $nom, 
                ':prenom' => $prenom, 
                ':email' => $email, 
                ':telephone' => $telephone, 
                ':adresse' => $adresse, 
                ':numCarte' => $numCarte, 
                ':nomCarte' => $nomCarte, 
                ':dateExpiration' => $dateExpirationFormatted, 
                ':ccv' => $ccv
            ])) {
                // Redirection après l'insertion réussie pour éviter le double envoi
                header('Location: confirmation.php'); // Redirection vers une page de confirmation
                exit; // On termine l'exécution du script ici
            } else {
                // Si l'insertion échoue, afficher les erreurs détaillées
                $errorInfo = $stmt->errorInfo();
                echo "Erreur lors de l'insertion dans la base de données :<br>";
                echo "Code d'erreur : " . $errorInfo[0] . "<br>";
                echo "Message d'erreur : " . $errorInfo[2] . "<br>";
            }
        }
    }
} catch (PDOException $e) {
    // Gérer les erreurs de connexion PDO
    echo "Erreur de connexion : " . $e->getCode() . " - " . $e->getMessage() . "<br>";
    echo "Trace de l'erreur : " . $e->getTraceAsString() . "<br>";
}
?>