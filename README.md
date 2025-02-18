# Les 100 livres à lire.... et plus

Ceci est mon tout premier projet d'application web en Java Springboot.

## Configuration
- Backend:
    - Java 21
    - Flyway
    - JDBC
    - PostgreSQL
- Frontend
    - React (TypeScript)

## Installation
1. Lancer le backend :
  * exécuter le docker compose: `docker compose up -d`
  * lancer l'application java
2. Lancer le frontend en exécutant cette ligne de commande:  `npm run start`
3. Si pas de données au chargement de l'application:
   * Copier le contenu du fichier `InitialData.json` dans le dossier data du projet backend
   * Coller le contenu dans un Postman:
     * URL: http://localhost:8080/books/all
     * Method: POST
     * body: coller le contenu du fichier `InitialData.json` copié précédement
   * Lancer la requête

     

## Documentation
- [Swagger](http://localhost:8080/swagger-ui/index.html)