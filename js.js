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
        img: 'ete.png'
    }
}

function goToChapter(nomChapitre){
    const chapter = chaptersObj[nomChapitre];
    console.log(chapter.subtitle);
    console.log(chapter.subtitle);
}