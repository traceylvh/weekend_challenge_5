myApp.controller("AddController", ["$scope", "PetService", function($scope, PetService){

    var petObject = {};
    var petService = PetService;

    petService.greeting();

    $scope.savePet = function(data) {
        petService.postData(data);
        //clear out the form - doesn't work!!
        $scope.petObject = {};
        // $scope.petForm.$setPristine()
        // $scope.$setPristine(true);

    }


}]);

myApp.controller("ShowController", ["$scope", "PetService", function($scope, PetService){
    var petService = PetService;
    // petService.initialCall();
    //the getDate here takes care of the initialCall function

    petService.getData();
    $scope.petArray = petService.petData;
    // console.log(petService.petData.allPets);

    // $scope.showId = function(object){
    //     console.log(object._id);
    //     };

    $scope.deleteData = petService.deleteData;

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
