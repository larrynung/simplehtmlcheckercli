'use strict';

const program = require('commander');
const {Checker, InputType, OutputType} = require('simplehtmlchecker');

program
    .version('0.0.1')
    .description('simplehtmlchecker cli program')
    .option('--input-type <inputType>', 'input type', /^(text|file)$/i)
    .option('--output-type <inputType>', 'output type', /^(console|file)$/i)
    .option('--input-source <inputSource>', 'input source')
    .option('--output-target <outputTarget>', 'output target')
    .parse(process.argv);


const inputTypePool = {
    text: InputType.Text,
    file: InputType.File
};
const outputTypePool = {
    console: OutputType.Console,
    file: OutputType.File
};
const inputType = inputTypePool[program.inputType];
const outputType = outputTypePool[program.outputType];
const checker = new Checker();

checker
    .input(inputType, program.inputSource)
    .output(outputType, program.outputTarget)
    .check();