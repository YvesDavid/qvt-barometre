<<<<<<< HEAD
# QvtBarometreFront

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======

# 📊 QVT Baromètre – Plateforme d'Audits RPS & Enquêtes RH

Application web de sondage interne destinée à la qualité de vie au travail (QVT), inspirée de solutions comme Qualisocial.  
Elle permet aux entreprises de créer des enquêtes, aux employés d’y répondre anonymement, et aux RH de visualiser les résultats dynamiquement.

---

## Fonctionnalités principales

- Sondages dynamiques avec QCM
- 3 rôles utilisateurs : **User**, **Admin**, **Entreprise**
- Graphiques dynamiques (Angular + Chart.js)
- Authentification + protection des routes
- Communication front <-> back via API Symfony
- Interface responsive

---

## Stack

| Frontend      | Backend        | Outils / Services |
|---------------|----------------|--------------------|
| Angular 16    | Symfony 6      | Chart.js, ng2-charts |
| TypeScript    | PHP 8+         | Postman, Vercel (déploiement à venir) |
| SCSS / HTML   | API REST       | Git / GitHub        |

---

## Rôles utilisateurs

| Rôle        | Droits principaux |
|-------------|-------------------|
| **User** (employé)     | Répond aux enquêtes |
| **Admin** (RH / manager) | Visualise les résultats |
| **Entreprise** (DRH / consultant) | Crée des QCM et sondages |

---

## Lancer le projet en local

### 1. Backend (Symfony)

```bash
cd backend
composer install
php bin/console doctrine:migrations:migrate
symfony server:start
```

### 2. Frontend (Angular)

```bash
cd qvt-barometre-front
npm install
ng serve
```

> Le token d'authentification est stocké dans `localStorage`.

---

##  Structure du projet

```
qvt-barometre/
├── backend/                  # Symfony (API + sécurité)
├── qvt-barometre-front/     # Angular (interfaces + composants)
│   ├── pages/
│   ├── services/
│   └── shared/
```

---

## 📂 Fichiers importants

| Fichier | Rôle |
|--------|------|
| `results.ts` | Composant Angular affichant les résultats API |
| `api.ts` | Service d'appel à l'API Symfony |
| `auth-interceptor.ts` | Ajoute le JWT aux requêtes sortantes |
| `User.php` (Symfony) | Entité utilisateur avec gestion des rôles |

---

## 📌 TODO (prochaines étapes)

- [ ] Intégration authentification complète
- [ ] Formulaire d’ajout d’enquête dynamique
- [ ] Dashboard analytique avancé
- [ ] Déploiement (frontend + backend)

---


## 🤝 Auteur

Développé par **Yves DAVID** – Développeur fullstack Angular / Symfony.  
Contact : [davidyves@live.fr](mailto:davidyves@live.fr)
>>>>>>> d2c5bb6fd649bd19bb8d0679d7d5b1ff1df1f0d1
