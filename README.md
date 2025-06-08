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

5.1 Consulter les utilisateurs :
![image](https://github.com/user-attachments/assets/7db55b15-08a3-419d-bd6e-9076da901b87)


5.2 Consulter les comptes par ID :
![image](https://github.com/user-attachments/assets/5739f2e4-909b-4773-b7fe-9db9e44591e7)

5.3 Ajouter un utilisateur :
![image](https://github.com/user-attachments/assets/bf556f0d-4c1f-4666-87f8-96562bbbde20)
![image](https://github.com/user-attachments/assets/8fc67e8b-35ca-46d0-a74a-2ef5b790ef77)
![image](https://github.com/user-attachments/assets/cec66511-7cb9-4e40-9c1a-1bcb096375fe)
![image](https://github.com/user-attachments/assets/3cf329b0-5cb3-453c-b1d8-b4b23b0ea3ef)



5.4 Consulter les transactions et faire une opération :

Consulter les transactions et faire une operation :
![image](https://github.com/user-attachments/assets/87d02971-5360-4862-ad50-714f176e6e60)
![image](https://github.com/user-attachments/assets/41951e78-1bef-4b69-93f9-c45cebd72811)







