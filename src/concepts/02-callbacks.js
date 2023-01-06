import { heroes } from "../data/heroes";

/**
 * 
 * @param { HTMLDivElement } element 
 */
export const callbacksComponent = (element) => {

  const id1 = '5d86371fd55e2e2a30fe1cc3';
  const id2 = '5d86371fd55e2e2a30fe1cc4';

  findHero(id1, (error, heroCall) => {

    if (error) {
      element.innerHTML = error;
      return;
    }
    findHero(id2, (error, heroCall2) => {
      if (error) {
        element.innerHTML = error;
        return;
      }

      element.innerHTML = `${heroCall?.name} - ${heroCall2?.name}`
    })
  });
}

/**
 * 
 * @param { String } id 
 * @param { (error: String|Null,hero: Object) => void } callback 
 */
const findHero = (id, callback) => {
  const hero = heroes.find(hero => hero.id === id);
  if (!hero) {
    callback(`Hero with id ${id} not found.`)
    return;
  }

  callback(null, hero);
}