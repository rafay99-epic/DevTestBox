// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBN26OZKDjZUwWKcU2zWbEhU7WGme1wYhM",
    authDomain: "future-insight-project-d-80cff.firebaseapp.com",
    databaseURL: "https://future-insight-project-d-80cff-default-rtdb.firebaseio.com",
    projectId: "future-insight-project-d-80cff",
    storageBucket: "future-insight-project-d-80cff.appspot.com",
    messagingSenderId: "448034602560",
    appId: "1:448034602560:web:355cd2b70da4a07df769a5",
    measurementId: "G-FWKZLBB4F6"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
$('#assignment-form').on('submit', function(e) {
    e.preventDefault();

    // Get values
    var name = $('#fullname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var domain = $('#domain').val();
    var package = $('#package').val();
    var currentDate = $('#current-date').val();
    var deadline = $('#deadline').val();

    // Save message
    saveMessage(name, email, phone, domain, package, currentDate, deadline);

    // Show result
    $('#result').show();

    // Clear form
    $('#assignment-form')[0].reset();
});

  // Save message to Firebase
function saveMessage(name, email, phone, domain, package, currentDate, deadline) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      phone: phone,
      domain: domain,
      package: package,
      currentDate: currentDate,
      deadline: deadline
    });
}