/**
 * 
 * @param { HTMLDivElement } element 
 */
export const generatorExerciseComponent = (element) => {

  const genId = idGenerator();

  const button = document.createElement('button');
  button.innerText = 'Click me';
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerHTML = `Click ${value}`;

  }
  button.addEventListener('click', renderButton)
}

function* idGenerator() {

  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}