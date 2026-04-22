let IS_PROD = true;
const server = IS_PROD ?
    "https://vercel-backend-cb2x.onrender.com" :

    "http://localhost:8000"


export default server;