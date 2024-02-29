/**
 * Programmer: Dius Montenegro
 * Date: 02/29/2024
 */

/**
 * Bike constructor function representing a bike with price, max_speed, and miles properties.
 * @param {number} price - The price of the bike.
 * @param {number} max_speed - The maximum speed of the bike.
 */
function Bike(price, max_speed) {
    // DOM element to append information
    this.main = document.querySelector('main');

    // Bike properties
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;

    /**
     * Display information about the bike.
     * @param {string} action - The action to be displayed ('Driving', 'Reversing') or omitted for detailed info.
     * @returns {Bike} - Returns the Bike object for method chaining.
     */
    this.displayInfo = function(action) {
        var paragraphEl = document.createElement('p');

        if (action === 'Driving' || action === 'Reversing') {
            paragraphEl.textContent = action;
        } else {
            paragraphEl.textContent = `Price: $${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`;
        }

        this.main.appendChild(paragraphEl);
        return this;
    };

    /**
     * Drive the bike, incrementing miles by 10.
     * @returns {Bike} - Returns the Bike object for method chaining.
     */
    this.drive = function() {
        this.miles += 10;
        this.displayInfo("Driving");
        return this;
    };

    /**
     * Reverse the bike, decrementing miles by 5 if miles > 0.
     * @returns {Bike} - Returns the Bike object for method chaining.
     */
    this.reverse = function () {
        if (this.miles > 0) {
            this.miles -= 5;
        }
        this.displayInfo("Reversing");
        return this;
    };
}

var bike1 = new Bike(500, 40);
bike1.drive().drive().drive().reverse().displayInfo();

var bike2 = new Bike(1000, 80);
bike2.drive().drive().reverse().reverse().displayInfo();

var bike3 = new Bike(1500, 120);
bike3.reverse().reverse().reverse().displayInfo();