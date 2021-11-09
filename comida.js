const comida = (prato, tempo) => {
    const resultado = () => {
        if (tempo >= 2*t && tempo < 3*t) {
            console.log("Sua comida queimou :(")
        } else if (tempo >= t && tempo < 2*t) {
            console.log("Prato pronto, bom apetite!!!")
        } else if (tempo < t) {
            console.log("Tempo insuficiente")
        } else if (tempo >= 3*t) {
            console.log("kabumm")
        }
    }
    if (prato == "Pipoca") {
        t = 10
        resultado()
    } else if (prato == "Macarrão") {
        t = 8
        resultado()
    } else if (prato == "Carne") {
        t = 15
        resultado()
    } else if (prato == "Feijão") {
        t = 12
        resultado()
    } else if (prato == "Brigadeiro") {
        t = 8
        resultado()
    } else {
        console.log("Prato inexistente")
    }
}
