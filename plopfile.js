
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
        path: "src/app/components/{{camelCase name}}/{{camelCase name}}.scss",
        templateFile: "plop-templates/component/plop.scss",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{camelCase name}}/{{camelCase name}}.html",
        templateFile: "plop-templates/component/plop.html",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "plop-templates/component/plop.ts",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/app/components/{{camelCase name}}/{{camelCase name}}.module.ts",
        templateFile: "plop-templates/component/plop.module.ts",
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
        path: "src/app/services/{{name}}/{{name}}.ts",
        templateFile: "plop-templates/service/plop.service.ts",
        abortOnFail: false
      }
    ]
  });

  plop.setGenerator("page", {
    description: "Create a new Page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the page's name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{kabobCase name}}/{{kabobCase name}}.scss",
        templateFile: "plop-templates/page/plop.scss",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/pages/{{kabobCase name}}/{{kabobCase name}}.html",
        templateFile: "plop-templates/page/plop.html",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/pages/{{kabobCase name}}/{{kabobCase name}}.ts",
        templateFile: "plop-templates/page/plop.ts",
        abortOnFail: false
      },
      {
        type: "add",
        path: "src/pages/{{kabobCase name}}/{{kabobCase name}}.module.ts",
        templateFile: "plop-templates/page/plop.module.ts",
        abortOnFail: false
      }
    ]
  });

};
