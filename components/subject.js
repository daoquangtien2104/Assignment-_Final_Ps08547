
export let SubjectComponent = {
    templateUrl: './components/subject.html',
    controller: controller,
    controllerAs: '$'
};

function controller($scope, $http) {
    $scope.subjects;

    console.log($scope.subjects)

   
    this.index = 0;
    this.first = function() {
        this.subjects = $scope.subjects;
        this.index = 0;
    }

    this.next = function (){
        this.subjects = $scope.subjects;
        if ( (this.index + 6) > this.subjects.length -1 )
            this.last();
        else 
            this.index += 6;
    }
    this.prev = function(){
        this.subjects = $scope.subjects;
        if(this.index < 6) {
            this.index = 0;
        } else {
            this.index -= 6;
        }
    }

    this.last = function(){
        this.subjects = $scope.subjects;
        this.index = Math.round(this.subjects.length / 6) + 6;
    }


    //lấy dữ liệu từ file subjects.js truyền theo kiểu ajax (kiểu bất đồng bộ)
    $http.get('/db/Subjects.js').then(function (ketQua) {
        $scope.subjects = ketQua.data;
    });

    $scope.goToQuiz = function(id, name) {
        document.cookie = "quizId=" + id;
        document.cookie = "subjectName=" + name;
        window.location = "/#!/quiz";
    }
} 