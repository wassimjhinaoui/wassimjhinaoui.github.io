function GenererOperation() {
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    op = ["+","-","*"]
    i = Math.floor(Math.random() * 3);
    operation = x+op[i]+y+"=";
    document.getElementById('operation').innerHTML= operation;
}
function verif() {
    reponse = document.getElementById('reponse').value;
    x = document.getElementById('operation').innerHTML;
    resultat = eval(x.slice(0,x.length-1))
    if (reponse!= resultat) {
        alert('Votre reponse est fausse,try again')
        return
    }
}