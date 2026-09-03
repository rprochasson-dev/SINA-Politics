// Données des candidats et leurs programmes par thème
const candidatsData = {
    pecresse: {
        nom: "Candidat 1",
        parti: "Les Républicains (LR)",
        programme: {
            economie: [
                "Baisse des impôts pour les ménages et les entreprises",
                "Réforme des retraites avec report de l'âge légal",
                "Soutien aux PME et aux startups"
            ],
            ecologie: [
                "Investissements massifs dans les énergies renouvelables",
                "Transition énergétique progressive",
                "Modernisation des infrastructures de transport"
            ],
            societe: [
                "Renforcement des moyens policiers et judiciaires",
                "Réforme de l'éducation avec plus d'autonomie pour les établissements",
                "Politique migratoire stricte"
            ]
        }
    },
    faure: {
        nom: "Candidat 2",
        parti: "Parti Socialiste (PS)",
        programme: {
            economie: [
                "Augmentation du SMIC et des salaires minimums",
                "Taxation des superprofits et des grandes fortunes",
                "Relance des services publics (hôpitaux, écoles, transports)"
            ],
            ecologie: [
                "Plan de rénovation thermique des logements",
                "Sortie progressive des énergies fossiles",
                "Développement des transports en commun"
            ],
            societe: [
                "Justice sociale et réduction des inégalités",
                "Éducation gratuite pour tous, de la maternelle à l'université",
                "Politique d'accueil des migrants"
            ]
        }
    },
    melenchon: {
        nom: "Candidat 3",
        parti: "La France Insoumise (LFI)",
        programme: {
            economie: [
                "VIe République par une assemblée constituante",
                "Sortie des traités européens libéraux",
                "Plan de relance écologique et sociale de 100 milliards d'euros par an"
            ],
            ecologie: [
                "100% d'énergies renouvelables d'ici 2050",
                "Nationalisation d'EDF et des autoroutes",
                "Interdiction des véhicules thermiques d'ici 2030"
            ],
            societe: [
                "Retraite à 60 ans pour tous",
                "SMIC à 1600€ net par mois",
                "Régularisation de tous les sans-papiers"
            ]
        }
    }
};

// Fonction pour mettre à jour l'affichage du comparateur
function updateComparaison() {
    const checkboxes = document.querySelectorAll('input[name="candidat"]:checked');
    const selectedCandidats = Array.from(checkboxes).map(cb => cb.value);
    const theme = document.getElementById('theme-select').value;

    const resultatDiv = document.getElementById('resultat-comparaison');

    if (selectedCandidats.length < 2) {
        resultatDiv.innerHTML = "<p>Veuillez sélectionner au moins 2 candidats pour comparer.</p>";
        return;
    }

    let html = `
        <h3>Comparaison sur le thème : ${theme}</h3>
        <table>
            <thead>
                <tr>
                    <th>Candidat</th>
                    <th>Propositions</th>
                </tr>
            </thead>
            <tbody>
    `;

    selectedCandidats.forEach(candidatId => {
        const candidat = candidatsData[candidatId];
        const propositions = candidat.programme[theme].join('<br><br>');
        html += `
            <tr>
                <td><strong>${candidat.nom}</strong><br><small>${candidat.parti}</small></td>
                <td>${propositions}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    resultatDiv.innerHTML = html;
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('resultat-comparaison')) {
        updateComparaison();
    }
});
