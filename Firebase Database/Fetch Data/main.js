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


// Get a reference to the Firestore database
  const db = firebase.firestore();
  
  // Function to fetch and display data in the table
  const fetchData = () => {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing table data
  
    db.collection('assignments')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          const tableRow = document.createElement('tr');
  
          const fields = [
            'assignmentFileURL',
            'currentDate',
            'deadline',
            'domain',
            'email',
            'fullName',
            'package',
            'phone',
            'specialInstructions'
          ];
  
          fields.forEach((field) => {
            const tableCell = document.createElement('td');
            if (field === 'assignmentFileURL') {
              const link = document.createElement('a');
              link.href = data[field];
              link.textContent = data[field];
              tableCell.appendChild(link);
            } else {
              tableCell.textContent = data[field];
            }
            tableRow.appendChild(tableCell);
          });
  
          const deleteCell = document.createElement('td');
          const deleteIcon = document.createElement('i');
          deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
          deleteCell.appendChild(deleteIcon);
          tableRow.appendChild(deleteCell);
  
          tableBody.appendChild(tableRow);
        });
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  };
  
  // Function to handle delete operation
  // Function to handle delete operation
const handleDelete = (docId) => {
    db.collection('assignments')
      .doc(docId)
      .delete()
      .then(() => {
        alert('Record deleted successfully!');
        fetchData(); // Refresh the table after deletion
      })
      .catch((error) => {
        console.log('Error deleting record:', error);
      });
  };
  
  
  // Event listener to handle delete icon click
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-icon')) {
      const tableRow = event.target.closest('tr');
      const docId = tableRow.dataset.docId;
      handleDelete(docId);
    }
  });
  
  // Fetch data on page load
  document.addEventListener('DOMContentLoaded', fetchData);
  




























document.addEventListener('DOMContentLoaded', fetchData);



















































// const fetchData = () => {
//     db.collection('assignments')
//         .get()
//         .then((snapshot) => {
//             snapshot.forEach((doc) => {
//                 const data = doc.data();
//                 const tableRow = document.createElement('tr');

//                 const fields = [
//                     'assignmentFileURL',
//                     'currentDate',
//                     'deadline',
//                     'domain',
//                     'email',
//                     'fullName',
//                     'package',
//                     'phone',
//                     'specialInstructions'
//                 ];

//                 fields.forEach((field) => {
//                     const tableCell = document.createElement('td');
//                     tableCell.textContent = data[field];
//                     tableRow.appendChild(tableCell);
//                 });

//                 const deleteCell = document.createElement('td');
//                 const deleteIcon = document.createElement('i');
//                 deleteIcon.classList.add('fas', 'fa-trash-alt', 'edit-icon');
//                 deleteCell.appendChild(deleteIcon);
//                 tableRow.appendChild(deleteCell);

//                 document.querySelector('tbody').appendChild(tableRow);
//             });
//         })
//         .catch((error) => {
//             console.log('Error fetching data:', error);
//         });
// };







// Working data with links and delete button

// const fetchData = () => {
//     db.collection('assignments')
//         .get()
//         .then((snapshot) => {
//             snapshot.forEach((doc) => {
//                 const data = doc.data();
//                 const tableRow = document.createElement('tr');

//                 const fields = [
//                     'assignmentFileURL',
//                     'currentDate',
//                     'deadline',
//                     'domain',
//                     'email',
//                     'fullName',
//                     'package',
//                     'phone',
//                     'specialInstructions'
//                 ];

//                 fields.forEach((field) => {
//                     const tableCell = document.createElement('td');
//                     if (field === 'assignmentFileURL') {
//                         const link = document.createElement('a');
//                         link.href = data[field];
//                         link.textContent = data[field];
//                         tableCell.appendChild(link);
//                     } else {
//                         tableCell.textContent = data[field];
//                     }
//                     tableRow.appendChild(tableCell);
//                 });

//                 const editCell = document.createElement('td');
//                 const deleteIcon = document.createElement('i');
//                 deleteIcon.classList.add('fas', 'fa-trash-alt', 'edit-icon');
//                 editCell.appendChild(deleteIcon);
//                 tableRow.appendChild(editCell);

//                 document.querySelector('tbody').appendChild(tableRow);
//             });
//         })
//         .catch((error) => {
//             console.log('Error fetching data:', error);
//         });
// };

// ...































// Working code with links
// const fetchData = () => {
//     db.collection('assignments')
//       .get()
//       .then((snapshot) => {
//         snapshot.forEach((doc) => {
//           const data = doc.data();
//           const tableRow = document.createElement('tr');
  
//           const fields = [
//             'assignmentFileURL',
//             'currentDate',
//             'deadline',
//             'domain',
//             'email',
//             'fullName',
//             'package',
//             'phone',
//             'specialInstructions'
//           ];
  
//           fields.forEach((field) => {
//             const tableCell = document.createElement('td');
  
//             if (field === 'assignmentFileURL') {
//               const link = document.createElement('a');
//               link.href = data[field];
//               link.target = '_blank';
//               link.textContent = data[field];
//               tableCell.appendChild(link);
//             } else {
//               tableCell.textContent = data[field];
//             }
  
//             tableRow.appendChild(tableCell);
//           });
  
//           document.querySelector('tbody').appendChild(tableRow);
//         });
//       })
//       .catch((error) => {
//         console.log('Error fetching data:', error);
//       });
//   };
  












// Working Code
// const fetchData = () => {
//     db.collection('assignments')
//       .get()
//       .then((snapshot) => {
//         snapshot.forEach((doc) => {
//           const data = doc.data();
//           const tableRow = document.createElement('tr');
  
//           const fields = [
//             'assignmentFileURL',
//             'currentDate',
//             'deadline',
//             'domain',
//             'email',
//             'fullName',
//             'package',
//             'phone',
//             'specialInstructions'
//           ];
  
//           fields.forEach((field) => {
//             const tableCell = document.createElement('td');
//             tableCell.textContent = data[field];
//             tableRow.appendChild(tableCell);
//           });
  
//           document.querySelector('tbody').appendChild(tableRow);
//         });
//       })
//       .catch((error) => {
//         console.log('Error fetching data:', error);
//       });
//   };
  
document.addEventListener('DOMContentLoaded', fetchData);