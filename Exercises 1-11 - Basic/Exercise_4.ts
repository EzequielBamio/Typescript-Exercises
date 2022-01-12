(() => {
    
    function checkParity(number: number)
    {
        if(number % 2 == 1)
        {
            console.log(`El número ${number} es impar`);
        }else
        {
            console.log(`The number ${number} is pair`);
        }
    }

    checkParity(5);

})();
