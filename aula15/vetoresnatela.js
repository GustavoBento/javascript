let valores = [8, 1, 7, 5, 3]
console.log(`${valores}`)

/* for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem os valores ${valores[pos]} `) 
    let bus = valores.indexOf(1)  
    if (bus == -1) {
        console.log(`Número não encontrado.`)
    } else {
        
        console.log(`O valor está na posição ${bus}`)
    }    
}
