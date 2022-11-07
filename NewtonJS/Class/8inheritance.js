
    class Employee{
        constructor(fullName,age,salary){
            this.fullName = fullName;
            this.age = age;
            this.salary = salary;
        }
        getSalary(){
            return this.salary;
        }
    }

    class foodToken extends Employee{
       
        constructor(fullName,age,salary,amountProcessed,eligibilityCriteria){
             super(fullName,age,salary);
             this.amountProcessed = amountProcessed;
             this.eligibilityCriteria = eligibilityCriteria;
        }

        getFoodUpdates(){
            return this.eligibilityCriteria;
        }
    }

    let akashObj = new Employee("akash",44,4000);
    let akashFoodToken = new foodToken("akash",44,8000,"yes",true);
    console.log(akashFoodToken);
    console.log(akashFoodToken.getFoodUpdates());
    console.log(akashFoodToken.getSalary());

