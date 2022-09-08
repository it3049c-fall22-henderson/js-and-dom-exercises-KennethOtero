class StringFunctions {
    /**
     * @param {string} input
     * @returns {string}
     * @example
     * capitalize('hello world') // 'Hello world'
     * capitalize('HELLO WORLD') // 'Hello world'
     */
    capitalize(input) { 
      return input.toUpperCase(); 
    }
    /**
     * Returns a reversed string. Example: "abc" => "cba"
     * @param {string} input - the string input to be processed 
     * @returns  {string} - the reversed string
     * @example
     * reverse('abc') // 'cba'
     */
    reverse(input) { 
      return input.split("").reverse().join("");
    }
    /**
     * Returns an array of the words in a string
     * @param {string} input - the string input to be processed
     * @returns {string[]} - an array of words in the string
     * @example
     * words('hello world') // ['hello', 'world']
     */
    split(input) { 
      // Return the string as is if it is empty
      if (input === "") return input;

      // Split the words into an array. Uses a regular expression instead of just " " in case there are more than 
      // one space.
      return input.split(/\s+/);
    }
}
