from pydantic import BaseModel

class Venda:
    produto: str
    quantidade: int
    preço: float
    data: str
    corredor: int