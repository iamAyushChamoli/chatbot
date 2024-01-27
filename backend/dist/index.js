import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//connections
const PORT = process.env.REACT_APP_PORT;
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log("Server Open & Connected to Database"));
})
    .catch((err) => { console.log(err); });
//# sourceMappingURL=index.js.map