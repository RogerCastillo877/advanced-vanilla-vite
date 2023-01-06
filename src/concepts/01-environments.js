/**
 * 
 * @param { HTMLDivElement } element 
 */
export const environmentsComponent = (element) => {

  // process.env
  // import.meta.env    /*Vite sintax to get environment variables*/
  const html = `
    variables:<br />
    Dev: ${import.meta.env.DEV} <br />
    Prod: ${import.meta.env.PROD} <br />
    Prod: ${import.meta.env.VITE_API_KEY} <br />
  `
  element.innerHTML = html;
} 