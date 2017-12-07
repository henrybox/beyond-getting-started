#Module Control


A basic module control needs to have the next objects:

    * Controller (Commonly ccontroller.js file).
    * updateState (Commonly state.js file).
    * Actions (Commonly actions.js File).

Each file create needs to by added in the module module.json file.

 ### Controller

 Is who make the availability of the model objects used for the rendering of the control module and
 the management of its state.

 The controller needs to have a *ready* property and *update* method declared.

 Example of basic controller:

```
function Controller(change, dependencies, properties) {
    "use strict";

    Object.defineProperty(this, 'ready', {
        'get': function () {
            return true;
        }
    });

    this.update = function () {
        // code for update function ...
    };

}
```

The controller receive 3 parameters:

    * **change**: parameter for bind changes.
    * **dependencies**: Dependencies to manage inside the module.
    * **properties**: The properties declared in the module.json file.

### updateState

The control state is used for the view when it is rendering.

Parameters:
    * **controller**: controller object.
    * **state**: state object. Represents the control state that is implemented by the view.

Example:
```
function updateState(controller, state) {
    "use strict";

    state.someProperty = value

}
```

### Actions

Define the actions in a module and needs have declared the methods specified in the module.json.

Example:
```
function Actions(controller, properties) {
    "use strict";

    var graphs = controller.graphs;
    var auth = graphs.auth;

    this.refresh = function () {
        auth.user.load({
            'update': true,
            'extensions': {
                'doctor': {'update': true}
            }
        });
    };


}
```
