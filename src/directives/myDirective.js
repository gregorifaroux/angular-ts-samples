/// <reference path="../app.ts" />
/// <reference path="../../libs/types/angularjs/angular.d.ts" />
/// <reference path="../reference.ts" />
'use strict';
var app;
(function (app) {
    var directives;
    (function (directives) {
        var MyDirective = (function () {
            function MyDirective() {
                this.templateUrl = 'src/directives/templates/myDirective.html';
                this.restrict = 'E';
                this.restrict = "EAC";
                this.replace = true;
                this.scope = {
                    name: "@"
                };
                //this.priority = 0;
                //this.transclude = false;
            }
            return MyDirective;
        })();
        directives.MyDirective = MyDirective;
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
app.registerDirective('MyDirective', []);
//# sourceMappingURL=myDirective.js.map