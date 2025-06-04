Digital Banking
1. Présentation

Digital Banking est une application web qui permet aux utilisateurs de gérer les clients bancaires et leurs comptes. Ce dépôt contient le frontend de l’application, développé avec Angular (composants autonomes). Il communique avec le backend Spring Boot pour effectuer des opérations telles que la recherche de clients, la gestion des comptes, la réalisation de transactions (débit, crédit, transfert) et la création de nouveaux clients.

L’application offre une interface conviviale avec une barre de navigation, la gestion des clients, les opérations sur les comptes et la gestion des transactions.

2. Fonctionnalités

2.1 Gestion des clients :

Recherche de clients par mot-clé.

Affichage d’une liste de clients avec leurs détails.

Suppression d’un client.

Création d’un nouveau client avec validation du nom et de l’email.

2.2 Opérations sur les comptes :

Recherche d’un compte par identifiant.

Consultation des détails du compte et de l’historique des transactions avec pagination.

Réalisation de transactions : débit, crédit et transfert entre comptes.

2.3 Navigation :

Barre de navigation responsive pour accéder aux différentes sections (Accueil, Clients, Comptes, Nouveau client).

3. Technologies utilisées

Angular Framework

Spring Boot

Bootstrap

Bootstrap Icons

JWT (JSON Web Token)

4. Installation

Cloner le projet :


git clone https://github.com/nouha-prog/Digital-Banking.git
Accéder au dossier frontend et installer les dépendances :

cd e-Banking-App/frontend
npm install
Démarrer le frontend dans le terminal :


ng serve
Démarrer l’application principale du backend.
N.B : Assurez-vous que XAMPP est en cours d’exécution.

Ouvrir le navigateur et accéder à l’adresse :


http://localhost:4200/
5. Résultat
5.1 Authentification (admin,user)
![image](https://github.com/user-attachments/assets/04fe74b5-7aad-4238-adec-df373a20189d)

5.2 Homepage dynamique et moderne
![image](https://github.com/user-attachments/assets/33580aa1-7d3c-484a-89db-60d4ee517ff1)


5.1 Consulter les utilisateurs :
![image](https://github.com/user-attachments/assets/6dc18ff8-c328-4bda-804a-80d69bee8f78)

![image](https://github.com/user-attachments/assets/da69c1b7-0961-4cc3-890d-e98ef2d86b8b)

user:
![image](https://github.com/user-attachments/assets/85e2ee92-3720-478d-a6fc-f4b43e322334)




5.2 Consulter les comptes par ID :
![image](https://github.com/user-attachments/assets/2f600d4c-daf7-4703-8cfc-ec7a72bbf5de)
![image](https://github.com/user-attachments/assets/6f8ef0fe-e009-494e-a024-b07d48c8c5b0)
![image](https://github.com/user-attachments/assets/e12f530e-af29-45a8-b9d3-c3a409a8641b)

user: 
![image](https://github.com/user-attachments/assets/9d38d512-d218-4da4-acd3-f79434e6e222)



5.3 Ajouter un utilisateur :
![image](https://github.com/user-attachments/assets/36146db3-8554-4c9f-bfa1-9e3e0542744e)
![image](https://github.com/user-attachments/assets/20210c50-fcd2-401f-8368-779abedc6046)
![image](https://github.com/user-attachments/assets/813912c3-d354-4753-a6dd-36fd5a8b64e7)

![image](https://github.com/user-attachments/assets/46273aaf-0f2b-470b-866a-642b3d6046b4)




5.4 Consulter les transactions et faire une opération :

Consulter les transactions et faire une operation :
![image](https://github.com/user-attachments/assets/c2814270-7bc1-4279-8853-cba6b474c02e)
![image](https://github.com/user-attachments/assets/e12f530e-af29-45a8-b9d3-c3a409a8641b)








