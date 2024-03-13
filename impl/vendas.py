from pymongo.database import Database
from pymongo.collection import Collection
from pymongo import DESCENDING, ASCENDING

class VendasMongoDB:
    def __init__(self, database: Database, collection: Collection) -> None:
        self.database = database
        self.collection = collection

    def insert(self, venda: dict):
        self.collection.insert_one(venda)

    def find(self, filtro: dict = None, projeção: dict = None, limite: int = 0):
        resultado = self.collection.find(filtro, projeção).limit(limite)
        return list(resultado)

    def size(self, filtro: dict = None):
        return self.collection.count_documents(filtro)

    def aggregate(self, campo: str):
        pipeline = [
            {"$group": {"_id": "$" + campo, "total": {"$sum": 1}}}
        ]
        resultado = self.collection.aggregate(pipeline)
        return list(resultado)
    
    def max(self, campo: str):
        pipeline = [
            {"$group": {"_id": None, "max_value": {"$max": "$" + campo}}}
        ]
        resultado = self.collection.aggregate(pipeline)
        max_value = next(resultado, {}).get("max_value")
        return max_value

    def avg(self, campo: str):
        resultado = self.collection.aggregate([{"$group": {"_id": None, "avg": {"$avg": "$" + campo}}}])
        return list(resultado)[0]['avg']

    def exists(self, campo: dict):
        resultado = self.collection.find_one({campo: {"$exists": True}})
        return resultado is not None

    def sort(self, campo: str, ascendente: bool = True):
        ordem = ASCENDING if ascendente else DESCENDING
        return list(self.collection.find().sort(campo, ordem))
    
    def update(self, filtro: dict, atualizacao: dict):
        self.collection.update_one(filtro, {"$set": atualizacao})