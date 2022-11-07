class cars {
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

const myCar = new cars("ford", 2014);

console.log(myCar); //cars { name: 'ford', year: 2014 }