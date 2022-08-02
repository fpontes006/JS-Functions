function esperaPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve()
        },tempo)
    })
}

esperaPor()
    .then(() => esperaPor())
    .then(esperaPor)