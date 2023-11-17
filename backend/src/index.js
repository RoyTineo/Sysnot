import app from "./app.js";

import { PORT } from "./config.js";

//Servidor corriendo
app.listen(PORT);
console.log("Servidor corriendo en el puerto", PORT);
