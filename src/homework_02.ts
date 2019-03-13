abstract class Car {
	protected _mileage: number;
	protected _fuel: number;

	constructor(mileage: number, fuel: number) {
		this._mileage = mileage;
		this._fuel = fuel;
	}

	public abstract drive(addMiles: number): void;
	public abstract refuel(addFuel: number): void;

}

class Sedan extends Car{
	
	constructor(_mileage: number = 0, _fuel: number = 0) {
		super(_mileage, _fuel);
	}

	public drive(addMiles: number): void {
		if (!validNumber(addMiles)) {
			throw new Error('Enter valid number');
		}
		if (addMiles > this._fuel) {
			console.log(`Not enought fuel. You didn't reach ${addMiles - this._fuel} km`);
			this._mileage += this._fuel;
			this._fuel = 0;
		} else {
			this._mileage += addMiles;
			this._fuel -= addMiles;
		}
	}

	public refuel(addFuel: number): void {
		if (!validNumber(addFuel)) {
			throw new Error('Enter valid number');
		}
		this._fuel += addFuel;
	}

	public get getFuelAndMileage(): string {
			return `Fuel: ${this._fuel}. Mileage: ${this._mileage}`;
		}
}

function validNumber(someNum: number): boolean {
	return (isFinite(someNum) && someNum > 0);
}

const someCar = new Sedan(100, 20);