import express from "express";
import AutorCrontroller from "../controlles/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorCrontroller.listarAutores)
  .get("/autores/:id", AutorCrontroller.listarAutorPorId)
  .post("/autores", AutorCrontroller.cadastrarAutor)
  .put("/autores/:id", AutorCrontroller.atualizarAutor)
  .delete("/autores/:id", AutorCrontroller.excluirAutor)

export default router;