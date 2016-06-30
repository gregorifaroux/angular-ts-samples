/// <reference path="../types/angularjs/angular.d.ts" />
/// <reference path="../types/angularjs/angular-route.d.ts" />
/// <reference path="../types/angularjs/angular-resource.d.ts" />
/// <reference path="../src/controllers/MyController.ts" />
/// <reference path="filters/filters.ts" />
/// <reference path="../src/directives/myDirective.ts" />
/// <reference path="../src/directives/offeringsTableDirective.ts" />

/// <reference path="reference.ts" />

'use strict';

// Create and register modules
var modules = ['app.controllers','app.directives', 'app.filters', 'app.services'];
modules.forEach((module) => angular.module(module, []));

modules.push("ngRoute");

angular.module('app', modules);


// Url routing
angular.module('app').config(['$routeProvider',
    function routes($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/MyView.html',
                controller: 'app.controllers.MyController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);

module app {
    export module controllers {}
    export module directives {}
    export module filters {}
    export module services {}

    export interface IController {}
    export interface IDirective {
        restrict: string;
        link($scope: ng.IScope, element: JQuery, attrs: ng.IAttributes): any;
    }
    export interface IFilter {
        filter (input: any, ...args: any[]): any;
    }
    export interface IService {}

    /**
     * Register new controller.
     *
     * @param className
     * @param services
     */
    export function registerController (className: string, services = []) {
        var controller = 'app.controllers.' + className;
        services.push(app.controllers[className]);
        angular.module('app.controllers').controller(controller, services);
    }

    /**
     * Register new filter.
     *
     * @param className
     * @param services
     */
    export function registerFilter (className: string, services = []) {
        var filter = className.toLowerCase();
        services.push(() => (new app.filters[className]()).filter);
        angular.module('app.filters').filter(filter, services);
    }

    /**
     * Register new directive.
     *
     * @param className
     * @param services
     */
    export function registerDirective (className: string, services = []) {
        var directive = className[0].toLowerCase() + className.slice(1);

        console.log("directive = "  + directive)

        services.push(() => new app.directives[className]());
        angular.module('app.directives').directive(directive, services);
    }

    /**
     * Register new service.
     *
     * @param className
     * @param services
     */
    export function registerService (className: string, services = []) {
        var service = className[0].toLowerCase() + className.slice(1);
        services.push(() => new app.services[className]());
        angular.module('app.services').factory(service, services);
    }
}
