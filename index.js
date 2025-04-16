const chap1 = [
    {
        name: "Conception de l'application",
        content: "Définir l’objectif de l’application, les utilisateurs cibles, et les fonctionnalités principales. Faire des wireframes, établir un plan technique, choisir les technologies (frontend, backend, base de données)."
    },
    {
        name: "Prototype & Maquettes",
        content: "Créer une maquette ou prototype visuel de l’interface avec Figma, Adobe XD ou un autre outil. Valider la navigation, les composants UI, et préparer la base du design."
    },
    {
        name: "Choix des technologies",
        content: "Sélectionner les outils de développement : HTML, CSS, JS, un framework frontend (React, Vue…), un backend (Node, PHP…), et une base de données (MongoDB, MySQL…)."
    },
    {
        name: "Organisation du projet",
        content: "Créer une arborescence de fichiers claire, initialiser le projet (Git, NPM, etc.), organiser les tâches à réaliser (Trello, Notion…) et définir les priorités."
    },
    {
        name: "Plan de version et MVP",
        content: "Définir la première version (MVP) contenant les fonctionnalités minimales. Planifier les itérations futures selon les retours utilisateurs ou les besoins."
    }
];

const chap2 = [
    {
        name: "Structure HTML",
        content: "Créer le fichier HTML principal, structurer la page avec les balises sémantiques (header, section, article…), et ajouter les éléments de base comme la navbar ou les boutons."
    },
    {
        name: "CSS & Mise en forme",
        content: "Styliser les éléments avec CSS, utiliser les systèmes de layout (flexbox, grid), définir les couleurs, polices, marges, paddings, bordures, etc."
    },
    {
        name: "Responsive Design",
        content: "Adapter le site à tous les écrans (mobile, tablette, desktop) grâce aux media queries, aux unités relatives, et en respectant les bonnes pratiques d’accessibilité."
    },
    {
        name: "JavaScript Interactif",
        content: "Ajouter des interactions avec JavaScript (événements, animations, toggle), manipuler le DOM, valider des formulaires, et stocker des données localement avec localStorage."
    },
    {
        name: "Framework JS",
        content: "Utiliser un framework moderne (comme React ou Vue), créer des composants réutilisables, gérer les états (state, props), et implémenter la navigation avec un router."
    }
];

const chap3 = [
    {
        name: "Initialisation du serveur",
        content: "Créer un serveur backend (avec Node.js, Express, etc.), définir les routes de base et comprendre la logique client-serveur."
    },
    {
        name: "API REST",
        content: "Définir des routes API pour communiquer avec le frontend. Utiliser les méthodes HTTP (GET, POST, PUT, DELETE) pour gérer les données."
    },
    {
        name: "Base de données",
        content: "Choisir et configurer une base de données (MongoDB, PostgreSQL, etc.), créer des modèles de données et faire les premières connexions backend ⇔ BDD."
    },
    {
        name: "Contrôle des erreurs",
        content: "Mettre en place une gestion des erreurs propre (try/catch, middleware), valider les données et sécuriser les points sensibles de l’API."
    },
    {
        name: "Communication avec le frontend",
        content: "Connecter le backend au frontend via fetch ou axios, gérer les réponses JSON et intégrer les données dans l’interface utilisateur."
    }
];

const chap4 = [
    {
        name: "Création du système d’authentification",
        content: "Mettre en place l’inscription et la connexion d’un utilisateur via un formulaire sécurisé."
    },
    {
        name: "Hashage des mots de passe",
        content: "Utiliser bcrypt pour chiffrer les mots de passe avant de les stocker dans la base de données, afin de renforcer la sécurité."
    },
    {
        name: "Sessions & JWT",
        content: "Gérer les sessions avec express-session ou les jetons JWT pour permettre une authentification persistante entre les requêtes."
    },
    {
        name: "Protection des routes",
        content: "Empêcher l’accès à certaines routes sans authentification, ajouter des middlewares de sécurité pour valider les accès."
    },
    {
        name: "Validation & Sécurité",
        content: "Valider les entrées utilisateur (avec Joi ou express-validator), et protéger contre les failles courantes comme XSS, CSRF, injections, etc."
    }
];

const chap5 = [
    {
        name: "Préparation au déploiement",
        content: "Optimiser les fichiers (minification, bundling), préparer le fichier `.env`, sécuriser les clés API, et vérifier que tout fonctionne localement."
    },
    {
        name: "Hébergement Frontend",
        content: "Déployer le frontend sur une plateforme comme Vercel ou Netlify en connectant simplement le repo Git."
    },
    {
        name: "Hébergement Backend",
        content: "Déployer l’API backend sur Render, Railway, Heroku ou autre, connecter la base de données distante (Mongo Atlas, Supabase, etc.)"
    },
    {
        name: "Nom de domaine & DNS",
        content: "Acheter ou utiliser un nom de domaine gratuit, le lier à ton app via les DNS, et sécuriser l’accès avec HTTPS (SSL)."
    },
    {
        name: "Suivi & Maintenance",
        content: "Ajouter des outils de logs, monitoring (ex: LogRocket, Sentry), analyser les erreurs et feedbacks, et préparer les mises à jour futures."
    }
];


function chap10(chapterSelector,chapterData) {
    const chapter = document.querySelector(chapterSelector);
    const content = document.querySelector(".section1");
    const contentSection = document.querySelector(".section4");

    chapter.addEventListener("click", () => {
        console.log("clicked");
        console.log(chap1);

        // Clear existing buttons if needed
        content.innerHTML = "";

        for (let i = 0; i < chapterData.length; i++) {
            const element = chapterData[i];
            console.log(element.name);

            const button = document.createElement("p");
            button.classList.add("button", "buttonChap1");
            button.innerText = element.name;
            button.style.margin = "15px";
            button.style.display="flex"
            button.style.width = "80%";
            content.appendChild(button);

            // Add event listener for each button individually
            button.addEventListener("click", () => {

               
                
                // 💬 Affiche le contenu
                contentSection.innerHTML = "";
                const paragraph = document.createElement("p");
                paragraph.innerText = element.content;
                contentSection.appendChild(paragraph);
            });
        }
    });
}
chap10(".chap1", chap1);
chap10(".chap2", chap2);
chap10(".chap3", chap3);
chap10(".chap4", chap4);
chap10(".chap5", chap5);



