const colors = require('colors');
const fs = require('fs');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {


    try {

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`; // con este salto de linea es para ordenar el codigo
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`; // con este salto de linea es para ordenar el codigo
        }

        if (listar) {

            console.log('==================='.blue);
            console.log(`tabla del : ${base}`.green);
            console.log('==================='.blue);
            console.log(consola);
        }




        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);


        return `tabla-${base}.txt creada`;

    } catch (error) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}