/**
 * 
 * @param { HTMLDivElement } element 
 */
export const promisesRaceComponent = (element) => {
  element.innerHTML = '...Loading';

  const renderValue = (value) => {
    element.innerHTML = value;
  }

  Promise.race([
    slowPromises(),
    mediumPromises(),
    fastPromises(),
  ]).then(renderValue);
}

const slowPromises = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Slow Promise');
  }, 2000);
})

const mediumPromises = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Medium Promise');
  }, 1500);
})

const fastPromises = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Fast Promise');
  }, 1000);
})