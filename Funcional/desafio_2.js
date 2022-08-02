const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtd: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtd: 4, preco: 27.10 , fragil: false},
    {nome: 'Lapis', qtd: 3, preco: 5.82 , fragil: false},
    {nome: 'Tesoura', qtd: 1, preco: 19.20 , fragil: true},
]


//filter,map,reduce

// 1. fragil =  true;
 
// 2. qtd * preco -> total;
// 3. media totais

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtd * item.preco)
    .reduce((acc, el) => {
        const novaQtd = acc.qtd + 1
        const novoTotal = acc.total + el
        return {
            qtd: novaQtd,
            total: novoTotal,
            media: novoTotal / novaQtd
        }
    }, {qtd: 0, total: 0, media: 0})

    console.log(media)