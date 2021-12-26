// the old way of wraping stuff in <div> used to be like

let input = "  Hello  "; // intentionally added spaces
let output = `<div>${input.trim()}</div>`



/// another way could have been like this

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str;
const Result = wrapInDiv(toLowerCase(trim()));  // this would work but the issue is that there are so many parenthise


/////  to solve the issue of parenthises we will use "Lodash"

import {compose,pipe} from "lodash/fp";

// now we can do

const transform = compose(wrapInDiv,toLowerCase,trim); // the issue with this is that we need to observe the execution from right to left
// in order to make it from righ to left we will do
transform = pipe(trim,toLowerCase,wrapInDiv);
// remember to only pass parameters as reference not like functions ()

