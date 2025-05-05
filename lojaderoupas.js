// Patricia Naomi Yamagishi
// RM552981
// Exercício: Criar 1 Database, 4 Collections e 5 documentos por Collections
// Para executar : mongosh < lojaderoupas.js

// Pra criar um database
use lojaderoupas

// Aqui criamos uma coleção
db.createCollection("categorias")

//insertOne - pra inserir um documento por vez
db.categorias.insertOne({
	"nome" : "Blusa"
})
db.categorias.insertOne({
	"nome" : "Calça"
})
db.categorias.insertOne({
	"nome" : "Macacão"
})
db.categorias.insertOne({
	"nome" : "Saia"
})
db.categorias.insertOne({
	"nome" : "Casaco"
})

// também dá para já criar uma collection já inserindo os dados
db.medidas.insertOne({
	"tamanho" : "PP",
	"descricao" : "Corresponde ao manequim 34"
})
db.medidas.insertOne({
	"tamanho" : "P",
	"descricao" : "Corresponde ao manequim 36-38"
})
db.medidas.insertOne({
	"tamanho" : "M",
	"descricao" : "Corresponde ao manequim 40"
})
db.medidas.insertOne({
	"tamanho" : "G",
	"descricao" : "Corresponde ao manequim 42"
})
db.medidas.insertOne({
	"tamanho" : "GG",
	"descricao" : "Corresponde ao manequim 44"
})

//insertMany - pra inserir vários documentos de uma vez
db.fornecedores.insertMany([
	{
		"nome" : "Mileny Confecções",
		"endereco" : "Av. Vautier 989",
		"pix" : "11123456789"
	},
	{
		"nome" : "Cintia Modas",
		"endereco" : "Rua Julio Ribeiro 856",
		"complemento" : "Loja 2",
		"pix" : "cintiamodas@gmail.com"
	},
	{
		"nome" : "Brithamel Confecções",
		"endereco" : "Rua Alegria",
		"documento" : "389483945"
	},
	{
		"nome" : "IMFA Jeans",
		"endereco" : "Rua Oriente 543" 
	},
	{
		"nome" : "Kaliê Fashion",
		"endereco" : "Rua Miller 673",
		"complemento" : "Banca 5"
	}
])

// criação da 4 collection
db.produtos.insertMany([
	{
		"produto" : "Blusa Cropped",
		"cor" : "Amarelo",
		"tamanho" : "P",
		"quantidade" : 4,
		"preco" : 29.99
	},
	{
		"produto" : "Calça Flare",
		"cor" : "Azul Claro",
		"tamanho" : "M",
		"quantidade" : 5,
		"preco" : 89.99
	},
	{
		"produto" : "Saia Cargo",
		"cor" : "Khaki",
		"tamanho" : "G",
		"quantidade" : 4,
		"preco" : 29.99
	},
	{
		"produto" : "Casaco Oversized",
		"cor" : "Verde Militar",
		"tamanho" : "G",
		"quantidade" : 2,
		"preco" : 119.99
	},
	{
		"produto" : "Shorts Alfaiataria",
		"cor" : "Bege",
		"tamanho" : "M",
		"quantidade" : 8,
		"preco" : 129.99
	}
		
])