<%*
/*

#date/2025/7/25

#date/2025/7/26 : сделал сортировку 
[...collection].sort().join(' ')

*/
const year = tp.date.now('y');
const month = tp.date.now('M');
const day = tp.date.now('D');
const hours = tp.date.now('HH');
const minutes = tp.date.now('mm');
const seconds = tp.date.now('ss');
const content = tp.file.content ;
const rx = /(\s|^)#\w+(\/\w+)*\b/gim ;

let match = null;
let str = '' ;
let collection = new Set();
while((match = rx.exec(content)) !== null) {
	collection.add(match[0]);
	//console.log(`match: ` ,match[0])
	//str += ` ${match[0]}` 
}
console.log([...collection])
str = [...collection].sort().join(' ');
str.trim();
console.log('end of the template');

function hoursToAmPm(value) {
	return value > 12 ? 'PM'  : 'AM' 
}

%>
# @document.tags.cloud
<% str %>

*refreshed at <% `#date/${year}/${month}/${day} , ${hours}:${minutes}:${seconds} ${hoursToAmPm(hours)} o'clock` %>*