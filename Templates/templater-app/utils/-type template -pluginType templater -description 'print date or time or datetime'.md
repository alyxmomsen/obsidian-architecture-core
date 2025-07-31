<%* 
// здесь нужна реализация паттерна проективрования "интерпритатор". 
// выбор формата вывода : yyyy:MM:DD:hh:mm:ss:SSS или yyyy/MM/DD//hh:mm:ss:SSS или др вариант
// date/time/datetime
// с ведущими нулями ли

tp.system.prompt('prompt: all/date/time (default:all)' , 'all');
let day = tp.date.now('D') ;
let month = tp.date.now('M') ;
let year = tp.date.now('y') ;
let hours = tp.date.now('h') ;
let minutes = tp.date.now('m') ;
let seconds = tp.date.now('s') ;
let milliseconds = tp.date.now('SSS') ;

// const obj = {
// all:() => {y = tp.date.now()} ,
// 	date:() => {} ,
// 	time:() => {}
// }

const str = `${year}:${month}:${day}:${hours}:${minutes}:${seconds}:${milliseconds}` ;

%><%
str
%>