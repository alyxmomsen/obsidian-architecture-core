<%*

const foo = () => 'function foo';

const prompt = tp.system.prompt('hello world');

function doit () {
	const filecontent = tp.file.content;
	const regexp = /#date(\/\w+)+\b/gim;
	let match = '';
	let string = 'test string : ';
	while ((match = regexp.exec(filecontent)) !== null) {
		console.log('match:', match);
		string += ` ${match[0]}`
	}

	return `function doit end: ${string}`;
}

%>
# @process
<% doit() %>