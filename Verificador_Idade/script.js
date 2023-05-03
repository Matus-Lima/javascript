function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - (fano.value)
       res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.src = '/imagens/Criança.png'
            }else if (idade < 21) {
                //Jovem
                
            }else if (idade < 50) {
                //adulto
                img.src = '/imagens/Homem 40 anos.png'
            }else {
                //Idoso
                img.src = '/imagens/Idoso 60 anos.png'
            }
       } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.src = '/imagens/Criança.png'
            }else if (idade < 21) {
                //Jovem
                img.src = '/imagens/Mulher de 18 anos.png'
            }else if (idade < 50) {
                //adulto
                img.src = '/imagens/Mulher 40 anos.png'
            }else {
                //Idoso
                img.src = '/imagens/Idosa de 60 anos.png'
            }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}
    