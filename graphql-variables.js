/**
 * Copy the body of a GraphQL request and use this
 * parser to extract the JSON prettified variables.
 *
 * @param {string} text The input to your parser.
 * @returns {Object} JS object containing the output text
 *                   and the mimetype.
 */
function parse(text) {
    
    // Transform text here.
    const input = JSON.parse(text);
    const output = JSON.stringify(input.variables, null, 2);
    return {
      'result': output,
      'mimetype': 'text/plain'
    };
}
