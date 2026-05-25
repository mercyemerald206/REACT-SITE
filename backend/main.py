from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import random
import asyncio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health():
    return {"status": "electrical-ai-digital-twin-online"}

@app.websocket("/ws/grid")
async def grid_stream(websocket: WebSocket):
    await websocket.accept()

    while True:
        data = {
            "nodes": [
                {"id": 1, "load": random.randint(40, 100)},
                {"id": 2, "load": random.randint(30, 90)},
                {"id": 3, "load": random.randint(20, 80)}
            ],
            "fault_probability": round(random.random(), 3),
            "grid_stability": round(random.uniform(0.7, 1.0), 3)
        }

        await websocket.send_json(data)
        await asyncio.sleep(1)
