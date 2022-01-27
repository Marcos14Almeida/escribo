displayTask();

function displayTask(){
 var input = prompt("A função a seguir recebe um número inteiro positivo e retorna um somatório de todos os valores inteiros divisíveis por 3 ou 5 e que sejam inferiores ao número digitado.\n\nDigite um número: ");

 //Enquanto não digitar um input correto, ou seja, um valor numérico e maior que 0, mostra que houve erro.
 while (input !== parseInt(input, 10).toString() || input<=0) {
    alert("Você não digitou um número válido!!!");
    input = prompt("Digite um número maior que 0: ");
 }

 //print Resultado final
 alert(calculate(input));

 //TENTAR DE NOVO
 let isExecuted = confirm("Deseja tentar de novo?");
 if(isExecuted){
    displayTask();
 }
}


//Função que faz o cálculo das somas
function calculate(inputNumber){
    let sum = 0;
    for(let i=1;i<inputNumber;i++){
        //Se o número é divisível por 3 ou por 5 soma o valor.
        if(i%3==0 || i%5==0){
            sum += i;
        }
    }
    return sum;
}
