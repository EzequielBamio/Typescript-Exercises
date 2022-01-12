(() => {
    
    let months: string[] = ['Enero'  , 'Febrero'  , 'Marzo',
                            'Abril'  , 'Mayo'     , 'Junio',
                            'Julio'  , 'Agosto'   , 'Septiembre',
                            'Octubre', 'Noviembre', 'Diciembre'];
    
    for(let i = 0; i < months.length; i++)
    {
        console.log(`${i+1} ${months[i]}`);
    }
})();
