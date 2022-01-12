(() => {
    
    function checkMayus(value: string)
    {
        if(value == value.toLocaleLowerCase())
        {
            console.log('Lowercase');
        }else
        {
            if(value === value.toLocaleUpperCase())
            {
                console.log('Uppercase');
            }else
            {
                console.log('Mixed');
            }
        }
    }
    
    checkMayus('hEllo WorLD');
    // checkMayus('hello world');
    // checkMayus('HELLO WORLD');


})();
