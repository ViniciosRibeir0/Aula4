document.querySelector('.calcular').addEventListener('click',()=>{
var n1=parseFloat(document.querySelector('.nota1').value )
var n2=parseFloat(document.querySelector('.nota2').value)
var n3=parseFloat(document.querySelector('.nota3').value)
var n4=parseFloat(document.querySelector('.nota4').value)




var Result= (n1+n2+n3+n4)/4
if(Result < 5){
    
    document.querySelector('.resultado').innerHTML=`A sua média é: ${Result}. <br> E você foi Reprovado! Sinto muito`

    
}else if(Result <7 ){
    document.querySelector('.resultado').innerHTML=`A sua média é: ${Result}. <br> E você esta de recuperação! Lamentavel`
}else {
    document.querySelector('.resultado').innerHTML=`A sua média é: ${Result}. <br> E você está Aprovado!! Parabéns!`
}


console.log(Result)


})