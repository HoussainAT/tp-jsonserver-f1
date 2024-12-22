# Projet Vite + React + JSON Server

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- Node.js (version 16 ou supérieure recommandée)
- Un gestionnaire de paquets comme `npm` ou `yarn`

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/HoussainAT/tp-jsonserver-f1.git
cd tp-jsonserver-f1
```

### 2. Installer les dépendances

Installez les dépendances du projet en exécutant :

```bash
npm install
```

ou, si vous utilisez `yarn` :

```bash
yarn install
```

### 3. Démarrer le serveur de développement

Pour lancer l'application React avec Vite :

```bash
npm run dev
```

### 4. Démarrer JSON Server

Assurez-vous que `json-server` est installé globalement ou dans le projet. Ensuite, démarrez le serveur JSON :

```bash
json-server --watch db.json
```
