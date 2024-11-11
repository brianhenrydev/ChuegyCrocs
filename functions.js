const {crocCollection} = require("./data.js");
const shoeDetails = (shoe) => {
	return `${shoe.color} ${shoe.name} ${shoe.type}`;
};

const getShoeType = (crocs, type) => {
	let shoeOfType = "";
	for (const shoe of crocs) {
		if (shoe.type === type) {
			shoeOfType += `\t${shoe.name}\n`;
		}
	}
	return shoeOfType;
};

const listDetails = () => {
	console.log("ALL CROCS:");
	console.log("---------------------------------");
	
	for (const croc of crocCollection) {
		console.log(`\t${shoeDetails(croc)}`);
	}
	
	console.log("");
	
	console.log("STYLES:");
	console.log("---------------------------------");
	
	console.log("FLIP CROCS:");
	console.log(getShoeType(crocCollection, "Flip"));
	
	console.log("PUFF BOOTS:");
	console.log(getShoeType(crocCollection, "Puff Boot"));
	console.log("CRUSH SANDALS:");
	console.log(getShoeType(crocCollection, "Crush Sandal"));
	console.log("CLASSIC CLOGS:");
	console.log(getShoeType(crocCollection, "Classic Clog"));
	console.log("CLASSIC BOOTS:");
	console.log(getShoeType(crocCollection, "Classic Boot"));
	console.log("SLIDES:");
	console.log(getShoeType(crocCollection, "Slide"));
}

module.exports = { listDetails };
