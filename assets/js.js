var config = {
  apiKey: "cvs7zw",
  authDomain: "train-c0284.firebaseapp.com",
  databaseURL: "hcom",
  projectId: "tr4",
  storageBucket: "traipspocom",
  messagingSenderId: "5233"
};
firebase.initializeApp(config);
var database = firebase.database();

$('#addTrain').on('click',function(){
    let trainName = $('#train_name').val().trim();
    let destination = $('#destination').val().trim();
    let firstTrain = moment($('#first_train').val().trim(),"HH:mm").format("HH:mm");
    let frequency = $('#frequency').val().trim();

    let newTrain = {
        name: trainName,
        place: destination,
        train: firstTrain,
        fre: frequency,
      }
  database.ref().push(newTrain);
  $("#train_name").val("");
  $("#destination").val("");
  $("#first_train").val("");
  $("#frequency").val("");
  return false;
});


database.ref().on('child_added',function(childSnapshot){
    let trainName = childSnapshot.val().name;
    let destination = childSnapshot.val().place;
    let firstTrain = childSnapshot.val().train;
    let frequency = childSnapshot.val().fre;

    // let convertTime = moment(firstTrain,"HH:mm");
    // console.log(convertTime)
    let currentTime = moment().format("HH:mm");
    let currentMin = moment().format("mm");
    // console.log(currentMin);
    
    // let timeBtwn = moment().diff(moment(convertTime)+' min');
    let timeRemain = frequency - currentMin % frequency;
    console.log(timeRemain);

    
    
    let minsAwawy = frequency - timeRemain;
    // let nextTrain = moment().add(minsAwawy+" min").format("HH:mm");
    $('#schedule_table>tbody').append('<tr><td>'+trainName+"</td><td>"+destination+"</td><td>"+firstTrain+"</td><td>"+currentTime+"</td><td>"+frequency+"</td><td>"+timeRemain+"</td><td>");
});
