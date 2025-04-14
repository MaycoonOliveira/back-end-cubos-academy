const bancodedados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,

    instrutores: [
        {
            id: 1,
            nome: 'Guilherme',
            email: 'guilherme@gmail.com',
            status: true
        },
        {
            id: 2,
            nome: 'Daniel',
            email: 'danielme@gmail.com',
            status: true
        }
        
    ],
    aulas: [
        {
            id: 1,
            instrutorId: 1,
            titulo: 'Introdução ao JavaScript',
            descricao: 'Aprenda os conceitos básicos do JavaScript, a linguagem de programação mais popular para desenvolvimento web.',
        }
    ]
}


module.exports = bancodedados;