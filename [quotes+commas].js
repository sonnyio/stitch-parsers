/**
 * Wraps newline seperated values in single quotes 
 * and the output in square brackets.
 *
 * Input:
 *   a
 *   b
 *   c
 * Output: ['a', 'b', 'c']
 *
 * @param {string} text The input to your parser.
 * @returns {Object} JS object containing the output text
 *                   and the mimetype.
 */
function parse(text) {
    
    // Transform text here.
    
    return {
      'result': "['"+text.replace(/\n/g, "', '")+"']" ,
      'mimetype': 'text/plain'
    };
}
