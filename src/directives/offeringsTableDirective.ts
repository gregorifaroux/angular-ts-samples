/// <reference path="../app.ts" />
/// <reference path="../model/Offering.ts" />
/// <reference path="../../types/angularjs/angular.d.ts" />
/// <reference path="../reference.ts" />

'use strict';

module app.directives {

    export interface OfferingScope extends ng.IScope {
        offerings: Offering[];
    }

    export class OfferingsTableDirective implements ng.IDirective {

        public scope = {}; // :OfferingScope;
        public restrict: string;
        public replace: boolean;

        public templateUrl = "src/directives/templates/offeringsTableDirective.html";

        constructor () {
            this.restrict = "E"; // Element
            this.replace = true;

            this.scope = <OfferingScope>{
                offerings : "=offerings"
            };

        }

        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        
    }
}

app.registerDirective('OfferingsTableDirective', []);
