<?php
try {
    // Tenter de se connecter à la base de données
    $pdo = new PDO('mysql:host=localhost;dbname=Mysticube', 'root', '');
    
    // Définir le mode d'erreur PDO pour gérer les erreurs avec des exceptions
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Si la connexion réussit, afficher un message de succès
    echo "Connexion réussie à la base de données !";

} catch (PDOException $e) {
    // Si la connexion échoue, afficher l'erreur spécifique
    die("Échec de la connexion : " . $e->getMessage());
}
?>