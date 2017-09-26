
module.exports = (plop) => {

  plop.setGenerator("component", {

    description: "Create a new Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the component's name?"
      }
    ],

    actions: [
      {
        type: "add",
        path: "src/app/components/{{name}}/{{name}}.scss",
        templateFile: "plop-templates/component/plop.component.scss",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{name}}/{{name}}.html",
        templateFile: "plop-templates/component/plop.component.html",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{name}}/{{name}}.ts",
        templateFile: "plop-templates/component/plop.component.ts",
        abortOnFail: false
      },
    ]

  });

  plop.setGenerator("service", {
    description: "Create a new Service",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the service's name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/app/services/{{name}}/{{name}}.ts",
        templateFile: "plop-templates/service/plop.service.ts",
        abortOnFail: false
      }
    ]
  });

};
