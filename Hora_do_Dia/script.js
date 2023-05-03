function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 13
msg.innerHTML =  `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = '/imagens/sol.png'
    document.body.style.background = '#F2D649'
}else if (hora >= 12 && hora < 18) {   
     //Boa Tarde!
    img.src = '/imagens/tarde.png'
    document.body.style.background = '#5EBFBF'

}else {
    //Boa Noite!
    img.src = '/imagens/noite.png'
    document.body.style.background = '#283040'
}
}
