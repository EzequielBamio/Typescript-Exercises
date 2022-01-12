(() => {
    function calculateNumberPrime( number: number ) : boolean {

        for (let i = 2; i < number; i++) {
      
          if (number % i === 0) {
            return false;
          }
      
        }
      
        return number !== 1;
      }

    function showPrime()
    {
        let count: number = 0;
        let number: number = 1;
        do
        {
            if(calculateNumberPrime(number))
            {
                console.log(number);
                count++;
            }
            number++;

        }while(count < 20)
    }

    showPrime();

})();
