/* Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

Create a Parent Class called Vehicles
Define properties and methods for the super Class
Consider the inheritance concept
Define 2 other Child classes and name them Motorbikes and Trucks
Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula) */
// step 1: Create a Parent Class called Vehicles
var Vehicles = /** @class */ (function () {
    function Vehicles(type, name, yearOfProduction, image, price) {
        this.type = type;
        this.name = name;
        this.yearOfProduction = yearOfProduction;
        this.image = image;
        this.price = price;
        cars.push(this);
    }
    Vehicles.prototype.info = function () {
        return "<a href=\"#\" class=\"clickBtn card col-xl-3 col-md-6 col-sm-12\" data-bs-toggle=\"modal\" data-bs-target=\"#myModal" + i + "\">\n                <div style=\"width: 18rem;\">\n                    <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n                    <div class=\"card-body text-center mt-3\">\n                        <h3 class=\"card-title\">" + this.type + "</h3>\n                    </div>\n                </div>\n                </a>\n                \n                <div class=\"modal fade\" id=\"myModal" + i + "\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                    <div class=\"modal-dialog\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalLabel\">" + this.type + "</h5>\n                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\"><small>Name:</small><b>" + this.name + "</b></li>\n                                <li class=\"list-group-item\"><small>Year of production:</small><b>" + this.yearOfProduction + "</b></li>                                                         \n                                <li class=\"list-group-item\"><small>Price:</small><b>" + this.price + "</b></li>\n                            </ul>\n                        </div>\n                      </div>\n                    </div>\n                </div>";
    };
    return Vehicles;
}());
//step 2: create four different types of vehicles
// I created an empty array and interated through it
var cars = [];
new Vehicles("Sports Car", "BMW", 2020, "img/SportsCar.png", 1000);
new Vehicles("Police Car", "Audi", 2018, "img/PoliceCar.png", 2000);
new Vehicles("Fire Truck", "Mercedes", 2017, "img/Firetruck.png", 5000);
new Vehicles("Ambulance", "Ford", 2022, "img/Ambulance.png", 5000);
var i = 0;
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var item = cars_1[_i];
    document.getElementById("content").innerHTML += item.info();
    i++;
}
//step3: Once the user clicks on some vehicle show its details and possibility to view the price
