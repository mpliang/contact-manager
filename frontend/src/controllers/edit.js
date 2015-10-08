app.controller('editController', function ($scope, $http, $state, $stateParams) {
  console.log($stateParams);
  $http.get('http://localhost:3000/' + $stateParams.contactId)
  .then(function(data){
    console.log(data);
    $scope.contact = data.data;
  })
  .catch(function(error){
    console.log(error);
  });

  $scope.edit = function(id) {
    console.log(id);
    $http.put('http://localhost:3000/' + id)
      .then(function(data){
        console.log(data);
        // $state.go($state.current, {}, {reload: true});
      })
      .catch(function(error){
        console.log(error);
      });
  }


});
