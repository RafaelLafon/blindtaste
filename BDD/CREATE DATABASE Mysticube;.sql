CREATE DATABASE Mysticube;
USE Mysticube;

-- Table Client
CREATE TABLE Client (
    ID_Client INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(255) NOT NULL,
    Prenom VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Adresse_Livraison TEXT NOT NULL
);

-- Table Box
CREATE TABLE Box (
    ID_Box INT AUTO_INCREMENT PRIMARY KEY,
    Nom_Box VARCHAR(255) NOT NULL,
    Description TEXT,
    Prix DECIMAL(10, 2) NOT NULL,
    Date_Lancement DATE NOT NULL
);

-- Table FruitsLegumes
CREATE TABLE FruitsLegumes (
    ID_FruitsLegumes INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(255) NOT NULL,
    Saison VARCHAR(255),
    Lieu_Croissance VARCHAR(255),
    Nb_Utilisation INT
);

-- Table Illustration
CREATE TABLE Illustration (
    ID_Illustration INT AUTO_INCREMENT PRIMARY KEY,
    Image_URL VARCHAR(2083) NOT NULL,
    Description TEXT
);

-- Table Recette
CREATE TABLE Recette (
    ID_Recette INT AUTO_INCREMENT PRIMARY KEY,
    Nom_Recette VARCHAR(255) NOT NULL,
    Difficulte VARCHAR(50),
    Description TEXT,
    ID_FruitsLegumes INT NOT NULL,
    FOREIGN KEY (ID_FruitsLegumes) REFERENCES FruitsLegumes(ID_FruitsLegumes)
);

-- Table Carte
CREATE TABLE Carte (
    ID_Carte INT AUTO_INCREMENT PRIMARY KEY,
    ID_Box INT NOT NULL,
    ID_FruitsLegumes INT NOT NULL,
    ID_Illustration INT NOT NULL,
    Phrase TEXT,
    Calendrier_Saisons TEXT,
    Lieu_Croissance VARCHAR(255),
    Nb_Utilisation_Recettes INT,
    FOREIGN KEY (ID_Box) REFERENCES Box(ID_Box),
    FOREIGN KEY (ID_FruitsLegumes) REFERENCES FruitsLegumes(ID_FruitsLegumes),
    FOREIGN KEY (ID_Illustration) REFERENCES Illustration(ID_Illustration)
);

-- Table Carte_Recette 
CREATE TABLE Carte_Recette (
    ID_Carte_Recette INT AUTO_INCREMENT PRIMARY KEY,
    ID_Carte INT NOT NULL,
    ID_Recette INT NOT NULL,
    FOREIGN KEY (ID_Carte) REFERENCES Carte(ID_Carte),
    FOREIGN KEY (ID_Recette) REFERENCES Recette(ID_Recette)
);

-- Table Paiement
CREATE TABLE Paiement (
    ID_Paiement INT AUTO_INCREMENT PRIMARY KEY,
    ID_Client INT NOT NULL,
    ID_Box INT NOT NULL,
    Nom_Prenom VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Adresse_Facturation TEXT NOT NULL,
    Numero_Carte VARCHAR(19) NOT NULL,
    Nom_Carte VARCHAR(255) NOT NULL,
    Date_Expiration DATE NOT NULL,
    CVV INT NOT NULL,
    Montant DECIMAL(10, 2) NOT NULL,
    Date_Paiement DATETIME NOT NULL,
    Statut VARCHAR(50) NOT NULL,
    FOREIGN KEY (ID_Client) REFERENCES Client(ID_Client),
    FOREIGN KEY (ID_Box) REFERENCES Box(ID_Box)
);
