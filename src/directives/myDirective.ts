/// <reference path="../app.ts" />
/// <reference path="../../libs/types/angularjs/angular.d.ts" />
/// <reference path="../reference.ts" />

'use strict';

module app.directives {


    export interface IMyScope extends ng.IScope
    {
        name: string;
    }

    export class MyDirective  implements IDirective {

        public scope      : IMyScope;
        public templateUrl = 'src/directives/templates/myDirective.html';
        public restrict = 'E';
        public replace: boolean;

        public link: (scope: IMyScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

        constructor () {
            this.restrict = "EAC";
            this.replace = true;

            this.scope = <IMyScope>{
                name : "@"
            };

            //this.priority = 0;
            //this.transclude = false;
        }

    }

}

app.registerDirective('MyDirective', []);
