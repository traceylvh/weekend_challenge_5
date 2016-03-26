myApp.controller("AddController", ["$scope", "PetService", function($scope, PetService){

//for testing before db hookup
// myApp.controller("AddController", ["$scope", function($scope){

  $scope.petArray = [];


  $scope.savePet = function(value){
      console.log(value);
      $scope.petArray.push(value);
      $scope.petObject = {};
      console.log("the array:", $scope.petArray);
  };


//scott's code for mongo
    // var petObject = {};
    // var petService = PetService;
    //
    // //POST HERE
    // $scope.submit = function(data){
    //   petService.postData(data);
    // };
}]);

myApp.controller("ShowController", ["$scope", "PetService", function($scope, PetService){
    var petService = PetService;

    //GET HERE
    petService.getData();
}]);
