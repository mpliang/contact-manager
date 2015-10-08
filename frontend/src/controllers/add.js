app.controller('addController', function ($scope, $http, $state) {
  $scope.add = function(contact) {
    console.log(contact);
    $http.post('http://localhost:3000/', contact)
      .then(function(data){
        console.log(data);
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error){
        console.log(error);
      });
  }
});
