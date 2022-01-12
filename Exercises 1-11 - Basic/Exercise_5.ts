(() => {
    
    let name: string = 'ezEquiEl';
    let lastName: string = 'bamIo';
    
    function MostrarNombreApellido(name: string, lastName: string)
    {
        lastName = lastName.toUpperCase();

        name = name.toLowerCase();
        name = name[0].toUpperCase() + name.slice(1);
        console.log(lastName + ', ' + name);
    }

    MostrarNombreApellido(name, lastName);
})();
