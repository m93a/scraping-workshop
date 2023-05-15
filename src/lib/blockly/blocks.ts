import * as Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
	{
		type: 'print',
		message0: 'Print %1',
		args0: [
			{
				type: 'input_value',
				name: 'MSG'
			}
		],
		previousStatement: null,
		nextStatement: null,
		tooltip: '',
		helpUrl: ''
	},
	{
		type: 'println',
		message0: 'Print line %1',
		args0: [
			{
				type: 'input_value',
				name: 'MSG'
			}
		],
		previousStatement: null,
		nextStatement: null,
		tooltip: '',
		helpUrl: ''
	},
	{
		type: 'pup_goto',
		message0: 'Go to URL: %1',
		args0: [
			{
				type: 'input_value',
				name: 'URL',
				check: 'String'
			}
		],
		previousStatement: null,
		nextStatement: null,
		colour: 65,
		tooltip: 'Make the browser navigate to the given website and wait until it loads.',
		helpUrl: ''
	},
	{
		type: 'pup_click',
		message0: 'Click on element with selector %1',
		args0: [
			{
				type: 'input_value',
				name: 'SELECTOR',
				check: 'String'
			}
		],
		previousStatement: null,
		nextStatement: null,
		colour: 65,
		tooltip: '',
		helpUrl: ''
	},
	{
		type: 'pup_wait_for_element',
		message0: "Wait until there's element with selector %1",
		args0: [
			{
				type: 'input_value',
				name: 'SELECTOR',
				check: 'String'
			}
		],
		previousStatement: null,
		nextStatement: null,
		colour: 65,
		tooltip:
			"Search for an element with the given selector, and if there's none, wait until there is.",
		helpUrl: ''
	},
	{
		type: 'pup_eval',
		message0: 'Evaluate in the browser %1 %2',
		args0: [
			{
				type: 'input_dummy'
			},
			{
				type: 'input_statement',
				name: 'BODY'
			}
		],
		previousStatement: null,
		nextStatement: null,
		colour: 65,
		tooltip: '',
		helpUrl: ''
	},
	{
		type: 'js_let',
		message0: 'To variable %1 save %2',
		args0: [
			{
				type: 'field_variable',
				name: 'VAR',
				variable: 'item'
			},
			{
				type: 'input_value',
				name: 'VALUE'
			}
		],
		previousStatement: null,
		nextStatement: null,
		colour: 230,
		tooltip: 'Save to a local variable',
		helpUrl: ''
	},
	{
		type: 'js_void',
		message0: '%1',
		args0: [
			{
				type: 'input_value',
				name: 'NAME'
			}
		],
		previousStatement: null,
		nextStatement: null,
		colour: 230,
		tooltip: 'Just perform the action and forget the result',
		helpUrl: ''
	},
	{
		type: 'dom_document_query_selector',
		message0: 'element matching selector %1',
		args0: [
			{
				type: 'input_value',
				name: 'SELECTOR',
				check: 'String'
			}
		],
		output: 'Element',
		colour: 330,
		tooltip: '',
		helpUrl: ''
	},
	{
		type: 'dom_document_query_selector_all',
		message0: 'all elements matching selector %1',
		args0: [
			{
				type: 'input_value',
				name: 'SELECTOR',
				check: 'String'
			}
		],
		output: 'ElementArray',
		colour: 330,
		tooltip: '',
		helpUrl: ''
	},
	{
		type: 'dom_text_content',
		message0: 'text content of %1',
		args0: [
			{
				type: 'input_value',
				name: 'ELEMENT',
				check: 'Element'
			}
		],
		output: null,
		colour: 330,
		tooltip: '',
		helpUrl: ''
	},
	{
		type: 'dom_element_query_selector',
		message0: 'descendant of %1 matching selector %2',
		args0: [
			{
				type: 'input_value',
				name: 'ANCESTOR',
				check: 'Element'
			},
			{
				type: 'input_value',
				name: 'SELECTOR',
				check: 'String'
			}
		],
		inputsInline: true,
		output: 'Element',
		colour: 330,
		tooltip: '',
		helpUrl: ''
	},
	{
		type: 'dom_element_query_selector_all',
		message0: 'all descendants of %1 matching the selector %2',
		args0: [
			{
				type: 'input_value',
				name: 'ANCESTOR',
				check: 'Element'
			},
			{
				type: 'input_value',
				name: 'SELECTOR',
				check: 'String'
			}
		],
		inputsInline: true,
		output: 'ElementArray',
		colour: 330,
		tooltip: '',
		helpUrl: ''
	}
]);