CREATE DATABASE TI_projekt;
USE TI_projekt;

CREATE TABLE prowadzacy(
idProwadzacego  INT AUTO_INCREMENT PRIMARY KEY,
imie VARCHAR(15) NOT NULL,
nazwisko VARCHAR(20) NOT NULL,
stopien_naukowy VARCHAR(20) NOT NULL,
email VARCHAR(30) NOT NULL
);

CREATE TABLE przedmiot(
idPrzedmiotu INT AUTO_INCREMENT PRIMARY KEY,
idProwadzacego INT NOT NULL,
przedmiot VARCHAR(30) NOT NULL,
FOREIGN KEY(idProwdzacego) REFERENCES prowadzacy(idProwadzacego)

);

CREATE TABLE typ_zajec(
idTypZ INT AUTO_INCREMENT PRIMARY KEY,
typZ Varchar(20) UNIQUE
);

CREATE TABLE typ_prowadzacego(
idFP INT AUTO_INCREMENT PRIMARY KEY,
funkcjaP Varchar(20) UNIQUE
)


CREATE TABLE uczelnia(
idProwadzacego INT NOT NULL,
idPrzedmiotu INT NOT NULL,
funkcja_prowadzacego VARCHAR(40) NOT NULL DEFAULT 'wykladowca/cwiczeniowiec',



FO)

CREATE TABLE konsulatacje(
dzien_tygodnia VARCHAR(20),
godzina VARCHAR(20),
budynek VARCHAR(4),
sala VARCHAR(6),
idProwadzacego INT NOT NULL,
idPrzedmiotu INT NOT NULL,
komentarz VARCHAR(200),
FOREIGN KEY(idProwadzacego) REFERENCES prowadzacy_dane(idProwadzacego),
FOREIGN KEY(idPrzedmiotu) REFERENCES uczelnia(idPrzedmiotu)
);


INSERT INTO prowadzacy_dane(imie, nazwisko, stopien_naukowy)
VALUES
('Zdzislaw','Onderka', 'dr'),
('Mariusz','Mlynarczuk', 'dr hab. inz.'),
('Pawel', 'Oleksik', 'dr'),
('Aleksaner','Cianciara','mgr inz.'),
('Andrzej','Lesniak','prof dr hab. inz.'),
('Maciej','Dwornik','dr inz.'),
('Agnieszka','Trela-Makowej','dr inz.'),
('Wilhelm','Czaplinski','dr'),
('Lucyna','Samek','dr hab. inz.'),
('Michal','Lupa','dr inz.'),
('Maciej','