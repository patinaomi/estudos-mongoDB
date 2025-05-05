// Selecionar (ou criar) um banco
use nomeDoBanco

// Tem que armazenar dados neste banco, para ele ser definitivamente criado

// Criar coleção (não é obrigatório — pode ser criada ao inserir documento)
db.createCollection("nomeDaColecao")

// Inserir um documento
db.nomeDaColecao.insertOne({ nome: "Ana", idade: 25 })

// Inserir vários documentos
db.nomeDaColecao.insertMany([
  { nome: "João", idade: 30 },
  { nome: "Carla", idade: 22 }
])

// Buscar todos os documentos
db.nomeDaColecao.find()

// Buscar com filtro
db.nomeDaColecao.find({ idade: { $gt: 25 } })

// Buscar um único documento
db.nomeDaColecao.findOne({ nome: "Ana" })

// Atualizar um documento
db.nomeDaColecao.updateOne(
  { nome: "Ana" },
  { $set: { idade: 26 } }
)

// Deletar um documento
db.nomeDaColecao.deleteOne({ nome: "João" })

// Deletar todos os documentos com condição
db.nomeDaColecao.deleteMany({ idade: { $lt: 30 } })

// Listar coleções do banco
show collections

// Listar todos os bancos
show dbs

// Deletar database (tem que estar conectados ao db que será excluído)
db.dropDatabase()

// Excluir uma coleção
db.nomeDaColecao.drop()