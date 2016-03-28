myApp.controller("AddController", ["$scope", "PetService", function($scope, PetService){

    var petObject = {};
    var petService = PetService;

    petService.greeting();

    $scope.savePet = function(data) {
        petService.postData(data);
        petObject = null;
    }

}]);

myApp.controller("ShowController", ["$scope", "PetService", function($scope, PetService){
    var petService = PetService;

    //GET HERE
    petService.getData();
    $scope.petArray = petService.petData.allPets;
    console.log(petService.petData.allPets);
}]);


//============================

//for testing before db hookup
// myApp.controller("AddController", ["$scope", function($scope){

  // $scope.petArray = [];
  //
  //
  // $scope.savePet = function(value){
  //     console.log(value);
  //     $scope.petArray.push(value);
  //     $scope.petObject = {};
  //     console.log("the array:", $scope.petArray);
  // };
