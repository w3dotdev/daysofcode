"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.usersList = [{
        email: "email@email.com",
        id: 0,
        name: "Name 1"
    }, {
        email: "email@email.com",
        id: 1,
        name: "Name 2"
    }];
var findHighestId = function () {
    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
    var numbers = exports.usersList.map(function (user) { return user.id; });
    return Math.max.apply(Math, numbers);
};
exports.createNewUserFromData = function (data) {
    return __assign({ id: findHighestId() + 1 }, data);
};
