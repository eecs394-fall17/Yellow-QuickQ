
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
        path: "src/app/components/{{name}}/index.ts",
        templateFile: "plop-templates/component/index.ts",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{name}}/{{name}}.component.scss",
        templateFile: "plop-templates/component/plop.component.scss",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{name}}/{{name}}.component.html",
        templateFile: "plop-templates/component/plop.component.html",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{name}}/{{name}}.component.ts",
        templateFile: "plop-templates/component/plop.component.ts",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{name}}/{{name}}.module.ts",
        templateFile: "plop-templates/component/plop.module.ts",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{name}}/{{name}}-routing.module.ts",
        templateFile: "plop-templates/component/plop-routing.ts",
        abortOnFail: false
      }
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
        path: "src/app/services/{{name}}/index.ts",
        templateFile: "plop-templates/service/index.ts",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/services/{{name}}/{{name}}.service.ts",
        templateFile: "plop-templates/service/plop.service.ts",
        abortOnFail: false
      }
    ]
  });

};
