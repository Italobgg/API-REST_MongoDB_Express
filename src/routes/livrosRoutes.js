import express from "express";
import LivroCrontroller from "../controlles/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroCrontroller.listarLivros)
  .get("/livros/:id", LivroCrontroller.listarLivroPorId)
  .post("/livros", LivroCrontroller.cadastrarLivro)
  .put("/livros/:id", LivroCrontroller.atualizarLivro)
  .delete("/livros/:id", LivroCrontroller.excluirLivro)

export default router;
