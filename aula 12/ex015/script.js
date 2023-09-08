function verificar() {
  var data = new Date() 
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number (fano.value) > ano) { window.alert(' [ERRO]verifique os dados e tente novamente!')
}else {
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
  var genero =''
  var img = document.createElement('img')
  img.setAttribute('id','foto')

  if (fsex[0].checked) {
   genero = 'HOMEM'
   if (idade >=0 && idade < 10) {
    //CRIANÇA
    img.setAttribute('src','foto bebezino.jpg')
   } else if (idade  < 21) {
    //jovem
    img.setAttribute('src','foto rapaz.jpg')
 }  else if (idade < 50) {
  //ADULTO
  img.setAttribute('src','foto homem.jpg')
   } else {
    //IDOSO
    img.setAttribute('src','foto idoso.jpg')
   }
   

   } else if (fsex[1].checked){
    genero = 'MULHER'
    if (idade >=0 && idade < 10){
      //CRIANÇA
      img.setAttribute('src', 'foto bebezinha.jpg')
    } else if (idade < 21){
      //JOVEM
      img.setAttribute('src','foto menina.jpg')
    } else if (idade < 50){
      //ADULTA
      img.setAttribute('src','foto mulher.jpg')
    } else {
      //IDOSA
      img.setAttribute('src','foto de idosa.jpg')
    }
   }
    res.innerHTML = `Dtectamos ${genero} com ${idade}anos`
    res.appendChild(img)
  }
}
