const comprarCasco = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar casco")
        },1000);
    })
}

const comprarGuantes = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Comprar guantes")
        },2000);
    })
}

const pasear = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("pasear en bici")
        },8000);
    })
}

const pasearEnBici = async () => {

    const casco = await comprarCasco();
    const guantes = await comprarGuantes();
    const paseo = await pasear();
    return ([casco,guantes,paseo]);
}

pasearEnBici().then(res => console.log(res));