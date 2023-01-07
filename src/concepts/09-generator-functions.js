/**
 * 
 * @param { HTMLDivElement } element 
 */
export const generatorFunctionsComponent = (element) => {

  const myGenerator = myGeneratorFunction();

  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
}

function* myGeneratorFunction() {

  yield 'First Value';
  yield 'Second Value';
  yield 'Third Value';
  yield 'Fourth Value';

  return 'Doesn\'t have Values'
}