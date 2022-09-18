
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, l=false,h ) => {

    try {
        
        
        let salida,consola = '';
    
        for (let i = 1; i <= h; i++) {
        
           salida += `${base} x ${i} = ${ base * i }\n`;
           consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${ base * i }\n`;
        };
        
        if (l) {
            console.log('======================='.rainbow);
            console.log('      Tabla del: ', base);
            console.log('======================='.rainbow);
            console.log(consola);  
        }
        
        
        // fs.writeFile(`tabla-${base}.txt`, salida, (err)=> {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt ha sido creado`);
        // })
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}