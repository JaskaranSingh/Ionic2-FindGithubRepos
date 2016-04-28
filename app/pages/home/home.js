"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var github_1 = require('../../providers/github/github');
var HomePage = (function () {
    function HomePage(github) {
        this.github = github;
    }
    HomePage.prototype.getRepos = function () {
        var _this = this;
        this.github.getRepos(this.username).subscribe(function (data) {
            _this.foundRepos = data.json();
        }, function (err) { return console.error(err); }, function () { return console.log('Complete'); });
    };
    HomePage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/home/home.html',
            providers: [github_1.GithubService]
        }), 
        __metadata('design:paramtypes', [github_1.GithubService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
