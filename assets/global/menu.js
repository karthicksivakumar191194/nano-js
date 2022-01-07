/*
NOTE: 
1. Add "data-nlinkto" to the element which we need to load page/screen withoutout browser refresh.
2. Add menu name, html template & callback in "assets\global\menuSchema.js" file.
3. This script file should be included after loading all the script files.
*/

document.addEventListener("click", function (e) {
  if (e.target && e.target.dataset.nlinkto) {
    e.preventDefault();
    const linkTo = e.target.dataset.nlinkto;
    getPage(linkTo);
  }
});

const getPage = (page) => {
  let currentMenuSchemaTemplate = "";
  if (menuSchema.hasOwnProperty(page)) {
    const currentMenuSchema = menuSchema?.[page];
    currentMenuSchemaTemplate = currentMenuSchema?.template;
  } else {
    console.error(`Nano JS: Menu "${page}" is not available on menuSchema`);
  }

  if (currentMenuSchemaTemplate) {
    loadPageTemplate(currentMenuSchemaTemplate);
  } else {
    console.error(
      `Nano JS: Template not added for "${page}" menu in menuSchema`
    );
  }
};

const loadPageTemplate = (template) => {
  fetch(`${SITE_URL}${template}`)
    .then((data) => data.text())
    .then((html) => (document.getElementById("n-admin").innerHTML = html))
    .then(() => {
      //API callback
    })
    .catch(function (error) {
      console.log("Nano JS: Page template loading failed", error);
    });
};
