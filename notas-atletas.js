let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function somaAtletas(atletas){
    for(let i = 0; i < atletas.length; i ++){
        
        
        let notasDesordenadas = atletas[i].notas.sort();
         notasDesordenadas = notasDesordenadas.join(",");
        let notas = atletas[i].notas.sort((a, b) => a - b); //...arranging from smallest to largest. 
        let notasComputadas = notas.slice(1,4);
        let somaDasNotas = notasComputadas.reduce((a, b) => {
            return a + b;
            }, 0) / notasComputadas.length;

        console.log(`Atleta: ${atletas[i].nome}`);
        console.log(`Notas obtidas: ${notasDesordenadas}`);
        console.log(`Média válida: ${somaDasNotas}`);
        
        
        
    };
};

somaAtletas(atletas)
