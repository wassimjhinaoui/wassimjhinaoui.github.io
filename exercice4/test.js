function GenererCaptcha() {
    ch = ""
    for (let i = 0; i < 10; i++) {
        k = Math.floor(Math.random() * 26)+1; 
        if (k%2 == 0  && (i+1)%2==1) {
            ch += String.fromCharCode(k+96)
        }else if (k%2 == 1 && (i+1)%2==1) {
            ch += String.fromCharCode(k+64)
        }else if ((i+1)%2==0) {
            ch +=k%10
        }
        
    }
    document.getElementById('captcha').innerHTML = ch
}
function verif() {
    nom = document.getElementById('nom').value.trim();
    prenom = document.getElementById('prenom').value.trim();
    login = document.getElementById('login').value.trim();
    mdp = document.getElementById('mdp').value;
    imei = document.getElementById('imei').value;
    sim = document.getElementById('sim').value;
    vehicules = document.getElementsByName('vehicule');
    compteur = document.getElementById('compteur').value;
    abonnements = document.getElementsByName('abonnement');
    captcha = document.getElementById('captcha').innerHTML;
    reponse = document.getElementById('reponse').value;
    if (nom.length<4 || !nom.match(/^[A-Za-z]+$/)) {
        alert('votre nom devez contenir au moins 4 charactere')
        return
    }
    if (prenom.length<4 || !prenom.match(/^[A-Za-z]+$/)) {
        alert('votre prenom devez contenir au moins 4 charactere')
        return
    }
    if (login.length<6 || !login.match(/^[A-Za-z0-9]+$/)) {
        alert('votre login devez contenir au moins 6 charactere et chiffre')
        return
    }
    if (mdp.length<8 || !mdp.match(/^[A-Za-z]+$/)) {
        alert('votre mot de passe devez contenir au moins 8 charactere')
        return
    }
    if (imei.length != 15 || !imei.match(/^[0-9]+$/)) {
        alert('votre imei devez contenir 15 entiers')
        return
    }
    if (sim.length != 11 || !sim.match(/^[0-9]+$/)) {
        alert('votre sim devez contenir 11 entiers')
        return
    }
    ok = false
    vehicules.forEach(vehicule => {
        if (vehicule.checked) {
            ok = true
        }
    });
    if (!ok) {
        alert('vous devez selectionner une vehicule')
        return
    }
    if (isNaN(compteur) || Number(compteur)<0) {
        alert('votre compteur devez contenir un nombre positif')
        return
    }
    ok = false
    abonnements.forEach(abonnement => {
        if (abonnement.checked) {
            ok = true
        }
    });
    if (!ok) {
        alert('vous devez selectionner une abonnement')
        return
    }
    rep = ""
    for (let i = 0; i < captcha.length; i++) {
        const lettre = captcha[i];
        if (!isNaN(lettre)) {
            rep += lettre
        }
    }
    if (!(rep == reponse)) {
        alert('votre reponse de captcha est incorrecte')
        return
    }
    
}