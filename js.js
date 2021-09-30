const chaptersObj = {
    sortie: {
        subtitle: 'Première sortie',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        img: 'ete.png',
        options: [
            "avancer vers l'inconnu" = {
              text: "avancer vers l'inconnu",  
              action: goToChapter(rencontre)
            }
        ]
    },
    rencontre: {
        subtitle: 'Chasse la licorne',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        img: 'ete.png',
        options: [
            "Tirer la licorne" = {
              text: "Tirer la licorne",  
              action: goToChapter(mise_a_mort)
            },
            "La laisser partir" = {
                text: "Vous refuser de tirer mais votre maitre la tue",  
                action: goToChapter(la_part_du_maitre)
            }
        ]
    },
    mise_a_mort: {
        subtitle: 'Mise à mort',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        img: 'ete.png',
        options: [
            "Retour à la ville" = {
              text: "Retour à la ville",  
              action: goToChapter(marchandage)
            }
        ]
    },
    la_part_du_maitre: {
        subtitle: 'Mise à mort',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        img: 'ete.png',
        options: [
            "Retour à la ville" = {
              text: "Retour à la ville",  
              action: goToChapter(marchandage)
            }
        ]
    },
}

function goToChapter(nomChapitre){
    const chapter = chaptersObj[nomChapitre];
    console.log(chapter.subtitle);
    console.log(chapter.subtitle);
}