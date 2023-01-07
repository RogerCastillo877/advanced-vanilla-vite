/**
 * 
 * @param { HTMLDivElement } element 
 */
export const asyncAwaitSecuencialComponent = async (element) => {

  // const value1 = await slowPromises();
  // const value2 = await mediumPromises();
  // const value3 = await fastPromises();
  const [value1, value2, value3] = await Promise.all([
    slowPromises(),
    mediumPromises(),
    fastPromises()
  ])

  element.innerHTML = `
    value1: ${value1} <br />
    value2: ${value2} <br />
    value3: ${value3} <br />
  `;
}

const slowPromises = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Slow Promise');
  }, 2000);
});

const mediumPromises = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Medium Promise');
  }, 1500);
});

const fastPromises = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('Fast Promise');
  }, 1000);
});