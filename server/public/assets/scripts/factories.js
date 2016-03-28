myApp.factory("PetService", ["$http", function($http){

    var petData = {};

    var greeting = function(){
      console.log("Works");
    };

    var getData = function(){
       $http.get("/pets").then(function(response){
          console.log(response.data);
          petData.allPets = response.data;
          console.log(petData.allPets);
          // return petData.allPets;
       });
    };


    var postData = function(data){
       $http.post("/pets", data).then(function(response){
          console.log(response.data);
       });
    };

    var initialCall = function(){
      if(petData.allPets === undefined){
        $http.get("/pets").then(function(response){
          petData.allPets = response.data;
        });
      }
    };

    return {
      postData: postData,
      getData: getData,
      greeting: greeting,
      petData: petData,
      initialCall: initialCall

    };
}]);
