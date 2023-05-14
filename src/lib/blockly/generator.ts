import { CodeGenerator } from 'blockly';

const TSPuppeteerGenerator = new CodeGenerator('TypeScriptPuppeteer');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
TSPuppeteerGenerator.addReservedWords(
	[
		'break',
		'case',
		'catch',
		'class',
		'const',
		'continue',
		'debugger',
		'default',
		'delete',
		'do',
		'else',
		'export',
		'extends',
		'false',
		'finally',
		'for',
		'function',
		'if',
		'import',
		'in',
		'instanceof',
		'new',
		'null',
		'return',
		'super',
		'switch',
		'this',
		'throw',
		'true',
		'try',
		'typeof',
		'var',
		'void',
		'while',
		'with',
		'let',
		'static',
		'yield',
		'await',
		'enum',
		'implements',
		'interface',
		'package',
		'private',
		'protected',
		'public',
		'arguments',
		'as',
		'async',
		'eval',
		'from',
		'get',
		'of',
		'set',
		'null',
		'true',
		'false',
		...Object.getOwnPropertyNames(globalThis)
	].join(',')
);
