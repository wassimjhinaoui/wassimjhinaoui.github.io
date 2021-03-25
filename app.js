function changeD() {
    document.getElementById('img').width = document.getElementById('dim').value;
}
function changeB() {
    document.getElementById('img').border = document.getElementById('bord').value;
}
function changeC() {
    document.getElementById('img').style.borderColor = document.getElementById('bordure').value;
    // console.log(
        // );
    }
document.onload = () => {

    document.getElementById('img').onclick = ()=>{
        console.log('hello world');
    }
}