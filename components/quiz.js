export let QuizComponent = {
    templateUrl: './components/quiz.html',
    controller: controller
};

function controller($scope, $http) {
    $scope.subjectId = getCookie('quizId');
    $scope.subjectName = getCookie('subjectName');
    $scope.second = 0;

    $scope.timer = setInterval(() => {
        $scope.second++;
        $scope.$apply();
    }, 1000);

    //lấy dữ liệu từ file subjects.js truyền theo kiểu ajax (kiểu bất đồng bộ)
    $http.get('/db/Quizs/' + $scope.subjectId + '.js').then(function (ketQua) {
        $scope.quizs = ketQua.data;
        $scope.index = 0;
        $scope.quiz = $scope.quizs[$scope.index];

        $scope.answers = new Array($scope.quizs.length);

    });

    $scope.submitQuiz = function () {
        let totalMarks = 0;
        $scope.quizs.forEach((quiz, index) => {
            if (quiz.AnswerId == $scope.answers[index]) {
                totalMarks += quiz.Marks;
            }
        });
        alert('Số điểm của bạn là : ' + totalMarks)
    }

    $scope.selectAnswer = function (answerId) {
        $scope.answers[$scope.index] = answerId;
    }

    $scope.firstQuiz = function () {
        $scope.index = 0;
        $scope.quiz = $scope.quizs[$scope.index];
    }

    $scope.prevQuiz = function () {
        if ($scope.index > 0) {
            $scope.index -= 1;
            $scope.quiz = $scope.quizs[$scope.index];
        }
    }
    $scope.nextQuiz = function () {
        if ($scope.index < $scope.quizs.length - 1) {
            $scope.index += 1;
            $scope.quiz = $scope.quizs[$scope.index];
        }
    }

    $scope.lastQuiz = function () {
        $scope.index = $scope.quizs.length - 1;
        $scope.quiz = $scope.quizs[$scope.index];
    }

    $scope.getTimeStr = function (value) {
        value = $scope.second;
        let minus = "00";
        let sec = "00";

        //Lấy về phút, giây
        let minus_temp = Math.floor(value / 60)
        let sec_temp = value % 60;

        minus = (minus_temp >= 10) ? minus_temp : `0${minus_temp}`;
        sec = (sec_temp >= 10) ? sec_temp : `0${sec_temp}`;

        return `${minus}:${sec}`
    }
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

