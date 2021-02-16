export const TRANSLATIONS = {
    data () {
        return {
            
            lang: "french"
        }
    },
    fr: {
        /* Accueil */
        Technologies: "Technologies web",
       
        /*  profile */
        Contact: "À propos de moi",
        Langages: "Langages de programmation",
        Etudes: "Études réalisées",
        Experience: " Expériences professionnelles",
        Cont: "Me joindre",
        
        /*  menu */
        Home: "Accueil",
        contact: "Contact",
        Proy: "Projets",
         
        /*  projects */
        Projets: "MES PROJETS",
        
        /*  contact */
        Titre: "Contact-me",
        Prenom: "Prénom",
        Nom: "Nom",
        Courriel: "Courriel",
        Categorie: "Catégorie",
        Soumettre: "Soumettre",
        
       
    },
    en: {
        /* Accueil" */
        Technologies: "Web technologies",
          /*  profile */
       
        Contact: "About me",
        Langages: "Programming languages",
        Etudes: "Education ",
        Experience: " Work experience",
        Cont: "Contact me",
       
        /*  menu */
        Home: "Home",
        contact: "Contact",
        Proy: "Projects",
        
        /*  projets */
        Projets: "MY PROJECTS",

        /*  contact */
        Titre: "Contact",
        Prenom: "First Name",
        Nom: "Last Name",
        Courriel: "E-mail",
        Categorie: "Category",
        Soumettre: "Submit",
        
    },
    filters: {

        
        traduire: function (value, lang) {

            

            if (lang === 'anglais') {


                let keys = Object.keys(TRANSLATIONS.fr);
                for (let i = 0; i < keys.length; i++) {
                    if (keys[i] === value) {
                        return TRANSLATIONS.fr[value]
                    }
                }
            }

            

             else if (lang === 'french') {
                 let keys = Object.keys(TRANSLATIONS.en);
                 for (let i =0;i < keys.length;i++){
                     if (keys[i] === value) {
                         return TRANSLATIONS.en[value]
                     }

                }
            }
        },
    }
};