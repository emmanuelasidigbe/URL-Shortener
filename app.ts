import express, { Application } from "express";
import path from "path";
import urlRroute from "./routes/url_route";

const app: Application = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", urlRroute);

app.listen(PORT, () => {
  console.log(`sever running on port http://localhost:${PORT}`);
});
