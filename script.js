document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === '37e91432690c844941af8aa033de57d1') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() === '') return;

    // Ajouter le message de l'utilisateur
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    userMessage.innerHTML = `<p>${userInput.value}</p>`;
    chatBox.appendChild(userMessage);

    // Réponse du bot
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    botMessage.innerHTML = `<p>${getBotResponse(userInput.value)}</p>`;
    chatBox.appendChild(botMessage);

    // Effacer l'input
    userInput.value = '';

    // Faire défiler vers le bas
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Convertir le message en minuscules pour faciliter la détection des mots-clés
    const message = userMessage.toLowerCase();

       // Liste de mots offensants (à adapter selon les besoins)
       const offensiveWords = [
        "idiot", "stupide", "con", "imbécile", "crétin", "salaud", "connard", "pute", "merde", "nul"
    ];

    // Vérifier si le message contient des mots offensants
    const containsOffensiveWord = offensiveWords.some(word => message.includes(word));

    if (containsOffensiveWord) {
        return "OOOH non pas ça, je suis ici pour présenter les villes de la Côte d'Ivoire. Comment puis-je vous aider ? 😊";
    }

    // Tableau de salutations et réponses
    const greetings = [
        "Bonjour, viens découvrir mon pays, la Côte d'Ivoire ! 🌴",
        "Hello, prêt à explorer les merveilles de la Côte d'Ivoire? 🌍",
        "Bonsoir, laisse-moi te guider à travers les trésors de mon pays ! 🌅",
        "Salut, prêt(e) pour un voyage en Côte d'Ivoire ? 🚀",
        "Coucou, viens découvrir les merveilles de la Côte d'Ivoire ! 🌟",
    ];

    // Vérifier si le message contient une salutation
    if (
        message.includes("bonjour") ||
        message.includes("hello") ||
        message.includes("bonsoir") ||
        message.includes("salut") ||
        message.includes("coucou")
    ) {
        // Choisir une salutation aléatoire
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        return randomGreeting;
    }

      // Réponses en fonction des mots-clés
    if (message.includes("côte d'ivoire") || message.includes("ville ivoirienne")) {
        return "La Côte d'Ivoire est un pays magnifique avec de belles villes à découvrir. Voici quelques sites incontournables : Abidjan (la capitale économique), Yamoussoukro (la capitale politique) et les plages de Grand-Bassam. Que voulez-vous savoir en particulier ?";
    } else if (message.includes("abidjan")) {
        return `
            Abidjan est  La capitale économique; voici des lieux à visiter : le  Plateau, quartier des affaires avec ses gratte-ciels,  la Cathédrale Saint-Paul, Le Parc national du Banco (forêt tropicale en pleine ville), le marché d’Adjamé et le marché de Treichville, la  Baie de Cocody et la Lagune Ébrié et le Musée des Civilisations de Côte d’Ivoire.
            <img src="image/image-AM-423-424-page-72-73.jpg" alt="Abidjan"./>
        `;
    } else if (message.includes("yamoussoukro")) {
        return `
            Yamoussoukro  est la capitale politique avec de  belle architecture comme: l a Basilique Notre-Dame de la Paix, l’une des plus grandes du monde, la Fondation Félix Houphouët-Boigny puis le Lac aux Caïmans, entourant la résidence présidentielle.
            <img src="image/0f7bb52_31208-270c8m.png" alt="Yamoussoukro"./>
        `;
    } else if (message.includes("bouaké")) {
        return `
            Bouaké est une  ville du centre du pays à découvrir à travers la Cathédrale Sainte-Thérèse, son marché, réputé pour son artisanat sans oublier la mosqué.        
            <img src="image/Bouaké_Collage.jpg" alt="Bouaké"./>
        `;
    } else if (message.includes("daloa")) {
        return `
            Daloa; grande viille commerciale de l’Ouest qui donne une belle vue sur la Cascade de la Lobe, la forêt de Scio, un espace naturel préservé.
            <img src="image/Capture d’écran du 2025-03-07 08-45-35.png" alt="daloa"./>
        `;
    } else if (message.includes("san pedro")) {
        return `
            San Pedro est une ville balnéaire avec la formidable plage de Monogaga, idéale pour le surf et le repos, le Parc national de Taï, réserve de biodiversité et patrimoine UNESCO sans oublier Le Port de San Pedro, deuxième plus grand du pays.
            <img src="image/San-Pedro-Balmer.jpg" alt="san pedro"./>
        `;
    } else if (message.includes("korhogo")) {
        return `
            Korhogo est une ville du Nord, réputée pour son artisanat, notamment les tissus traditionnels, les masques et les poteries. A visiter : le Musée des masques, le Palais royal, le marché de Korhogo.
            <img src="image/sculpture-koko.jpg" alt="khorogo"./>
        `;
    } else if (message.includes("gagnoa")) {
        return `
            Gagnoa est une ville du centre-ouest qui regorge la forêt classée du Haut-Sassandra et les villages traditionnels bétés.
            <img src="image/gagnoa-danse-traditionnelle.jpg" alt="ganoa"./>
        `;
    } else if (message.includes("abengourou")) {
        return `
            Abengourou, ville de l’Est est connu pour son magnifique Palais du Roi de l’Indénié, ces différentes plantations de cacao et de café sans oublier le fameux monastère bénédictin de Bouaké, proche d’Abengourou.
            <img src="image/1659cc75227694996edfedee430cb4a4_XL.jpg" alt="abengourou"./>
        `;
    } else if (message.includes("soubré")) {
        return `
            Soubré est une ville agricole du Sud-Ouest qui qui possède les chutes de la Nawa et sa majestueuse forêt classée du Cavally.            
            <img src="image/_W0A5876.jpg" alt="soubré"./>
        `;
    } else if (message.includes("aboisso")) {
        return `
            Aboisso est une des villes historique de l’Est où il fait beau avdc le fleuve Bia, idéal pour des balades en pirogue, le Pont de Noé, reliant la Côte d’Ivoire au Ghana sans oublier les différentes plantations de cacao et de palmier à huile.
            <img src="image/6648f45035a47efdafeee4d3f3f056e4_XL.jpg" alt="aboisso"./>
        `;
    } else if (message.includes("agboville")) {
        return `
            Agboville, ville du Sud-Est qui met en valeur la forêt de Besso, une réserve naturelle avec le village artisanal d’Agboville, réputé pour ses tisserands et sculpteurs puis es danses traditionnelles Abbey et Krobou.
            <img src="image/DOMAINE-BINI-1.jpg" alt="agboville"./>
        `;
    } else if (message.includes("man")) {
        return `
            Man appelé ville montagneuse situé à l’Ouest du pays avec des sites touristiques attractifstel que les Dents de Man, formation rocheuse impressionnante, les Cascades de Man magnifiques chutes d’eau sans oublier le légendaire pont de lianes de Lieupleu, chef-d’œuvre traditionnel.
            <image src="image/CascadeMan.jpg" alt="man"./>
        `;
    } else if (message.includes("bondoukou")) {
        return `
            Bondoukou est située au Nord-Est du pays avec pour surnom la “ville aux mille mosquées” car elle valorise les mosquées de style soudanais,le Mont Bagoué, idéal pour la randonnée sans toutefois oublier de visiter les cascades de Koun-Fao, situées à proximité.
            <img src="image/sorobango-mosque.jpg" alt="bondoukou"./>
        `;
    } else if (message.includes("dabou")) {
        return `
            Dabou, ville côtière proche d’Abidjan présente la Baie des Sirènes, station balnéaire avec le village de Tiagba, construit sur l’eau sans oublier la colline sacrée des Adioukrou.
            <img src="image/la-baie-des-sirenes.jpg" alt="dabou"./>
        `;
    } else if (message.includes("dimbokro")) {
        return `
            Dimbokro est une ville du centre avec le pont ferroviaire sur le fleuve N’Zi avec le marché traditionnel Akan et les danses et rites traditionnels Baoulé.
            <img src="image/ob_f7841f_10669117-1529889403891069-850594183828.jpg" alt="dimbokro"./>
        `;
    } else if (message.includes("ferkessédougou")) {
        return `
            Ferkessédougou est ville incontournable du Nord avec son prestigieux parc de la Comoé, site classé UNESCO, sa a mosquée, en architecture soudanaise et le marché aux bestiaux, l’un des plus grands du pays.            
            <img src="image/921832f_XsYTby6mnP4Nukv5CKUDP94e.png" alt="ferkessédougou"./>
        `;
    } else if (message.includes("grand-bassam")) {
        return `
            Grand-Bassam est une autre ville historique et balnéaire, elle est une vieille ville coloniale, classée patrimoine mondial de l’UNESCO avec le Musée national du costume et splendide a plage de Grand-Bassam et le quartier France.
            <img src="image/IMG_9511-1024x767.png" alt="grand-bassam"./>
        `;
    } else if (message.includes("odienné")) {
        return `
            Odienné est aussi une ville du Nord-Ouest qui met en valeur le Mont Dengué, point culminant de la région, La mosquée de Samatiguila, une des plus anciennes du pays et la danse traditionnelle du Boloye..
            <img src="image/Massif-de-Denguele.jpg" alt="odienné"./>
        `;
    } else if (message.includes("tiassalé")) {
        return `
            Tiassalé est une ville au bord du fleuve Bandama reconnue par son pont Eiffel, construit pendant l’époque coloniale avec son fleuve Bandama, idéal pour les balades en pirogue sans toutefois oublier de visiter les grottes sacrées de Tiassalé.
            <image src="image/pont-arcade-de-Tiassale.jpg" alt="tiassalé"./>
        `;
    } else if (message.includes("toumodi")) {
        return `
            Toumodi est une ville du centre-sud proche de la capitale, elle est connue par ces plantations de cacao et de café et son grand marché célèbre pour ses tissus et poteries.
            <img src="image/a27d24_2523e3389c004894acda31c607cb5fb3~mv2.png" alt="toumodi"./>
        `;
    } else if (message.includes("adzopé")) {
        return `
            Adzopé est une ville du Sud-Est qui a l’une des forêt classée, idéale pour l’écotourisme avec son marché central, réputé pour ses produits locau et les danses traditionnelles Agni et Attié.
            <image src="image/téléchargement.png" alt="adzopé"./>
        `;
    } else if (message.includes("bangolo")) {
        return `
            Bangolo est une autre ville de l’Ouest connue par ces villages traditionnels Wê, avec leurs cases en banco, les danses masquées et les cérémonies culturelles puis les montagnes environnantes, parfaites pour la randonnée.
            <img src="image/images.jpeg" alt="bongolo"./>
        `;
    } else if (message.includes("béoumi")) {
        return `
            Béoumi, proche de Bouaké est connu pour ces balades en pirogue sur le Kossou, le village de Konankankro, connu pour ses traditions baoul sans oublier les chutes de la rivière Bandama
            <img src="image/63ecd2d3fd6a22760f72654a_DJI_0660.jpg" alt="béoumi"./>
        `;
    } else if (message.includes("bouna")) {
        return `
            Bouna, ville du Nord-Est reserve un Parc national de la Comoé, classé UNESCO puis son village célèbre pour ses cases en terre battue avec les danses et fêtes traditionnelles Koulango et Lobi.
            <img src="image/Fleuve traversant le parc National de la comoé.jpg" alt="bouna"./>
        `;
    } else if (message.includes("dianra")) {
        return `
            Dianra est une ville du Nord avec des ressources tel que: le Mont Tiané, un site naturel préservé, les villages Sénoufo, où l’on découvre les rites ancestraux sans toutefois oublier le marché artisanal, réputé pour ses sculptures et tissus..            
            <img src="image/74044-danane3.png" alt="dianara"./>
        `;
    } else if (message.includes("duékoué")) {
        return `
            Duékoué est une ville l’Ouest qui présente une Cascade qui est un magnifique site naturel, le marché local, où l’on trouve des produits artisanaux Wê et la forêt classée du Mont Péko, riche en biodiversité.
            <img src="image/duékoué.jpg" alt="duékoué"./>
        `;
    } else if (message.includes("guiglo")) {
        return `
            Guiglo est une grande ville forestière de l’Ouest connue par sa Forêt de Taï, l’une des dernières forêts primaires d’Afrique de l’Ouest ainsi que le Pont de Guiglo, un site historique et les danses et rites traditionnels Dan et Wê.
            <img src="image/guiglo.jpeg" alt="guiglo"./>
        `;
    } else if (message.includes("issia")) {
        return `
            Issia est une ville purement gricole situé au centre-ouest du pays tout en présentant les plantations de cacao et de café ,les villages traditionnels bétés et le Lac d’Issia, propice aux activités de pêche.
            <image src="image/issia.jpg" alt="issia"./>
        `;
    } else if (message.includes("assinie")) {
        return `
            Assinie – Ville balnéaire prisée de la Côte d’Ivoire, elle est l’une des destinations touristiques les plus populaires du pays, située à environ 80 km à l’est d’Abidjan. C’est un véritable paradis pour les amoureux de la mer, de la nature et du luxe.
            <img src="image/assinie-6.jpg" alt="assinie"./>
        `;
    } else if (message.includes("séguéla")) {
        return `
            Séguéla est une Ville du Nord-Ouest avec son prestigieux Mont Séguéla, parfait pour les amateurs de randonnée ainsi que ces mines de diamants artisanales, où l’on découvre l’exploitation locale et sa Mosquée qui est un édifice historique.
            <image src="image/Seguela-1-1024x576.jpg" alt="séguéla"./>
        `;
    } else {
        return "Je suis un chatbot qui présente les villes ainsi que la météo de la Côte d'Ivoire..!";
  
  }


}
// Ajouter un écouteur d'événement pour le bouton de localisation
document.getElementById('location-btn').addEventListener('click', getLocation);

// Fonction pour obtenir la localisation
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getCityFromCoordinates(latitude, longitude);
            },
            (error) => {
                console.error("Erreur de géolocalisation :", error);
                displayMessage("bot", "Impossible d'obtenir votre localisation. Veuillez activer la géolocalisation.");
            }
        );
    } else {
        displayMessage("bot", "La géolocalisation n'est pas supportée par votre navigateur.");
    }
}

// Clé API OpenWeather
const apiKey = "37e91432690c844941af8aa033de57d1";

// Fonction pour obtenir la météo par localisation (latitude et longitude)
async function getWeatherByLocation(latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const city = data.name;
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            return `Vous êtes à ${city} : ${weatherDescription}. Température : ${temperature}°C, Humidité : ${humidity}%, Vent : ${windSpeed} km/h.`;
        } else {
            return "Désolé, je n'ai pas pu récupérer la météo pour votre localisation.";
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données météo :", error);
        return "Désolé, une erreur s'est produite lors de la récupération des données météo.";
    }
}

// Fonction pour obtenir la localisation de l'utilisateur
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                getWeatherByLocation(latitude, longitude).then((response) => {
                    // Afficher la réponse dans le chat
                    displayBotMessage(response);
                });
            },
            (error) => {
                console.error("Erreur de géolocalisation :", error);
                displayBotMessage("Désolé, je n'ai pas pu accéder à votre localisation.");
            }
        );
    } else {
        displayBotMessage("La géolocalisation n'est pas supportée par votre navigateur.");
    }
}

// Fonction pour afficher un message du bot dans le chat
function displayBotMessage(message) {
    const chatBox = document.querySelector(".chat-box");
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    botMessage.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Faire défiler vers le bas
}

// Fonction pour afficher un message de l'utilisateur dans le chat
function displayUserMessage(message) {
    const chatBox = document.querySelector(".chat-box");
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Faire défiler vers le bas
}

// Gestionnaire d'événement pour le bouton d'envoi
document.getElementById("send-btn").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
        displayUserMessage(userInput);
        const weatherResponse = await getWeatherByCity(userInput);
        displayBotMessage(weatherResponse);
        document.getElementById("user-input").value = ""; // Effacer le champ de saisie
    }
});

// Gestionnaire d'événement pour le bouton de localisation
document.getElementById("location-btn").addEventListener("click", () => {
    displayUserMessage("Où suis-je ?");
    getUserLocation();
});