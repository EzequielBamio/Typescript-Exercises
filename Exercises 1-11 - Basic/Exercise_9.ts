(() => {
    
    function checkNumberPositive(number: number)
    {
        if(number > 0)
        {
            return calculateFactorial(number);
        }

        return calculateCube(number);
    }

    console.log(checkNumberPositive(5));
    // console.log(checkNumberPositive(-2));

})();

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
function calculateCube( number: number )
{
    return Math.pow(number , 3);
}

