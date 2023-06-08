const firebaseConfig = {
    apiKey: "AIzaSyAH702K7G1WnYuwhBGvfxTifOUi2Xj5pGE",
    authDomain: "future-insight-project-d-3804b.firebaseapp.com",
    projectId: "future-insight-project-d-3804b",
    storageBucket: "future-insight-project-d-3804b.appspot.com",
    messagingSenderId: "894723559000",
    appId: "1:894723559000:web:7124157875ed1a6a7a442d",
    measurementId: "G-HFNEYH0B3T"
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
    var file = $('#assignment-file').val();
    var package = $('#package').val();
    var currentDate = $('#current-date').val();
    var deadline = $('#deadline').val();

    // Save message
    saveMessage(name, email, phone, domain, file, package, currentDate, deadline);

    // Show result
    $('#result').show();

    // Clear form
    $('#assignment-form')[0].reset();
 });

  // Save message to Firebase
  function saveMessage(name, email, phone, domain, file, package, currentDate, deadline) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      phone: phone,
      domain: domain,
      file: file,
      package: package,
      currentDate: currentDate,
      deadline: deadline
    });
  }