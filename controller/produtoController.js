
exports.listar = (req, res) => {
    res.send('Listar Produtos')
}

exports.inserir = (req, res) => {
    res.send('Inserir Produto')
}

exports.buscarPorId = (req, res) => {
    res.send(`Buscar Produto ${req.params.id}`)
}

exports.atualizar = (req, res) => {
    res.send(`Atualizar Produto ${req.params.id}`)
}

exports.deletar = (req, res) => {
    res.send(`Deletar Produto ${req.params.id}`)
}