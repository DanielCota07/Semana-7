// Proceso1: Comprar casco , duración: 1 segundo
// Proceso2: Comprar guantes, duración: 2 segundo
// Proceso3: Ir de paseo, duración: 8 segundo

const comprarCasco = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Comprar casco");
    }, 1000);
});

const comprarGuantes = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Comprar guantes");
    }, 2000);
});

const irDePaseo = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Ir de paseo");
    }, 8000);
});

const pasearEnBici = () => {
    comprarCasco
        .then(infoCasco => {
            console.log(infoCasco);
            return comprarGuantes;
        })
        .then(infoGuantes => {
            console.log(infoGuantes);
            return irDePaseo;
        })
        .then(infoPaseo => {
            console.log(infoPaseo);
        })
        .catch(error => {
            console.error(error);
        })
        .finally(()=> console.log("Proceso finalizado"));
}
pasearEnBici();