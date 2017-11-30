function Page($container, vdir, dependencies) {
    "use strict";

    var $page = $(module.render('page'));
    $container
        .attr('id', 'new-control-model-page')
        .append($page);

    var control = $container.children('new-control-model');

    function onControlReady() {
        console.log('control ready', control.refresh);
        window.asd = control;
    }

    control.ready(onControlReady);

}
