import {ChangeInfoComponent} from './components/change-info.js';
import {GopYComponent} from './components/gop-y.js';
import {LienHeComponent} from './components/lien-he.js';
import {SubjectComponent} from './components/subject.js';
import {QuizComponent} from './components/quiz.js';

var myapp = angular.module("myApp", ["ngRoute"]);

// Phần code cho chuyển trang
myapp.config(function ($routeProvider) {
    $routeProvider
        .when("/change-info", ChangeInfoComponent)
        .when("/gop-y", GopYComponent)
        .when("/lien-he", LienHeComponent)
        .when("/subject", SubjectComponent)
        .when("/quiz", QuizComponent)
});

myapp.controller("dangNhap", function ($scope) {
    $scope.login = function () {
        let daTimThay = false;

        students.forEach(student => {
            if (student.username == $scope.userName) {
                if (student.password == $scope.passWord) {
                    alert('Đăng nhập thành công !')
                    daTimThay = true;
                }
                alert('Tài khoản sai Mật khẩu')
                daTimThay = true;
            }
        });

        if (daTimThay == false) {
            alert('Tài khoản này không tồn tại !')
        }
    }
});

myapp.controller("dangKy", function ($scope) {
    let daTimThay = false;
    $scope.insert = function () {
        students.forEach(student => {
            if (student.username == $scope.student.username) {
                alert('username này đã có người sử dụng !')
                daTimThay = true;
            }
            student.push($scope.student);
            alert(student);

        });

        if (daTimThay == false) {
            console.log($scope.student)
            students.push(angular.copy($scope.student));
            alert('Đăng kí thành công !');
            students.push(angular.copy($scope.student));
            alert(student);
        }
    }
});

myapp.controller("quenMatKhau", function ($scope) {
    $scope.changePw = function () {
        let daTimThay = false;
        
        students.forEach(student => {
            if (student.username == $scope.username) {
                if (student.password == $scope.password) {
                    alert('Bạn đã thay đổi mật khẩu thành công !');
                    daTimThay = true;
                }
                else {
                    alert('Bạn đã nhập sai MK');
                    daTimThay = true;
                }

            }
        });

        if (daTimThay == false) {
            alert('Tài khoản này không tồn tại !')
        }
    }
});