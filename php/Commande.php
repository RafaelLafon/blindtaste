<?php
// Démarrer la session
session_start();

// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $quantity = $_POST['quantity'] ?? '1';
    $totalPrice = $_POST['totalPrice'] ?? '15';
    $termsAccepted = isset($_POST['terms']) ? true : false;

    // Vérification des données reçues
    if (!$termsAccepted) {
        echo "Vous devez accepter les conditions de vente.";
        exit;
    }

    // Générer un identifiant de commande unique
    $orderID = uniqid("CMD_", true);

    // Dossier pour enregistrer les commandes
    $ordersDir = __DIR__ . '/../orders/';
    if (!is_dir($ordersDir)) {
        mkdir($ordersDir, 0777, true);
    }

    // Préparer les données de la commande
    $orderData = [
        'orderID' => $orderID,
        'quantity' => $quantity,
        'totalPrice' => $totalPrice,
        'date' => date('Y-m-d H:i:s')
    ];

    // Enregistrer la commande dans un fichier JSON
    $filePath = $ordersDir . $orderID . '.json';
    file_put_contents($filePath, json_encode($orderData, JSON_PRETTY_PRINT));

    // Réponse de succès
    echo "<h2>Merci pour votre commande !</h2>";
    echo "<p>Votre commande a bien été enregistrée.</p>";
    echo "<p>Numéro de commande : <strong>{$orderID}</strong></p>";
    echo "<p>Quantité : <strong>{$quantity}</strong></p>";
    echo "<p>Prix total : <strong>{$totalPrice} €</strong></p>";
    echo "<p><a href='../index.html'>Retour à l'accueil</a></p>";

} else {
    // Si l'accès n'est pas par POST
    header('HTTP/1.1 405 Method Not Allowed');
    echo "Méthode non autorisée.";
}
?>
