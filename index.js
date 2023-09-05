import randomColor from 'randomcolor';

const color = randomColor();
console.log(color);

const blockPrint = `
##############################
##############################
########              ########
########   ${color}   ########
########              ########
##############################
##############################`;
console.log(blockPrint);
