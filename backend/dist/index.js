import express from 'express';
const app = express();
//middlewares
app.use(express.json());
//connections
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map