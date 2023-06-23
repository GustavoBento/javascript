function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var res = document.getElementById('res')
    var pas = document.getElementById('txtpas')
    res.innerHTML = 'Contando: <br>'
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
        //window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }       
        res.innerHTML += `\u{1F3C1}` 
    }
    
}