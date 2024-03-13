use("mercado-db")

// db.produtos.insertMany([
//     { nome: "Arroz", preco: 5.99, categoria: "Grãos", corredor: 1 },
//     { nome: "Feijão", preco: 4.50, categoria: "Grãos", corredor: 2 },
//     { nome: "Leite", preco: 3.50, categoria: "Laticínios", corredor: 3 },
//     { nome: "Maçã", preco: 2.99, categoria: "Frutas", corredor: 4 },
//     { nome: "Pão", preco: 1.99, categoria: "Padaria", corredor: 5 }
// ]);

// db.areasEspecificas.insertMany([
//     { nome: "Frios", descricao: "Local para produtos refrigerados", localizacao: "Setor Norte" },
//     { nome: "Higiene", descricao: "Produtos de higiene pessoal", localizacao: "Setor Sul" },
//     { nome: "Bebidas", descricao: "Variedade de bebidas alcoólicas e não alcoólicas", localizacao: "Setor Leste" },
//     { nome: "Frutas e Verduras", descricao: "Produtos frescos e sazonais", localizacao: "Setor Oeste" },
//     { nome: "Grãos e Cereais", descricao: "Diversidade de grãos e cereais", localizacao: "Setor Central" }
// ]);

// db.vendas.insertMany([
//     { produto: "Arroz", quantidade: 10, preco: 5.99, data: "2024-03-13", corredor: 1 },
//     { produto: "Leite", quantidade: 5, preco: 3.50, data: "2024-03-13", corredor: 3 },
//     { produto: "Maçã", quantidade: 8, preco: 2.99, data: "2024-03-13", corredor: 4 },
//     { produto: "Pão", quantidade: 3, preco: 1.99, data: "2024-03-13", corredor: 5 },
//     { produto: "Feijão", quantidade: 4, preco: 4.50, data: "2024-03-13", corredor: 2 }
// ]);

// db.corredores.insertMany([
//     { codigo: 1, descricao: "Corredor de grãos", localizacao: "Ala Norte" },
//     { codigo: 2, descricao: "Corredor de enlatados", localizacao: "Ala Sul" },
//     { codigo: 3, descricao: "Corredor de laticínios", localizacao: "Ala Leste" },
//     { codigo: 4, descricao: "Corredor de frutas", localizacao: "Ala Oeste" },
//     { codigo: 5, descricao: "Corredor de padaria", localizacao: "Ala Central" }
// ]);

// Encontrar todos os produtos na categoria "Grãos"
db.produtos.find({ categoria: "Grãos" });
// Encontrar produtos que tenham pelo menos 5 itens em estoque
db.vendas.find({ quantidade: { $size: 5 } });
// Agregar vendas por corredor e calcular o total de vendas em cada corredor
db.vendas.aggregate([
    { $group: { _id: "$corredor", totalVendas: { $sum: "$preco" } } }
]);
// Correspondência de vendas com preço superior a 3.00
db.vendas.find({ preco: { $gt: 3.00 } });
// Correspondência de vendas com preço superior a 3.00
db.vendas.find({ preco: { $gt: 3.00 } });
// Projeto para retornar apenas o nome e preço do produto
db.produtos.find({}, { nome: 1, preco: 1 });
// Encontrar produtos com preço maior ou igual a 5.00
db.produtos.find({ preco: { $gte: 5.00 } });
// Agrupar vendas por produto e calcular a quantidade total vendida para cada produto
db.vendas.aggregate([
    { $group: { _id: "$produto", totalQuantidade: { $sum: "$quantidade" } } }
]);
// Contar o número total de vendas
db.vendas.countDocuments();

// Encontrar o preço máximo de um produto
db.produtos.aggregate([{ $group: { _id: null, maxPrice: { $max: "$preco" } } }]);

// Calcular o preço médio dos produtos
db.produtos.aggregate([{ $group: { _id: null, avgPrice: { $avg: "$preco" } } }]);

// Verificar se um produto específico existe
db.produtos.find({ nome : { $exists: true } });

// Ordenar produtos por preço em ordem decrescente
db.produtos.find().sort({ preco: -1 });

// Limitar a consulta a 5 produtos
db.produtos.find().limit(5);

// Consultar produtos com preço menor que a média
db.produtos.find({ $where: "this.preco < (db.produtos.aggregate([{ $group: { _id: null, avgPrice: { $avg: '$preco' } } }]).toArray()[0].avgPrice)" });

// Utilizar MapReduce para calcular a soma total das vendas
// var map = function() { emit(this.produto, this.preco); };
// var reduce = function(key, values) { return Array.sum(values); };
// db.vendas.mapReduce(map, reduce, { out: "total_vendas" });

// Retornar os documentos de produto de forma formatada
db.produtos.find().pretty();

// Atualizar a localização de um corredor específico
db.corredores.updateOne({ codigo: 1 }, { $set: { localizacao: "Nova Localização" } });

// Usar condicional para definir um campo com base em uma condição
db.vendas.aggregate([
    { $project: { status: { $cond: { if: { $gte: ["$quantidade", 5] }, then: "Em Estoque", else: "Baixo Estoque" } } } }
]);

// Encontrar o primeiro produto na categoria "Laticínios"
db.produtos.findOne({ categoria: "Laticínios" });

// Adicionar um novo produto à lista de produtos vendidos
db.vendas.updateOne({ produto: "Arroz" }, { $addToSet: { extras: "Sal" } });


