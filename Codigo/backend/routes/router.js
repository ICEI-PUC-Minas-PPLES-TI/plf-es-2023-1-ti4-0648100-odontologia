const router = require("express").Router()

const authenticationMiddleware = require("../middlewares/auth")

// Dentista router
const dentistaRouter = require("./dentistaRouter")

// Paciente router
const pacienteRouter = require("./pacienteRouter")

// Instituição router
const instituicaoRouter = require("./instituicaoRouter")

// Condição router
const condicaoRouter = require("./condicaoRouter")

// Login router
const loginRouter = require("./loginRouter")

//! Rotas publicas
router.use("/", loginRouter)

//! Middleware
router.use(authenticationMiddleware)

//! Rotas privadas
router.use("/", dentistaRouter)
router.use("/", pacienteRouter)
router.use("/", instituicaoRouter)
router.use("/", condicaoRouter)

module.exports = router
