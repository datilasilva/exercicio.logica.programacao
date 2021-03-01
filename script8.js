/*Node Studio Treinamentos - Lógica de Programação - Acessando Matrizes - imprima todos os números da matriz
por meio de console.log(matriz[linha][coluna]*/

    var matriz = [ 
        [1,2],
        [4,5],
        [7,8] 
    ]
    var valores = '';
    for (var l = 0; l <= 2; l++) {
        for (var c = 0; c <= 1; c++) {
            valores += matriz[l][c] + '\n';
        }
    }
    console.log("Conteúdo (valores) da matriz:" + '\n' + valores)