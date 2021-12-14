// forum 3 HCI
//William Jonathan Mulyadi NIM: 2502045683
// JavaScript Practice 3
function climbing(z) {
	let a = [ ]
// there is no stair
	let k = z.length	
	if (k == 0) {
        return 0;
    }	
	a[k - 1] = z[k - 1];
    a[k - 2] = Math.min(z[k - 1] + z[k - 2], z[k - 2]);
// stair only 1 
	if (k == 1) { 
        return a[k - 1]; 
    }
//looping 
	for (let i = k - 3; i >= 0; i--) {
		a[i] = Math.min(a[i + 1], a[i + 2]) + z[i];
	}
	return Math.min(a[0], a[1]);
}

console.log(climbing([0, 2, 2, 1]));


