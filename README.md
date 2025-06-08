
# Digital Banking
1. Présentation
🏦 E-Banking App — Gestion des comptes bancaires

## 📌 Présentation Générale
Ce projet est une application de gestion bancaire développée avec Spring Boot pour le backend et Angular pour le frontend. Il permet de gérer des clients, leurs comptes bancaires (courants & épargnes), ainsi que les opérations bancaires (crédits et débits). L'application est également sécurisée via Spring Security et JWT.


# 📂 Structure du Projet
## 🧠 Backend — Spring Boot
Technologies :
- Java 17+
- Spring Boot 3
- JPA/Hibernate
- Spring Data JPA
- Spring Security
- JWT
- Springdoc OpenAPI

Liens utiles :

Création Backend - Partie 1

Création Backend - Partie 2

## 📌 Entités JPA :
Customer : représente un client.

BankAccount (classe abstraite) : héritée par :

CurrentAccount (compte courant)

SavingAccount (compte épargne)

AccountOperation : représente une opération (DEBIT ou CREDIT)

AppUser : utilisateur authentifié (Spring Security)

## 📦 Architecture :
repository/ → Interfaces JPA

web/ → Contrôleurs REST

Security/ → Configuration sécurité

dto/ → Objets de transfert de données

## 🔐 Sécurité :
- Authentification basée sur JWT

- Gestion des rôles

- Filtrage des requêtes via SecurityFilterChain

- API sécurisées avec @PreAuthorize

# 🌐 Frontend — Angular
Technologies :
- Angular 19 : Framework pour créer l’application à page unique (SPA).


- TypeScript : Pour un JavaScript typé et plus sécurisé.


- Bootstrap 5 : Pour un design d’interface utilisateur responsive.


- RxJS : Pour gérer les opérations asynchrones (ex : requêtes HTTP).


- Formulaires réactifs Angular : Pour la validation et la soumission des formulaires.


- Node.js 18+ & npm : Pour la gestion des packages et les outils de build.

Lien : Frontend Angular - YouTube

# 🧰 Fonctionnalités general  :
- Gestion complète des clients

- Administration des comptes bancaires

- Visualisation des opérations

- Authentification sécurisée (login/logout/token)

## Opérations sur les comptes :

- Recherche d’un compte par identifiant.

- Consultation des détails du compte et de l’historique des transactions avec pagination.

- Réalisation de transactions : débit, crédit et transfert entre comptes.

- ## Navigation :

- Barre de navigation responsive pour accéder aux différentes sections (Accueil, Clients, Comptes, Nouveau client).

## ⚙️ Fonctionnalités détaillées

### 🛠 Backend (`src`)

- **Gestion des clients** : Création, consultation, recherche et suppression de clients via des API RESTful.
- **Gestion des comptes** : Consultation des détails des comptes, affichage de l’historique des transactions, et exécution des opérations de débit, crédit et virement.
- **Sécurité** : Authentification basée sur JWT avec un contrôle d'accès basé sur les rôles (`USER`, `ADMIN`). CORS configuré pour permettre la communication avec le frontend.
- **Principaux endpoints** :
    - `POST /auth/login` : Authentifie les utilisateurs et génère un token JWT.
    - `GET /customers` : Liste de tous les clients.
    - `GET /customers/search?keyword={kw}` : Recherche de clients par mot-clé.
    - `POST /customers` : Création d’un nouveau client.
    - `DELETE /customers/{id}` : Suppression d’un client.
    - `GET /accounts/{accountId}/history?page={p}&size={s}` : Récupère l’historique des opérations d’un compte avec pagination.
    - `POST /accounts/debit` : Débiter un compte.
    - `POST /accounts/credit` : Créditer un compte.
    - `POST /accounts/transfer` : Transférer des fonds entre deux comptes.

---

### 💻 Frontend (`ebanking-Frontend`)

- **Gestion des clients** :
    - Affichage de la liste des clients avec identifiant, nom et e-mail.
    - Recherche de clients par mot-clé.
    - Ajout de nouveaux clients avec validation des formulaires (nom, e-mail).
    - Suppression de clients avec confirmation.

- **Gestion des comptes** :
    - Recherche d’un compte par identifiant pour afficher le solde et l’historique des transactions.
    - Exécution des opérations de débit, crédit et virement via des formulaires (montant, description, compte destinataire pour les virements).
    - Affichage paginé de l’historique des transactions.

- **Authentification** :
    - Page de connexion pour authentifier l'utilisateur et obtenir un token JWT.
    - Fonction de déconnexion pour effacer le token et rediriger vers la page de login.
    - Page d’accès non autorisé en cas de tentative sur une route protégée.
    - Intercepteur HTTP pour joindre automatiquement le token JWT aux requêtes API.
    - Garde de routes pour protéger les routes nécessitant une authentification.

- **Composants UI** :
    - Barre de navigation responsive pour faciliter l’accès aux fonctionnalités.
    - Template administrateur pour une cohérence de mise en page.
    - Utilisation de Bootstrap 5 pour le style et de Bootstrap Icons pour les éléments visuels.

## Project Structure
### Backend (`src`)
```

├── src/
│   ├── main/
│   │   ├── java/ma/enset/ebankingbackend/
│   │   │   ├── EbankingBackendApplication.java       # Main application entry point
│   │   │   ├── dto/                                # Data Transfer Objects
│   │   │   │   ├── AccountHistoryDTO.java
│   │   │   │   ├── AccountOperationDTO.java
│   │   │   │   ├── BankAccountDTO.java
│   │   │   │   ├── CreditDTO.java
│   │   │   │   ├── CurrentBankAccountDTO.java
│   │   │   │   ├── CustomerDTO.java
│   │   │   │   ├── DebitDTO.java
│   │   │   │   ├── SavingBankAccountDTO.java
│   │   │   │   └── TransferRequestDTO.java
│   │   │   ├── entities/                            # JPA entities
│   │   │   │   ├── AccountOperation.java
│   │   │   │   ├── BankAccount.java
│   │   │   │   ├── CurrentAccount.java
│   │   │   │   ├── Customer.java
│   │   │   │   └── SavingAccount.java
│   │   │   ├── enums/                               # Enum definitions
│   │   │   │   ├── AccountStatus.java
│   │   │   │   └── OperationType.java
│   │   │   ├── exceptions/                          # Custom exceptions
│   │   │   │   ├── BalanceNotSufficientException.java
│   │   │   │   ├── BankAccountNotFoundException.java
│   │   │   │   └── CustomerNotFoundException.java
│   │   │   ├── mappers/                             # Data mapping
│   │   │   │   └── BankAccountMapperImpl.java
│   │   │   ├── repositories/                        # JPA repositories
│   │   │   │   ├── AccountOperationRepository.java
│   │   │   │   ├── BankAccountRepository.java
│   │   │   │   └── CustomerRepository.java
│   │   │   ├── security/                            # Security configuration
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   └── SecurityController.java
│   │   │   ├── services/                            # Business logic
│   │   │   │   ├── BankAccountService.java
│   │   │   │   └── BankAccountServiceImpl.java
│   │   │   └── web/                                 # REST controllers
│   │   │       ├── BankAccountController.java
│   │   │       └── CustomerRestController.java
│   │   └── resources/
│   │       ├── application.properties               # Configuration (e.g., JWT secret)
│   │       ├── static/                              # Static resources (empty)
│   │       └── templates/                           # Templates (empty)
│   └── test/
│       └── java/ma/enset/ebankingbackend/
│           └── EbankingBackendApplicationTests.java # Unit tests
├── pom.xml                                          # Maven configuration
├── mvnw                                             # Maven wrapper
├── mvnw.cmd                                         # Maven wrapper for Windows
└── HELP.md                                          # Maven help file
```

### Frontend (`ebanking-Frontend`)
```
ebanking-Frontend/
├── src/
│   ├── app/
│   │   ├── accounts/                            # Account management component
│   │   │   ├── accounts.component.css
│   │   │   ├── accounts.component.html
│   │   │   ├── accounts.component.spec.ts
│   │   │   └── accounts.component.ts
│   │   ├── admin-template/                      # Admin layout component
│   │   │   ├── admin-template.component.css
│   │   │   ├── admin-template.component.html
│   │   │   ├── admin-template.component.spec.ts
│   │   │   └── admin-template.component.ts
│   │   ├── customer-accounts/                   # Customer accounts component
│   │   │   ├── customer-accounts.component.css
│   │   │   ├── customer-accounts.component.html
│   │   │   ├── customer-accounts.component.spec.ts
│   │   │   └── customer-accounts.component.ts
│   │   ├── customers/                           # Customer management component
│   │   │   ├── customers.component.css
│   │   │   ├── customers.component.html
│   │   │   ├── customers.component.spec.ts
│   │   │   └── customers.component.ts
│   │   ├── guards/                              # Authentication and authorization guards
│   │   │   ├── authentication.guard.spec.ts
│   │   │   ├── authentication.guard.ts
│   │   │   ├── authorization.guard.spec.ts
│   │   │   └── authorization.guard.ts
│   │   ├── interceptors/                        # HTTP interceptors
│   │   │   ├── app-http.interceptor.spec.ts
│   │   │   └── app-http.interceptor.ts
│   │   ├── login/                               # Login component
│   │   │   ├── login.component.css
│   │   │   ├── login.component.html
│   │   │   ├── login.component.spec.ts
│   │   │   └── login.component.ts
│   │   ├── models/                              # Data models
│   │   │   ├── account.model.ts
│   │   │   └── customer.model.ts
│   │   ├── navbar/                              # Navigation bar component
│   │   │   ├── navbar.component.css
│   │   │   ├── navbar.component.html
│   │   │   ├── navbar.component.spec.ts
│   │   │   └── navbar.component.ts
│   │   ├── new-customer/                        # New customer form component
│   │   │   ├── new-customer.component.css
│   │   │   ├── new-customer.component.html
│   │   │   ├── new-customer.component.spec.ts
│   │   │   └── new-customer.component.ts
│   │   ├── not-authorized/                      # Unauthorized access component
│   │   │   ├── not-authorized.component.css
│   │   │   ├── not-authorized.component.html
│   │   │   ├── not-authorized.component.spec.ts
│   │   │   └── not-authorized.component.ts
│   │   ├── services/                            # Services for API communication
│   │   │   ├── account.service.spec.ts
│   │   │   ├── account.service.ts
│   │   │   ├── auth.service.spec.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── customer.service.spec.ts
│   │   │   └── customer.service.ts
│   │   ├── app.component.css                    # Root component styles
│   │   ├── app.component.html                   # Root component template
│   │   ├── app.component.spec.ts                # Root component tests
│   │   ├── app.component.ts                     # Root component logic
│   │   ├── app.config.ts                        # Application configuration
│   │   └── app.routes.ts                        # Routing configuration
│   ├── environments/                            # Environment configuration
│   │   └── environment.ts
│   ├── index.html                               # Main HTML file
│   ├── main.ts                                  # Application bootstrap
│   └── styles.css                               # Global styles
├── public/
│   └── favicon.ico                              # Favicon
├── angular.json                                 # Angular configuration
├── package.json                                 # Node.js dependencies
├── package-lock.json                            # Dependency lock file
├── tsconfig.app.json                            # TypeScript app config
├── tsconfig.json                                # TypeScript config
└── tsconfig.spec.json                           # TypeScript test config
```

## Cloner le projet :

git clone https://github.com/nouha-prog/Digital-Banking.git

- Accéder au dossier frontend et installer les dépendances :

### Frontend (`ebanking-frontend`)
1. **Navigate to Frontend Directory**:
   ```bash
   cd ebankingFrontend
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment**:
    - Edit `src/environments/environment.ts`:
      ```typescript
      export const environment = {
        production: false,
        backendHost: 'http://localhost:8085'
      };
      ```
4. **Run the Application**:
   ```bash
   ng serve
   ```
   The frontend will run on `http://localhost:4200`.

- Démarrer l’application principale du backend.

N.B : Assurez-vous que XAMPP est en cours d’exécution.



# 🚀 Utilisation
## Accès à l'application :
Ouvrez l’URL suivante dans votre navigateur :
👉 http://localhost:4200

- Connexion :

Utilisez l’un des identifiants suivants :

- Nom d'utilisateur : user1, Mot de passe : 12345 (rôle : USER)

- Nom d'utilisateur : admin, Mot de passe : 12345 (rôles : USER, ADMIN)

Une connexion réussie redirige vers le tableau de bord principal.

## Navigation dans les fonctionnalités :
- Clients : Afficher, rechercher, ajouter ou supprimer des clients.


- Comptes : Rechercher un compte par identifiant, consulter l’historique des opérations et effectuer des actions (débit, crédit, virement).


- Déconnexion : Supprime le token JWT et redirige vers la page de connexion.


## Gestion des accès non autorisés :
Toute tentative d’accès à une route protégée sans un token valide redirige vers la page "non autorisé".

## Résultat attendu 
-  Authentification (admin,user)

![image](https://github.com/user-attachments/assets/04fe74b5-7aad-4238-adec-df373a20189d)

-  Homepage dynamique et moderne

![image](https://github.com/user-attachments/assets/33580aa1-7d3c-484a-89db-60d4ee517ff1)


-  Consulter les utilisateurs :

![image](https://github.com/user-attachments/assets/6dc18ff8-c328-4bda-804a-80d69bee8f78)

![image](https://github.com/user-attachments/assets/da69c1b7-0961-4cc3-890d-e98ef2d86b8b)

user:
![image](https://github.com/user-attachments/assets/85e2ee92-3720-478d-a6fc-f4b43e322334)



- Consulter les comptes par ID :

![image](https://github.com/user-attachments/assets/2f600d4c-daf7-4703-8cfc-ec7a72bbf5de)
![image](https://github.com/user-attachments/assets/6f8ef0fe-e009-494e-a024-b07d48c8c5b0)


user:

![image](https://github.com/user-attachments/assets/9d38d512-d218-4da4-acd3-f79434e6e222)


-  Ajouter un utilisateur :

![image](https://github.com/user-attachments/assets/36146db3-8554-4c9f-bfa1-9e3e0542744e)

![image](https://github.com/user-attachments/assets/20210c50-fcd2-401f-8368-779abedc6046)

![image](https://github.com/user-attachments/assets/813912c3-d354-4753-a6dd-36fd5a8b64e7)

![image](https://github.com/user-attachments/assets/46273aaf-0f2b-470b-866a-642b3d6046b4)




-  Consulter les transactions et faire une opération :

![image](https://github.com/user-attachments/assets/c2814270-7bc1-4279-8853-cba6b474c02e)

![image](https://github.com/user-attachments/assets/e12f530e-af29-45a8-b9d3-c3a409a8641b)


## 🧪 Tests & Validation

- ✅ **Tests unitaires** sur les services pour assurer la fiabilité des règles métier.
- 🔁 **Tests d’intégration** réalisés via **Postman** pour valider les endpoints REST.
- ❌ **Gestion des erreurs** assurée avec `@ControllerAdvice` pour un retour cohérent côté client.
- 🔐 **Vérification des autorisations** avec l’annotation `@PreAuthorize` afin de restreindre l’accès aux opérations sensibles selon les rôles (`USER`, `ADMIN`).

---

## 💡 Idées d'Améliorations Futures

- 📧 Envoi d’un **email de confirmation** automatique lors de chaque transaction.
- 📢 Intégration d’un **système de notifications en temps réel** avec **WebSocket**.
- 🌍 Mise en place du **support multilingue** (internationalisation) avec **i18n Angular**.
- 📄 Possibilité d’**exporter les opérations** au format **PDF ou Excel**.


## 👤 Réalisé par :

- **Nom & Prénom** : EL HAJJI Nouhaila
- **Statut** : Futur Ingenieure en  Big Data & Cloud Computing
- **Email** : *[nouhailaelhajji488@gmail.com]*
- **GitHub** : [nouha-prog](https://github.com/nouha-prog)






