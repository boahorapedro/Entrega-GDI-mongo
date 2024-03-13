from pymongo import MongoClient, errors
from cli.config import env
from logging import INFO, WARNING, getLogger, Formatter, StreamHandler
from impl.produto import ProdutoMongoDB
from models.produto import Produto 

logger = getLogger('projeto-mongo')

class Main:
    def __init__(self) -> None:
        self.db = None
        self.connect()

    def connect(self):
        try:
            client = MongoClient(env.DB_LINK)

            logger.setLevel(INFO)
            self.db = client[env.DB_NAME]
            
            print("--------------------")
            logger.info("Conectado ao MongoDB!")
            logger.info(f"Server Version: {client.server_info()['version']}")
            print("--------------------")

        except errors.ServerSelectionTimeoutError as err:
            logger.setLevel(WARNING)
            logger.warning(f"MongoDB connection error! {err}")

    def main(self):
        produto_mongodb = ProdutoMongoDB(self.db, self.db["produto"])
        # produto = Produto(nome="Maçã", preco=5.50, categoria="Frutas", descrição="Maçãs frescas colhidas localmente.").model_dump()

        # produto_mongodb.insert(produto)
        produtos_encontrados = produto_mongodb.find({"categoria": "Frutas"})

        numero_produtos = produto_mongodb.size({"preco": {"$gte": 5}})

        resultado_agregação = produto_mongodb.aggregate("categoria")

        print(produto_mongodb.max("preco"))
        print(produto_mongodb.avg("preco"))
        print(produto_mongodb.exists('nome'))
        print(produto_mongodb.sort('nome'))
        print(produtos_encontrados)
        print(numero_produtos)
        print(resultado_agregação)
        
        filtro = {"nome": "Maçã"}
        atualizacao = {"preco": 3.00}
        produto_mongodb.update(filtro, atualizacao)

if __name__ == "__main__":
    formatter = Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    stream_handler = StreamHandler()
    stream_handler.setLevel(INFO)
    stream_handler.setFormatter(formatter)
    logger.addHandler(stream_handler)

    Main().main()