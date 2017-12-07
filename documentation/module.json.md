# Module.json file



Define the configuration for the module. Files, libraries to use and controls to
include must be specify here.

You can create different modules types. The main module types are:

    * **control**: module that implements specific functionalities and is exported
    as a WebComponent. In this module beyond integrates React Tecnology.
    * **page**: page modules can be access by url and integrate other modules types.
    * **code**
    * **custom**

Example module json with one type:
```
{
  "type": "control"
  "id": "new-control-model",
  "dependencies": {
    "controls": [
      "paper-button"
    ],
    "require": {
      "application/model/code": "User"
    }
  },
  "properties": {
    "userId": "String"
  },
  "methods": [
    "refresh"
  ],
  "js": [
    "js/controller.js",
    "js/state.js",
    "js/actions.js",
    "js/define.js"
  ],
  "jsx": {
    "path": "jsx",
    "files": "*"
  }
}

```

If you need to implement more than one module type, you don't may use the "type" property,
you will need to create two differents objects.
Example
```
{
  "page": {
    "route": "/login/main",
    "dependencies": {
      "controls": [
        "paper-button",
        "font-roboto",
        "paper-spinner",
        "paper-toast",
        "iron-icon",
        "iron-icons",
        "graphs-icons"
      ],
      "require": {
        "code/graphs/main/code": "graphs"
      }
    },
    "html": "page.html",
    "js": {
      "path": "js",
      "files": [
        "controls.js",
        "facebook.js",
        "page.js"
      ]
    }
  },
  "custom": {
    "txt": "texts.json",
    "less": {
      "path": "css",
      "files": [
        "functions.less",
        "*"
      ]
    }
  },
  "static": [
    "images"
  ]
}

```