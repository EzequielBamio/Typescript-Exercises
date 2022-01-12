(() => {
    function showValue(value: number, otherValue?: string)
    {
        if(otherValue != null)
        {
            for(let i = 0; i < value; i++)
            {
                console.log(otherValue);
            }
        }else
        {
            console.log(1/value);
            
        }
    }

    showValue(5, 'hello world');
    // showValue(5);

})();
