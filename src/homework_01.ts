function fuctorial(num: number): number {
	let result: number = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}
console.log(fuctorial(10));


function multiply(...rest: number[]): number {
	if (!rest.length) {
		return 0;
	}
	
	return rest.reduce((res, cur) => res * cur);
}
console.log(multiply(1, 2, 3, 4, 5));


function reverseString(someString: string): string {
	return someString.split('').reverse().join('');
}
console.log(reverseString('Hello world'));

interface Admin {
	name: string;
	email: string;
	password: string;
	type?: string;
}