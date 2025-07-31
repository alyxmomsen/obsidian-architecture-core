<%*
const prefix = await tp.system.prompt('enter a prefix, if you need (no prefix as default)' , '');
const pseudohash = Date.now().toString(16) + Date.now().toString(16).split('').shuffle().join('');

const str = `${prefix}${pseudohash}`;

%><% str %>