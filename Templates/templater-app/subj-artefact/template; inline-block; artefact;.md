<%*

const promptValue = await tp.system.prompt('level' , '#');
const year = tp.date.now('y') ;
const month = tp.date.now('M') ;
const date = tp.date.now('D') ;
console.log(promptValue);
let hash = promptValue ;
hash = hash.trim();
const hashAmount = hash.split('').length;

const hashSymbol = hash.split('')[0] ;

%><%  hash  %> @artefact
<% hashSymbol.repeat(hashAmount + 1) %> @@@
# @meta
<% tp.file.include('[[__Template; -type util -name Insert Tag By Prefix and expand them]]') %>