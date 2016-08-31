'use strict';
// import 'jasmine'
import {helloWorld} from './index'

describe("Hello world", function () {
    it("says hello", function () {
        expect(helloWorld()).toEqual("Hello world!");
    });
});
