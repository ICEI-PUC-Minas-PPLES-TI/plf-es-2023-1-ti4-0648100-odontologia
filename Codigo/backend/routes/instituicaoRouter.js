const router = require("express").Router()
const instituicaoController = require("../controllers/instituicaoController")
const authenticationMiddleware = require("../middlewares/auth")

// CREATE Instituicao
router.route("/instituicao").post((req, res) => instituicaoController.create(req, res))

//! Middleware
//router.use(authenticationMiddleware)

// GET ALL Instituicao
router.route("/instituicao").get((req, res) => instituicaoController.getAll(req, res))

// GET Instituicao
router.route("/instituicao").get((req, res) => instituicaoController.get(req, res))

// DELETE Instituicao
router.route("/instituicao").delete((req, res) => instituicaoController.delete(req, res))

// UPDATE Instituicao
router.route("/instituicao").put((req, res) => instituicaoController.update(req, res))


module.exports = router;
