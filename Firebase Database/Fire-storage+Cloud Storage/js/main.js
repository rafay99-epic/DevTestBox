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

    // Get references to the HTML elements
    const form = document.getElementById('assignment-form');
    const resultContainer = document.getElementById('result');

    // Handle form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form values
      const fullName = form.elements.fullname.value;
      const email = form.elements.email.value;
      const phone = form.elements.phone.value;
      const domain = form.elements.domain.value;
      const package = form.elements.package.value;
      const assignmentFile = form.elements['assignment-file'].files[0];
      const currentDate = new Date().toISOString().split('T')[0];
      const deadline = form.elements.deadline.value;
      const specialInstructions = form.elements['special-instructions'].value;
      // Store file in Firebase Storage
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(assignmentFile.name);
      const uploadTask = fileRef.put(assignmentFile);

      uploadTask.on('state_changed',
        (snapshot) => {
          // Upload progress monitoring
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload progress:', progress);
        },
        (error) => {
          // Upload error handling
          console.error('Error uploading file:', error);
        },
        () => {
          // Upload complete
          uploadTask.snapshot.ref.getDownloadURL()
            .then((downloadURL) => {
              // Store form data and file URL in Cloud Firestore
              return firebase.firestore().collection('assignments').add({
                fullName,
                email,
                phone,
                domain,
                package,
                assignmentFileURL: downloadURL,
                currentDate,
                deadline,
                specialInstructions
              });
            })
            .then(() => {
              // Clear form fields
              form.reset();

              // Show the result container
              resultContainer.style.display = 'block';
            })
            .catch((error) => {
              console.error('Error storing form data:', error);
            });
        }
      );
    });