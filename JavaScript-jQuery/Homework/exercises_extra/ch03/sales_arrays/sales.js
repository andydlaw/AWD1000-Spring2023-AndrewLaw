"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

document.write(`<h2>Sales by Quarter</h2>`);

const quarter = [0, 0, 0, 0]
const region = [0, 0, 0, 0, 0]
let total = 0


for (let b = 0; b < (quarter.length); b++) {
    quarter[b] = region1[b] + region2[b] + region3[b] + region4[b] + region5[b]
}


for (let b = 0; b < (quarter.length); b++) {
    document.write(`Q${b + 1}: $${quarter[b]} <br>`);
}


document.write(`<h2>Sales by Region</h2>`);


for (let b = 0; b < (region.length); b++) {
    region[0] = region1[0] + region1[1] + region1[2] + region1[3]
    region[1] = region2[0] + region2[1] + region2[2] + region2[3]
    region[2] = region3[0] + region3[1] + region3[2] + region3[3]
    region[3] = region4[0] + region4[1] + region4[2] + region4[3]
    region[4] = region5[0] + region5[1] + region5[2] + region5[3]
}


for (let b = 0; b < (quarter.length); b++) {
    total += quarter[b]
}

for (let b = 0; b < (region.length); b++) {
    document.write(`Region ${b + 1}: $${region[b]} <br>`);
}





document.write(`<h2>Total Sales</h2>`);




document.write(`$${total} <br>`);


