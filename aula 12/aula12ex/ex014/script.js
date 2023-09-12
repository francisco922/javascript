function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data= new Date()
var hora = data.getHours() 
var hora = 1
msg.innerHTML =`Agora saõ ${hora}horas.`
if (hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'foto_da_manha.jpg'
    document.body.style.background = '#E6BC4B'
} else if (hora >= 12 && hora < 18){
    // BOA TARDE!
    img.src = "foto da tarde.jpg"
    document.body.style.background='#CB5BF5'
} else {
    //BOA NOITE!
    img.src = "foto_da_noite.png"
    document.body.style.background='#CB5BF5'
    
}
  }



