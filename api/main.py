from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from algo import Carafe, Noeud

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get('/{x}/{y}/{but}')
def routing(x: int, y: int, but: int):
    carafe = Carafe(x, y, but)
    chemin: list[Noeud] = carafe.proceder()
    res: list[dict[str, int]] = []
    for item in chemin:
        res.append(item.toDict())
    return res
