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

        public static $inject: string[] = ['$filter'];

        public templateUrl = "src/directives/templates/offeringsTableDirective.html";

        public scope : OfferingScope;
        public restrict: string;
        public replace: boolean;
        public $filter: ng.IFilterService;

        constructor ($filter: ng.IFilterService) {
            this.restrict = "E"; // Element
            this.replace = true;
            this.$filter = $filter;


            this.scope = <OfferingScope>{
                offerings : "=offerings"
            };

            // TODO:
            //this.scope.offerings = $filter('orderBy')(this.scope.offerings, ["price"]);

            return this;
        }

        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        
    }
}

app.registerDirective('OfferingsTableDirective', []);
