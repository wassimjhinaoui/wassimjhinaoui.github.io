function GenererCaptcha() {
    ch = ""
    for (let i = 0; i < 10; i++) {
        k = Math.floor(Math.random() * 26)+1; 
        if (k%2 == 0) {
            ch += String.fromCharCode(k+96)
        }else{
            ch += String.fromCharCode(k+64)
        }
        
    }
    document.getElementById('captcha').value = ch
}
function verif() {
    hot = document.getElementById('hotel');
    accueil = document.getElementsByName('accueil');
    restauration = document.getElementsByName('restauration');
    extra = document.getElementsByName('extra');
    captcha = document.getElementById('captcha').value;
    rcaptcha = document.getElementById('rcaptcha').value;
    
    if (hot.selectedIndex < 1) {
        alert('vous devez selectionner un hotel');
        hot.focus;
        return
    }
    ok = false;
    saccueil = 0;
    console.log(accueil)
    accueil.forEach(btn => {
        if (btn.checked) {
            ok = true;
            saccueil += Number(btn.value);
        }
    });
    if (ok == false) {
        alert("vous devez selectionner l'accueil");
        accueil.focus;
        return
    }
    ok = false;
    srestauration = 0;
    restauration.forEach(btn => {
        if (btn.checked) {
            ok = true;
            srestauration += Number(btn.value);
        }
    });
    if (!ok) {
        alert("vous devez selectionner la restauration");
        restauration.focus;
        return
    }
    s = 0
    console.log(captcha);
    for (let i = 0; i < captcha.length; i++) {
        const lettre = captcha[i];
        if (lettre.toUpperCase() == lettre) {
            s ++
        }
    }
    if (isNaN(rcaptcha)) {
        alert("votre reponse devez etre un nombre");
        rcaptcha.focus;
        return
    }
    if (s != Number(rcaptcha) ) {
        alert("votre reponse est unjuste");
        rcaptcha.focus;
        return
    }
    
    sextra = 0;
    extra.forEach(btn => {
        if (btn.checked) {
            sextra += Number(btn.value);
        }
    });
    
    alert(saccueil + srestauration + sextra)
}