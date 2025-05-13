CREATE DATABASE IF NOT EXISTS blindtaste;

-- Table: Geo
CREATE TABLE Geo (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Region_Name VARCHAR(100) NOT NULL
);

-- Table: Veggies
CREATE TABLE Veggies (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Season VARCHAR(50),
    ID_Geo INT NOT NULL,
    Nb_Recipe INT NOT NULL,
    FOREIGN KEY (ID_Geo) REFERENCES Geo(ID)
);

-- Table: Box
CREATE TABLE Box (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Box_Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    Distrib_Date DATE NOT NULL
);

-- Table: Illustrations
CREATE TABLE Illustrations (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL
);

-- Table: Card
CREATE TABLE Card (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Box INT NOT NULL,
    ID_FL INT NOT NULL,
    ID_Illu INT NOT NULL,
    Veggie_Description TEXT,
    ID_Season INT NOT NULL,
    ID_Geo INT NOT NULL,
    Nb_Recipe INT NOT NULL,
    FOREIGN KEY (ID_Box) REFERENCES Box(ID),
    FOREIGN KEY (ID_FL) REFERENCES Veggies(ID),
    FOREIGN KEY (ID_Illu) REFERENCES Illustrations(ID),
    FOREIGN KEY (ID_Geo) REFERENCES Geo(ID)
);

-- Table: Recipe
CREATE TABLE Recipe (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Difficulty VARCHAR(50),
    Recipe_Description TEXT,
    ID_Veggies INT,
    FOREIGN KEY (ID_Veggies) REFERENCES Veggies(ID)
);

-- Table: RecipeCard
CREATE TABLE RecipeCard (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Card INT NOT NULL,
    ID_Recipe INT NOT NULL,
    FOREIGN KEY (ID_Card) REFERENCES Card(ID),
    FOREIGN KEY (ID_Recipe) REFERENCES Recipe(ID)
);

-- Table: Client
CREATE TABLE Client (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    First_Name VARCHAR(100) NOT NULL,
    Mail VARCHAR(150) NOT NULL,
    Phone_Number VARCHAR(20),
    Delivery_Address VARCHAR(200) NOT NULL
    Card_Number VARCHAR(19), -- Numéro de la carte (max 16 chiffres, mais on garde 19 pour les espaces ou tirets éventuels)
    Card_Expiration_Date VARCHAR(5), -- Date d'expiration de la carte (format MM/YY)
    Card_Holder_Name VARCHAR(100), -- Nom du titulaire de la carte
    Card_Brand VARCHAR(50) -- Type de la carte (ex : Visa, Mastercard, etc.)
);

-- Table: Command
CREATE TABLE Command (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Client INT NOT NULL,
    Client_Name VARCHAR(100),
    Client_FirstName VARCHAR(100),
    Client_Mail VARCHAR(150),
    Client_Phone VARCHAR(20),
    Client_Delivery VARCHAR(200),
    Command_Date DATETIME NOT NULL,
    FOREIGN KEY (ID_Client) REFERENCES Client(ID)
);