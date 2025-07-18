
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
