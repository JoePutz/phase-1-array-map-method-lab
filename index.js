const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }
const titleCased = () => {
  function capitalize(sentence) {
    const words = sentence.split(' ');
    const result = words.map(e => e[0].toUpperCase() + e.slice(1));
    const newSentence = result.join(' ');
    return newSentence;
  }
  return tutorials.map(capitalize);
}


// const titleCased = () => {
//   const words = tutorials.split(" ");
//   words.map(first => )
//   const capTutorial = tutorials.map(first => first[0].toUpperCase() + first.substring(1)).join(" ")
//     return capTutorial;
// }

// const titleCased = () => {
//   tutorials.map(function(word) {

//   let words = word.split(" "); 
//   return words.map(function(word){
//   return word.charAt(0).toUpperCase()+ word.substring(1)
//   }).join(" "); ///return back to string 

  
//   }
// };