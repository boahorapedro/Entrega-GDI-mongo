from pydantic import BaseModel

class Produto(BaseModel):
    nome: str
    preco: float
    categoria: str
    descrição: str