const conexao = require('../config/conexaoBD')

exports.listar = (req, res) => {
    const sql = "SELECT * FROM produto";

    conexao.query(sql, (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.json(rows)
        }
    })
}

exports.inserir = (req, res) => {
    const produto = JSON.stringify(req.body);
    res.status(201).send(`Inserir Produto ${produto}`)
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