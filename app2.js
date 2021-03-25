function bgc() {
    sum = Number(document.getElementById('r').value) + Number(document.getElementById('g').value) +Number(document.getElementById('b').value); 
    if (sum > 381) {
        document.body.style = "background-color:black;"
    }else{
        document.body.style = "background-color:white;"
    
    }
}
function change() {
    document.getElementById('col').style = "background-color : rgb("+document.getElementById('r').value+","+document.getElementById('g').value+","+document.getElementById('b').value+");";
    document.getElementById('rl').innerHTML = document.getElementById('r').value; 
    document.getElementById('gl').innerHTML = document.getElementById('g').value; 
    document.getElementById('bl').innerHTML = document.getElementById('b').value;
    bgc() 
}
function rand() {
    r = Math.floor(Math.random() * 256)+1; 
    g = Math.floor(Math.random() * 256)+1; 
    b = Math.floor(Math.random() * 256)+1;
    document.getElementById('r').value = r; 
    document.getElementById('g').value = g; 
    document.getElementById('b').value = b; 
    document.getElementById('rl').innerHTML = document.getElementById('r').value; 
    document.getElementById('gl').innerHTML = document.getElementById('g').value; 
    document.getElementById('bl').innerHTML = document.getElementById('b').value; 
    document.getElementById('col').style = "background-color : rgb("+r+","+g+","+b+");";
    bgc()
    console.log(
        Number(document.getElementById('r').value) + Number(document.getElementById('g').value) +Number(document.getElementById('b').value)
    );
}