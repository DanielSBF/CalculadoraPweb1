let somar = (a,b) => a+=b; 

let subtrair = (a,b) => a-b;

let multiplicar = (a,b) => a*b;

let dividir = (a,b) => {
    if(b==0){
        alert("Divisão por zero não permitida!");
        return NaN
    }
    return a/b;
}
let calcular = (operacao, a, b) => {
    return operacao(a,b)
}

let executarCalculo = () => {
    let valor1 = parseFloat(document.getElementById("Inputvalor1").value);
    let valor2 = parseFloat(document.getElementById("Inputvalor2").value);
    let operador = (document.getElementById("Inputoperador").value);

    let resultado;

    switch(operador){
        case '1':
            resultado = calcular(somar, valor1, valor2)
            break
        case '2':
            resultado = calcular(multiplicar, valor1, valor2)
            break
        case '3':
            resultado = calcular(subtrair, valor1, valor2)
            break
        case '4':
            resultado = calcular(dividir, valor1, valor2)
            break
        
        default:
            return
    }

    document.getElementById('resultado').textContent = resultado

}


