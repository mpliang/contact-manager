app.controller('mainController', function ($scope, $http, $state) {

  $scope.delete = function(id) {
    $http.delete('http://localhost:3000/' + id)
      .then(function(data){
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error){
        console.log(error);
      })
  }

  $http.get('http://localhost:3000/')
    .then(function(data){
      console.log(data.data);
      $scope.contactList = data.data;
    })
    .catch(function(error){
      console.log(error);
    })
});
