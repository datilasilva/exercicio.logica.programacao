/*Node Studio Treinamentos - Lógica de Programação - Acessando Matrizes - imprima todos os números da matriz
por meio de console.log(matriz[linha][coluna]  em formato de TABELA de 3 colunas*/

    var matriz = [ 
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [10,11,12],
    ]
    var valores = '';
    for (var l = 0; l <= 3; l++) {
        for (var c = 0; c <= 2; c++) {
            if (c < 2) {
                valores += matriz[l][c] + "\t\t";
            }
            else {
                valores += matriz[l][c] + '\n';
            }
        }
    }
    console.log("Conteúdo (valores) da matriz:" + '\n' + valores)