/* Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

Create a Parent Class called Vehicles
Define properties and methods for the super Class
Consider the inheritance concept
Define 2 other Child classes and name them Motorbikes and Trucks
Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula) */

// step 1: Create a Parent Class called Vehicles
class Vehicles {
    type: string;
    name: string;
    yearOfProduction: number;
    image: string;
    price:number;

    constructor (type: string, name: string, yearOfProduction: number, image:string, price: number ) {
        this.type = type;
        this.name = name;
        this.yearOfProduction=yearOfProduction;
        this.image = image;
        this.price=price;
        cars.push(this);
    }
    
    info() {
        return `<a href="#" class="clickBtn card col-xl-3 col-md-6 col-sm-12" data-bs-toggle="modal" data-bs-target="#myModal${i}">
                <div style="width: 18rem;">
                    <img src="${this.image}" class="card-img-top" alt="${this.name}">
                    <div class="card-body text-center mt-3">
                        <h3 class="card-title">${this.type}</h3>
                    </div>
                </div>
                </a>
                
                <div class="modal fade" id="myModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${this.type}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${this.image}" class="card-img-top" alt="${this.name}">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><small>Name:</small><b>${this.name}</b></li>
                                <li class="list-group-item"><small>Year of production:</small><b>${this.yearOfProduction}</b></li>                                                         
                                <li class="list-group-item"><small>Price:</small><b>${this.price}</b></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>`;
            }
}

//step 2: create four different types of vehicles
// I created an empty array and interated through it
let cars: Array<Vehicles> = [];

new Vehicles ("Sports Car", "BMW", 2020, "img/SportsCar.png", 1000);
new Vehicles ("Police Car", "Audi", 2018, "img/PoliceCar.png", 2000);
new Vehicles ("Fire Truck", "Mercedes", 2017, "img/Firetruck.png", 5000);
new Vehicles ("Ambulance", "Ford", 2022, "img/Ambulance.png", 5000);

let i:number =0;
for (let item of cars) {
    (document.getElementById("content") as HTMLElement).innerHTML += item.info();
    i++;
}

//step3: Once the user clicks on some vehicle show its details and possibility to view the price




