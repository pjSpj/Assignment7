var config = {
    apiKey: "AIzaSyC80JR4C31POctSvZGDaupMPeYszcvs7zw",
    authDomain: "train-c0284.firebaseapp.com",
    databaseURL: "https://train-c0284.firebaseio.com",
    projectId: "train-c0284",
    storageBucket: "train-c0284.appspot.com",
    messagingSenderId: "249191595233"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $('#addTrain').on('click',function(){
      let trainName = $('#').val().trim();
      let location = $('#').val().trim();
      let firstTrain = moment($('#')).val().trim();

      let newTrain = {
          name: trainName,
          place: location,
          train: firstTrain
      }

      database.ref().push(newTrain);
  });

  database.ref().on('child_added',function(childSnapshot){
      let trainName = childSnapshot.val().name;
      let location = childSnapshot.val().place;
      
  })