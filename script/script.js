function Temas(){
    document.body.classList.toggle('light');
}

function Nota(){
    let nota1 = prompt("Qual a sua nota para o visual do Site?");

    if (nota1 >= 0 && nota1 <= 5){
        alert("D: Depois me diga o que melhorar!");

    }else if(nota1 >=6 && nota1 <= 8){
        alert("Fico feliz que gostou!");

    }else if(nota1 >= 9 && nota1 <= 10){
        alert("Sackboy ficou muito feliz com sua resposta")

    }else{
        alert("Coloqueu um número em uma escala de 0 até 10! Esqueci de mencionar este detalhe!")
    }
}