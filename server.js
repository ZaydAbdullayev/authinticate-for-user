import Express from "express";
import cors from "cors";
import rt from "./router.js";
const app = Express();
const port = 5000;
app.use(cors());
app.use(Express.json());
app.use(rt);

app.listen(port, () => console.log(`Server running on port ${port}`));
