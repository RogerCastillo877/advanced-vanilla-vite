import { heroes } from "../data/heroes";

/**
 * 
 * @param { HTMLDivElement } element 
 */
export const callbacksComponent = (element) => {

  const id = '5d86371fd55e2e2a30fe1cc3';
  findHero(id, (error, heroCall) => {

    if (error) {
      element.innerHTML = error;
      return;
    }
    element.innerHTML = heroCall?.name;
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