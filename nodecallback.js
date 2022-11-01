const getUsuarioById = (id,callback) => {
    const user = {
        id,
        nombre: 'Fernando'
    }
    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUsuarioById(1, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre);
});
