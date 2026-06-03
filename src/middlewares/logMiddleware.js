function avisarAcesso (req, res, next){
    console.log("Nova requisição recebida!");

    next()
};

module.exports = {
    avisarAcesso
}