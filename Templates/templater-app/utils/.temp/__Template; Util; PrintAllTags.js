
/*

если не передать tagName, то просто распечатается текущая дата в формате `yyyy/m/d`

prompts: {
	['set tag name']:string ,
	['may to print this one as single tag (defaul `true`)']:falsey
}

// meta
#code/2025/7/25 #code/2025/7 #code/2025 #code
#date/2025/7/25 #date/2025/7 #date/2025 
#tip/2025/7/25 #tip/2025/7 #tip/2025 #tip
2025/7/25
#helloworld/2025/7/25#helloworld/2025/7#helloworld/2025#helloworld
end
*/
let tagName = await tp.system.prompt("set tag name", "");
// пробелы вначале не нужны, потому что могут нарушить принцип хеш-тегов (напр. `# foo`) , пробел вконце может оказаться избыточным (например: два пробела против одного,- `#foo/2025  #foo` вместо `#foo/2025 #foo`)
tagName = tagName.trim();
const replaceRx = /\s+/gim;
tagName = tagName.toLowerCase();
tagName = replace(tagName, replaceRx, "");
// переменная для условия.
// если передать falsy аргумент ,
// то самый короткий тег будет содержать год (например: `#tagName/2025`),
// по-умолчанию Тrue и самый короткий тег будет содержать только сам тег
// (вывод: `#tagName`)
const condition = await tp.system.prompt(
  "may to print this one as single tag (defaul `true`)",
  true,
);
const year = tp.date.now("y");
const month = tp.date.now("M");
const date = tp.date.now("D");

const printTagNameUtil = (value, delimiter = "/") =>
  `${value ? "#" + value + delimiter : ""}`;

function replace(str, rx, insertValue) {
  return str.replaceAll(rx, insertValue);
}

function print() {
  const strings = [
    `${printTagNameUtil(tagName)}${year}/${month}/${date}`,
    `${printTagNameUtil(tagName)}${year}/${month}`,
    `${printTagNameUtil(tagName)}${year}`,
    condition == true ? tagName && `${printTagNameUtil(tagName, "")}` : "",
  ];

  let compiledString = "";
  for (const str of strings) {
    compiledString += (str + ' ') ;

    if (tagName == false) break;
  }

  return compiledString.trim();
}

