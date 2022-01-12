(() => {
    
    function calculateFactorial(number: number)
    {
        let rtn: number = 1;
        if(number > 1 && number <= 20)
        {
            for(let i = number; i > 1; i--)
            {
                rtn *= i;
            }
        }

        return rtn;
    }
    console.log(calculateFactorial(5));
    
})();
