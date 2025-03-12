# Les 100 livres à lire.... et plus

Ceci est mon tout premier projet d'application web en Java Springboot.

## Configuration
- Backend:
    - Java 21
    - Flyway
    - JDBC
    - PostgreSQL
- Frontend
    - React 
    - TypeScript

## Installation
1. Lancer le backend :
* exécuter le docker compose: `docker compose up -d`
* faites tourner l'application java (en cliquant sur le bouton `Run`de votre IDE)
2. Pour le frontend, dans votre terminal (depuis le dossier "/forntend"):
* aller sur le dossier frontend > `cd frontend`
* faire un `npm install` 
* lancer le frontend en exécutant la ligne de commande suivante:  `npm start`
3. Si vous ne voyez pas de données au chargement de l'application:
* cliquez sur le lien "Administration" (en haut à droite)
* cliquez ensuite sur le bouton "Charger les livres"

## Documentation
- [Swagger](http://localhost:8080/swagger-ui/index.html)