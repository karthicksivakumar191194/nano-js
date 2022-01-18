const menuSchema = {
  dashboard: {
    template: "/assets/pages/dashboard/dashboard.html",
  },
  testPages_staticTestPage1: {
    template: "/assets/pages/testPages/staticPages/staticPage1.html",
  },
  testPages_apiTestPage1: {
    template: "/assets/pages/testPages/apiPages/apiPage1.html",
    callback: getApiPage1Data,
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
