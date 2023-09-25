//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let articleLess=[];
let mp={}
for(i in touristSpots){
	let a=touristSpots[i].replace(/\bthe\b/gi,"").trim(" ");
	articleLess.push(a);
	
}
articleLess.sort();
for(i in touristSpots){
	mp[touristSpots[i]]=articleLess[i];
}
let arr=[];
for(i in mp){
	arr.push(mp[i])
}
console.log(arr);
