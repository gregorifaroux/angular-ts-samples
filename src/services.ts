/// <reference path="app.ts" />

'use strict';

module app.services {

    export class MyService implements IService {
        private meaningOfLife = 42;                // THE MEANING OF LIFE
        constructor () {

        }
        someMethod () {
            return 'Meaning of life is ' + this.meaningOfLife;
        }
    }

}

app.registerService('MyService', []);
