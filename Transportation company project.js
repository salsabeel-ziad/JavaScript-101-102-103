class Vehicles{
    constructor(name, manufacturer, ID){
        this.name = name;
        this.manufacturer = manufacturer;
        this.ID = ID;
    }
}

class Car extends Vehicles{
    constructor(name, manufacturer, ID , carType){
        super(name, manufacturer,ID);
        this.carType = carType;
    }
}

class Airplane extends Vehicles{
    constructor(name, manufacturer, ID, airplaneType){
        super(name, manufacturer, ID);
        this.airplane = airplaneType;
    }
}

class Employee {
    constructor(name, DateOfBirth, ID){
        this.name = name;
        this.dateOfBirth = DateOfBirth
        this.ID = ID;
    }
}

class Driver extends Employee {
    constructor(name, DateOfBirth, ID, licenseID){
        super(name,  DateOfBirth, ID);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {
    constructor(name, DateOfBirth, ID, licenseID){
        super(name,  DateOfBirth, ID);
        this.licenseID = licenseID;
    }
}

class Reservation{
    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        this.reservationID = reservationID;
    }
}
const reservationsArray = [];

// Three different car objects
const car1 = new Car("Car1", "Manufacturer1", 100, "gas");
const car2 = new Car("Car2", "Manufacturer2", 200, "electric");
const car3 = new Car("Car3", "Manufacturer3", 300, "gas");

// Two different airplane objects 
const airplane1 = new Airplane("Airplane1", "Manufacturer4", 101, "Type1");
const airplane2 = new Airplane("Airplane2", "Manufacturer5", 102, "Type2");

// Object for Driver and pilot
const driver1 = new Driver("Driver1", "1990-01-01", 201, "D001");
const pilot1 = new Pilot("Pilot1", "1985-05-15", 301, "P001");

function checkAndReserve(employeeId, vehiclesId){
    const employee = findEmployeeById(employeeId);
    const vehicle = findVehicleById(vehiclesId);

    if(employee instanceof Pilot && vehicle instanceof Airplane){
        const reservationID = "R00" + (reservationsArray.length + 1);
        const reservation = new Reservation(new Date().toISOString(), employeeId, vehiclesId, reservationID);
        reservationsArray.push(reservation);
        console.log("Reservations is Done successfully : airplane");
    }

    else if(employee instanceof Driver && vehicle instanceof Car){
        const reservationID = "R02" + (reservationsArray.length + 1);
        const reservation = new Reservation(new Date().toISOString(), employeeId, vehiclesId, reservationID);
        reservationsArray.push(reservation);
        console.log("Reservations is Done successfully : car ");
    }

    else if(employee instanceof Pilot && vehicle instanceof Car){
        console.log("There is an incompatibility: the employee is a pilot and the vehicle is a car");
    }

    else if(employee instanceof Driver && vehicle instanceof Airplane){
        console.log("There is an incompatibility: the employee is a Driver and the vehicle is a Airplane");
    }

}
function findEmployeeById(id) {
    return driver1.ID === id ? driver1 : (pilot1.ID === id ? pilot1 : null);
}

function findVehicleById(id) {
    return car1.ID === id ? car1 : (airplane1.ID === id ? airplane1 : null);
}

checkAndReserve(301, 100 ); // wrong 
checkAndReserve(301, 101 ); // Successful Pilot & airplane
checkAndReserve(201, 100 ); // Successful Driver & car 


reservationsArray.map(reservation => console.log(reservation));