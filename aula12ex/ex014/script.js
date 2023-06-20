function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = "manha.png"
        document.body.style.background = '#e2cd9f'
    }  

     if (hora >= 12 && hora < 18) {
        img.src = "tarde.png"
        document.body.style.background = '#b9846f'
    }  
    if (hora >= 18 && hora < 24) {
        img.src = "noite.png"
        document.body.style.background = '#515154'
    }  
    
     
        
    
}