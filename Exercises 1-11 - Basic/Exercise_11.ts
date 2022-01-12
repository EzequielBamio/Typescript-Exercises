(() => {
    
   function isPalindromo( chain: string )
   {
        let chainAux  : string = chain.split("").join().replace(/\s+/g, '').replace(/,/g, '').toLocaleLowerCase();
        let chainRerse: string = chain.split("").reverse().join().replace(/\s+/g, '').replace(/,/g, '').toLocaleLowerCase();  

        console.log(chainAux);
        console.log(chainRerse);


       if(chainAux === chainRerse)
       {
        return true;
       }

       return false;
   }

   console.log(isPalindromo("La ruta nos aporto otro paso natural"));
   console.log(isPalindromo("Esto no es polindromo"));


})();
