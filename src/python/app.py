from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from chatbot import get_llm_resposne
from configurations import initialize_new_user
app = FastAPI()
# Setup CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allows all headers
)
@app.post("/chatbot")
async def main(file: UploadFile = File(...), text: str = Form(...), user_id: str = Form(...)):
    initialize_new_user(user_id)
    message = {
        "text": text,
        "file": file.filename  # Here you may want to handle the file
    }
    response = get_llm_resposne(message, user_id)
    return response