/*
NOTE: 
1. Add URL with backslash at starting
2. Don't add backslash at URL end
3. If the menu doesn't need any URL when rendering the screen add empty quotes("")
*/

const menuSchema = {
  dashboard: {
    template: "/assets/pages/dashboard/dashboard.html",
    url: "/",
  },
  testPages_staticTestPage1: {
    template: "/assets/pages/testPages/staticPages/staticPage1.html",
    url: "/static/page1",
  },
  testPages_staticTestPage2: {
    template: "/assets/pages/testPages/staticPages/staticPage2.html",
    url: "",
  },
  testPages_staticTestPage2_1: {
    template: "/assets/pages/testPages/staticPages/staticPage2_1.html",
    appendTo: "[data-n-dynamic-element='sTP1_main']",
    url: "/static/page2/1",
  },
  testPages_staticTestPage2_2: {
    template: "/assets/pages/testPages/staticPages/staticPage2_2.html",
    appendTo: "[data-n-dynamic-element='sTP1_main']",
  },
  testPages_apiTestPage1: {
    template: "/assets/pages/testPages/apiPages/apiPage1.html",
    callback: getApiPage1Data,
    url: "/api/page1",
  },
  testPages_basicForm: {
    template: "/assets/pages/testPages/formPages/basicForm.html",
  },
  testPages_dynamicFieldForm: {
    template: "/assets/pages/testPages/formPages/dynamicFieldForm.html",
  },
  theme_colors: {
    template: "/assets/pages/theme/colors.html",
  },
  theme_typography: {
    template: "/assets/pages/theme/typography.html",
  },
  components_buttons: {
    template: "/assets/pages/components/button.html",
  },
};
