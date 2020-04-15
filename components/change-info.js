export let ChangeInfoComponent = {
    templateUrl: './components/change-info.html',
    controller: controller
};

function controller($scope) {
    $scope.student = students[0];
}