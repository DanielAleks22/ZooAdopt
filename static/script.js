function submitQuery () {
	let form = document.getElementById("rechercheanimal");
    form.submit();
}

function submitPageRespective () {
	let form = document.getElementByClass("creerpageanimal");
    form.submit();
}

function champVide(id) {
    let champ = document.getElementById(id).value;
    console.log(id);
    return champ == null || champ.length < 1;
}


function contientVirgule(id) {
    let champ = document.getElementById(id).value;
    if (champ.includes(",")) {
        console.log("ERREUR VIRGULE!");
    	console.log(id);
        return true;
    }
    
    return false;
}

function verifieNomAnimal() {
    let nom = document.getElementById("nomanimal").value;
    console.log(nom.length);

    if (3 <= nom.length && nom.length <= 20) {
        return true;
    }

	console.log("ERREUR NOM!");
    return false;
}

function verifieAgeAnimal() {
	let age = document.getElementById("ageanimal").value;
	
	if (/^[0-9]+$/.test(age)) {
		
		let ageInt = parseInt(age);
		if (0 <= ageInt && ageInt <= 30) {
			return true;
		}
	}
	

	console.log("ERREUR AGE!");
	return false;
}

function verifieCourriel() {
	let courriel = document.getElementById("email").value;
	
	if ( /\S+@\S+\.\S+/.test(courriel) ) {
		return true;
	}
	
	console.log("ERREUR COURRIEL!");
	return false;
}

function verifieCodePostal() {
	let cp = document.getElementById("codepostal").value;

	
	if ( /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(cp) ) {
		return true;
	}
	
	console.log("ERREUR CODE POSTAL!");
	return false;
}

function formulaireNestPasVide() {

    if(champVide("nomanimal")) {
        let erreurN = document.getElementById("erreurnom");
        erreurN.innerHTML = "Le champ content le nom de l'animal est vide!";
        return false;
    } else if (champVide("especeanimal")) {
        let erreurE= document.getElementById("erreurespece");
        erreurE.innerHTML = "Le champ content l'espece de l'animal est vide!"; 
        return false;
    } else if(champVide("raceanimal")) {
        let erreurR = document.getElementById("erreurrace");
        erreurR.innerHTML = "Le champ content la race de l'animal est vide!";
        return false;
    } else if(champVide("ageanimal")) {
        let erreurA = document.getElementById("erreurage");
        erreurA.innerHTML = "Le champ content l'age de l'animal est vide!"; 
        return false;
    } else if(champVide("descriptionanimal")) {
        let erreurD = document.getElementById("erreurdescription");
        erreurD.innerHTML = "Le champ content la description de l'animal est vide!"; 
        return false;
    } else if(champVide("email")) {
        let erreurC = document.getElementById("erreuremail");
        erreurC.innerHTML = "Le champ content le courriel a contacter est vide!"; 
        return false;
    } else if(champVide("adressecivique")) {
        let erreurAD = document.getElementById("erreuradresse");
        erreurAD.innerHTML = "Le champ content l'adresse civique de l'animal est vide!"; 
        return false;
    } else if(champVide("ville")) {
        let erreurV = document.getElementById("erreurville");
        erreurV.innerHTML = "Le champ content le nom de la ville est vide!"; 
        return false;
    } else if(champVide("codepostal")) {
        let erreurCP = document.getElementById("erreurcp");
        erreurCP.innerHTML = "Le champ content le code postal est vide!"; 
        return false;
    } 

    return true;
}

function formulaireContientPasVirgule() {

	if(contientVirgule("nomanimal")) {
        let erreurNV = document.getElementById("erreurnom");
        erreurNV.innerHTML = "Le champ contenant le nom de l'animal contient une virgule!";
        return false;   
    } else if(contientVirgule("especeanimal")) {
        let erreurEV = document.getElementById("erreurespece");
        erreurEV.innerHTML = "Le champ contenant l'espece de l'animal contient une virgule!";
        return false;    
    } else if(contientVirgule("raceanimal")) {
        let erreurRV = document.getElementById("erreurrace");
        erreurRV.innerHTML = "Le champ contenant la race de l'animal contient une virgule!";
        return false;
    } else if(contientVirgule("ageanimal")) {
        let erreurAV = document.getElementById("erreurage");
        erreurAV.innerHTML = "Le champ contenant l'age de l'animal contient une virgule!";
        return false;
    } else if(contientVirgule("descriptionanimal")) {
        let erreurDV = document.getElementById("erreurdescription");
        erreurDV.innerHTML = "Le champ contenant la description de l'animal contient une virgule!";
        return false;
    } else if(contientVirgule("email")) {
        let erreurCV = document.getElementById("erreuremail");
        erreurCV.innerHTML = "Le champ contenant le courriel de contact contient une virgule!";
        return false;
    } else if(contientVirgule("adressecivique")) {
        let erreurAddr = document.getElementById("erreuradresse");
        erreurAddr.innerHTML = "Le champ contenant l'adresse civique contient une virgule!";
        return false;
    } else if(contientVirgule("ville")) {
        let erreurVV = document.getElementById("erreurville");
        erreurVV.innerHTML = "Le champ contenant le nom de la ville contient une virgule!";
        return false;
    } else if(contientVirgule("codepostal")) {
        let erreurPV = document.getElementById("erreurcp");
        erreurPV.innerHTML = "Le champ contenant le code postal contient une virgule!";
        return false;
    }
    
    return true;
}

function validationChamp() {

	if (!(verifieNomAnimal())) {
		let erreurCharNom = document.getElementById("erreurnom");
        erreurCharNom.innerHTML = "La taille du nom de l'animal devrait etre entre 3 et 20 caracteres.";
        return false;
	} else if (!(verifieAgeAnimal())) {
		let erreurAge = document.getElementById("erreurage");
        erreurAge.innerHTML = "L'age de l'animal devrait se situer entre 0 et 30 ans.";
        return false;
	} else if (!(verifieCourriel())) {
		let erreurCourriel = document.getElementById("erreuremail");
        erreurCourriel.innerHTML = "Le format du couriel n'est pas accepter (format accepter: chaine@chaine.chaine)";
        return false;
	} else if (!(verifieCodePostal())) {
		let erreurCodeP = document.getElementById("erreurcp");
        erreurCodeP.innerHTML = "Format du code postal n'est pas repsecter (format accepter: A1A2B2 ou A1A 2B2 ou A1A-2B2.";
        return false;
	}
	
	return true;
}

function validation() {
    // Si le formulaire est valide, submit(), sinon afficher msg err.
    if ((formulaireNestPasVide() && formulaireContientPasVirgule()) && validationChamp()) {
        let form = document.getElementById("adoptionform");
        form.submit();
    }
}
