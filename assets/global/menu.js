/*
NOTE: 
1. Add "data-n-linkto" to the element which we need to load page/screen withoutout browser refresh.
2. Add menu name, html template & callback in "assets\global\menuSchema.js" file.
3. This script file should be included before loading page script files.
*/

document.addEventListener("click", function (e) {
  if (e.target && e.target.dataset.nLinkto) {
    e.preventDefault();
    const linkTo = e.target.dataset.nLinkto;
    getPage(linkTo);
  }
});

const getPage = (page) => {
  let currentMenuSchemaTemplate = "";
  let currentMenuSchemaCallback;

  if (menuSchema.hasOwnProperty(page)) {
    const currentMenuSchema = menuSchema?.[page];
    currentMenuSchemaTemplate = currentMenuSchema?.template;
    currentMenuSchemaCallback = currentMenuSchema?.callback;
  } else {
    console.error(`Nano JS: Menu "${page}" is not available on menuSchema`);
  }

  if (currentMenuSchemaTemplate) {
    loadPageTemplate(currentMenuSchemaTemplate, currentMenuSchemaCallback);
  } else {
    console.error(
      `Nano JS: Template not added for "${page}" menu in menuSchema`
    );
  }
};

const loadPageTemplate = (template, callback) => {
  fetch(`${SITE_URL}${template}`)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector("[data-n-dynamic-element='main']").innerHTML =
        html;
    })
    .then(function (html) {
      var scripts = document
        .querySelector("[data-n-dynamic-element='main']")
        .querySelectorAll("script");

      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].innerText) {
          eval(scripts[i].innerText);
        } else {
          fetch(scripts[i].src).then(function (data) {
            data.text().then(function (r) {
              eval(r);
            });
          });
        }
        // To not repeat the element
        scripts[i].parentNode.removeChild(scripts[i]);
      }
    })
    .then(() => {
      //API callback
      callback && callback();
    })
    .catch(function (error) {
      console.log("Nano JS: Page template loading failed", error);
    });
};
