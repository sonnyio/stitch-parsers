/**
 * Copy the body of a GraphQL request and use this
 * parser to extract the payload.
 *
 * @param {string} text The input to your parser.
 * @returns {Object} JS object containing the output text
 *                   and the mimetype.
 */
function parse(text) {
    
    // Transform text here.
    const input = JSON.parse(text);
    const payload = input.payload || input.query;
    const result = payload.replace(/\\n/g, "\n").replace(/\\t/g, "\t")
    return {
      'result': result,
      'mimetype': 'text/plain'
    };
}
