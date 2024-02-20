import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//connections and listeneres
const PORT = process.env.REACT_APP_PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open & Connected To Database 🤟"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map