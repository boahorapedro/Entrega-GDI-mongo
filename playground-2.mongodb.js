use("mercado-db")

db.produtos.insertMany([
    { nome: "Arroz", preco: 5.99, categoria: "Grãos", descricao: "1kg de arroz", corredor: 1, area: ["Grãos e Cereais"] },
    { nome: "Feijão", preco: 4.50, categoria: "Grãos", descricao: "1kg de feijão", corredor: 2, area: ["Grãos e Cereais"] },
    { nome: "Leite", preco: 3.50, categoria: "Laticínios", descricao: "500 ml de leite", corredor: 3, area: ["Frios"] },
    { nome: "Maçã", preco: 2.99, categoria: "Frutas", descricao: "1 maçã", corredor: 4, area: ["Frutas e Verduras"] },
    { nome: "Pão", preco: 1.99, categoria: "Padaria", descricao: "3 unidades de pão", corredor: 5, area: ["Frios"] },
    { nome: "Biscoito", preco: 1.50, categoria: "Guloseimas", descricao: "um pacote de biscoito", corredor: 6, area: ["lanches"]},
    { nome: "Bolacha", preco: 2.00, categoria: "Guloseimas", descricao: "um pacote de bolacha", corredor: 6, area: ["lanches"]},
    { nome: "Barra de chocolate", preco: 5.00, categoria: "Guloseimas", descricao: "uma barra de chocolate 300 g", corredor: 6, area: ["lanches"]},
    { nome: "Detergente ", preco: 2.20, categoria: "Produtos de limpeza", descricao: "detergente de lavar louça", corredor: 7, area: ["Higiene"]},
    { nome: "Refrigerante", preco: 5.00, categoria: "Bebida gaseificada", descricao: "Garraga de 1 L", corredor: 7, area: ["Bebidas"]},
    { nome: "Bala Fini", preco: 1.25, categoria: "Doce", descricao: "Embalagem de 100g", corredor: 5, area: ["Lanches"]}



]);

db.areasEspecificas.insertMany([
    { nome: "Frios", descricao: "Local para produtos refrigerados", localizacao: "Setor Norte" },
    { nome: "Higiene", descricao: "Produtos de higiene pessoal", localizacao: "Setor Sul" },
    { nome: "Bebidas", descricao: "Variedade de bebidas alcoólicas e não alcoólicas", localizacao: "Setor Leste" },
    { nome: "Frutas e Verduras", descricao: "Produtos frescos e sazonais", localizacao: "Setor Oeste" },
    { nome: "Grãos e Cereais", descricao: "Diversidade de grãos e cereais", localizacao: "Setor Central" },
    { nome: "Padaria", descricao: "Padaria", localizacao: "Setor Central" },
    { nome: "Frutas e Verduras", descricao: "Produtos frescos e sazonais", localizacao: "Setor Oeste" },
    { nome: "Grãos e Cereais", descricao: "Diversidade de grãos e cereais", localizacao: "Setor Central" },
    { nome: "Padaria", descricao: "Padaria", localizacao: "Setor Central" },
    { nome: "Açougue", descricao: "Carnes do estabelecimento", localizacao: "Setor Norte" }, 
    { nome: "Lanches", descricao: "Guloseimas", localizacao: "Setor Leste" }
]);

db.vendas.insertMany([
    { produto: "Arroz", quantidade: 10, preco: 5.99, data: "2024-03-13", corredor: 1 },
    { produto: "Leite", quantidade: 5, preco: 3.50, data: "2024-03-13", corredor: 3 },
    { produto: "Maçã", quantidade: 8, preco: 2.99, data: "2024-03-13", corredor: 4 },
    { produto: "Pão", quantidade: 3, preco: 1.99, data: "2024-03-13", corredor: 5 },
    { produto: "Feijão", quantidade: 4, preco: 4.50, data: "2024-03-13", corredor: 2 },
    { produto: "Biscoito", quantidade: 6, preco: 1.50, data: "2024-03-14", corredor: 4 },
    { produto: "Bolacha", quantidade: 1, preco: 2.00, data: "2024-03-15", corredor: 18 },
    { produto: "barra de Chocolate", quantidade: 3, preco: 5.00, data: "2024-03-15", corredor: 17},
    { produto: "Bala Fini", quantidade: 5, preco: 1.25, data: "2024-03-15", corredor: 17 },
    { produto: "Detergente", quantidade: 10, preco: 2.20, data: "2024-02-15", corredor: 9 }

]);

db.corredores.insertMany([
    { codigo: 1, descricao: "Corredor de grãos", localizacao: "Ala Norte" },
    { codigo: 2, descricao: "Corredor de cereais", localizacao: "Ala Norte" },
    { codigo: 3, descricao: "Corredor de laticínios", localizacao: "Ala Leste" },
    { codigo: 4, descricao: "Corredor de frutas", localizacao: "Ala Oeste" },
    { codigo: 5, descricao: "Corredor de verduras", localizacao: "Ala Oeste" },
    { codigo: 6, descricao: "Corredor de pães e salgados", localizacao: "Ala Central" },
    { codigo: 7, descricao: "Corredor de higiene pessoal", localizacao: "Ala Sul" },
    { codigo: 8, descricao: "Corredor de material de casa", localizacao: "Ala Sul" },
    { codigo: 9, descricao: "Corredor de limpeza doméstica", localizacao: "Ala Sul" },
    { codigo: 10, descricao: "Corredor de carnes vermelhas", localizacao: "Ala Norte" },
    { codigo: 11, descricao: "Corredor de bebidas gaseificadas", localizacao: "Ala Sul" },
    { codigo: 12, descricao: "Corredor de bebidas alcoólicas", localizacao: "Ala Sul" },
    { codigo: 13, descricao: "Corredor de bebidas quentes", localizacao: "Ala Sul" },
    { codigo: 14, descricao: "Corredor de bolos e tortas", localizacao: "Ala Central" },
    { codigo: 15, descricao: "Corredor de carnes brancas", localizacao: "Ala Norte" },
    { codigo: 16, descricao: "Corredor de comidas prontas", localizacao: "Ala Leste" },
    { codigo: 17, descricao: "Corredor de doces", localizacao: "Ala Leste" },
    { codigo: 18, descricao: "Corredor de salgados", localizacao: "Ala Leste" }
]);

// Encontrar todos os produtos na categoria "Grãos"
db.produtos.find({ categoria: "Grãos" });

// Encontrar produtos que tenham pelo menos 5 itens em estoque
db.vendas.find({ "extras": { $size: 1 } });

// Agregar vendas por corredor e calcular o total de vendas em cada corredor
db.vendas.aggregate([
    { $group: { _id: "$corredor", totalVendas: { $sum: "$preco" } } }
]);
// Correspondência de vendas com preço superior a 3.00
db.vendas.find({ preco: { $gt: 3.00 } });

// Correspondência categoras de frutas
db.produtos.aggregate({ $match: { categoria: "Frutas" } });

// Projeto para retornar apenas o nome e preço do produto
db.produtos.aggregate([
    { $project: { nome: 1, preco: 1 } }
]);

// Encontrar produtos com preço maior ou igual a 5.00
db.produtos.find({ preco: { $gte: 5.00 } });

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
db.produtos.find().limit(2);

// Consultar produtos com preço maior que a média
var avgQuantity = db.vendas.aggregate([
    {
        $group: {
            _id: null,
            avgQuantity: { $avg: "$quantidade" }
        }
    }
]).toArray()[0].avgQuantity;

var vendasAcimaDaMedia = db.vendas.find({ quantidade: { $gt: avgQuantity } });
vendasAcimaDaMedia.forEach(function(venda) {
    printjson(venda);
});
// Retornar os documentos de produto de forma formatada
db.produtos.find().pretty();

// Encontrar produtos que pertencem a todas as categorias especificadas
db.produtos.find({ area: { $all: ["Grãos e Cereais", "Padaria"] } });

// Atualizar a localização de um corredor específico
db.corredores.updateOne({ codigo: 1 }, { $set: { localizacao: "Area Norte" } });

// Usar condicional para definir um campo com base em uma condição
db.vendas.aggregate([
    { $project: { status: { $cond: { if: { $gte: ["$quantidade", 5] }, then: "Em Estoque", else: "Baixo Estoque" } } } }
]);

// Encontrar o primeiro produto na categoria "Laticínios"
db.produtos.findOne({ categoria: "Laticínios" });

// // Adicionar um novo produto à lista de produtos vendidos
db.vendas.updateOne({ produto: "Arroz" }, { $addToSet: { extras: "Sal" } });

//Filtro de vendas
db.produtos.aggregate([
    {
        $match: { categoria: "Laticínios" } // Escolha a categoria desejada
    },
    {
        $project: {
            nome: 1,
            preco: 1,
            categoria: 1,
            area: {
                $filter: {
                    input: "$area", // Array de áreas específicas
                    as: "area",
                    cond: { $eq: ["$$area", "Frios"] } // Condição de filtro
                }
            }
        }
    }
]);

db.produtos.createIndex({ descricao: "text" });
db.produtos.find({ $text: { $search: "arroz" } });


// Renomear a coleção Venda para Vendas
//Descomentar para mudar o nome
// db.venda.renameCollection("vendas2");


