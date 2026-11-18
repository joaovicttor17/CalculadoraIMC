import express from 'express';
import CalcularIMC from './calculo.js'

const app = express();
const PORTA = 3000;

app.use(express.static('public'))

app.listen(PORTA, () => {
    console.log(`Projeto rodando em https://localhost:${PORTA}`)
})

app.get('/imc', (req, res) => {
    const numeroDoFrontEnd = Number(req.query.valor)
    const resultado = CalcularIMC(numeroDoFrontEnd); 

    res.json({
        imc : resultado,
        numeroEnviado: numeroDoFrontEnd
    })

})

