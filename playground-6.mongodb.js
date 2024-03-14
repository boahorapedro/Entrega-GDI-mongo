use("mercado-db")

// Utilizar MapReduce para calcular a soma total das vendas
// Mapear função
var mapFunction = function() {
    emit(this.produto, this.preco);
};

// Função de redução
var reduceFunction = function(key, values) {
    return Array.sum(values);
};

// Executar MapReduce
db.Venda.mapReduce(mapFunction, reduceFunction, { out: "total_vendas" });

