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
// const fetchData = (filters = {}) => {
//   const tableBody = document.querySelector('tbody');
//   tableBody.innerHTML = ''; // Clear existing table data

//   let query = db.collection('assignments');

//   // Apply filters
//   if (filters.deadline) {
//     query = query.where('deadline', '==', filters.deadline);
//   }
//   if (filters.package) {
//     query = query.where('package', '==', filters.package);
//   }

//   query
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         const data = doc.data();
//         const tableRow = document.createElement('tr');

//         const fields = [
//           'assignmentFileURL',
//           'currentDate',
//           'deadline',
//           'domain',
//           'email',
//           'fullName',
//           'package',
//           'phone',
//           'specialInstructions',
//         ];

//         fields.forEach((field) => {
//           const tableCell = document.createElement('td');
//           if (field === 'assignmentFileURL') {
//             const link = document.createElement('a');
//             link.href = data[field];
//             link.textContent = data[field];
//             tableCell.appendChild(link);
//           } else {
//             tableCell.textContent = data[field];
//           }
//           tableRow.appendChild(tableCell);
//         });

//         tableBody.appendChild(tableRow);
//       });
//     })
//     .catch((error) => {
//       console.log('Error fetching data:', error);
//     });
// };


// // Function to handle filter change
// const handleFilterChange = () => {
//   const deadline = document.getElementById('deadline-filter').value;
//   const selectedPackage = document.getElementById('package-filter').value;

//   const filters = {
//     deadline: deadline || null,
//     package: selectedPackage || null,
//   };

//   fetchData(filters);
// };

// // Event listeners for filter changes
// document.getElementById('deadline-filter').addEventListener('change', handleFilterChange);
// document.getElementById('package-filter').addEventListener('change', handleFilterChange);

// // Fetch data on page load
// document.addEventListener('DOMContentLoaded', fetchData);





// Function to fetch and display data in the table
// const fetchData = (filters = {}, searchTerm = '') => {
//   const tableBody = document.querySelector('tbody');
//   tableBody.innerHTML = ''; // Clear existing table data

//   let query = db.collection('assignments');

//   // Apply filters
//   if (filters.deadline) {
//     query = query.where('deadline', '==', filters.deadline);
//   }
//   if (filters.package) {
//     query = query.where('package', '==', filters.package);
//   }

//   query
//     .get()
//     .then((snapshot) => {
//       const filteredData = [];
//       snapshot.forEach((doc) => {
//         const data = doc.data();
//         filteredData.push(data);
//       });

//       // Apply search term
//       const searchData = searchTerm.trim().toLowerCase();
//       const filteredResults = filteredData.filter((item) => {
//         const email = item.email.toLowerCase();
//         const fullName = item.fullName.toLowerCase();
//         return email.includes(searchData) || fullName.includes(searchData);
//       });

//       filteredResults.forEach((item) => {
//         const tableRow = document.createElement('tr');

//         const fields = [
//           'assignmentFileURL',
//           'currentDate',
//           'deadline',
//           'domain',
//           'email',
//           'fullName',
//           'package',
//           'phone',
//           'specialInstructions',
//         ];

//         fields.forEach((field) => {
//           const tableCell = document.createElement('td');
//           if (field === 'assignmentFileURL') {
//             const link = document.createElement('a');
//             link.href = item[field];
//             link.textContent = item[field];
//             tableCell.appendChild(link);
//           } else {
//             tableCell.textContent = item[field];
//           }
//           tableRow.appendChild(tableCell);
//         });

//         tableBody.appendChild(tableRow);
//       });
//     })
//     .catch((error) => {
//       console.log('Error fetching data:', error);
//     });
// };

// // Function to handle filter change
// const handleFilterChange = () => {
//   const deadline = document.getElementById('deadline-filter').value;
//   const selectedPackage = document.getElementById('package-filter').value;

//   const filters = {
//     deadline: deadline || null,
//     package: selectedPackage || null,
//   };

//   fetchData(filters);
// };

// // Event listeners for filter changes
// document.getElementById('deadline-filter').addEventListener('change', handleFilterChange);
// document.getElementById('package-filter').addEventListener('change', handleFilterChange);

// // Function to handle search input change
// const handleSearchChange = () => {
//   const searchInput = document.getElementById('search-input').value;
//   fetchData({}, searchInput);
// };

// // Event listener for search input change
// document.getElementById('search-input').addEventListener('input', handleSearchChange);

// // Fetch data on page load
// document.addEventListener('DOMContentLoaded', fetchData);



// Function to fetch and display data in the table
const fetchData = (filters = {}, searchTerm = '') => {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = ''; // Clear existing table data

  let query = db.collection('assignments');

  // Apply filters
  if (filters.deadline) {
    const deadlineDate = new Date(filters.deadline);
    const nextDay = new Date(deadlineDate);
    nextDay.setDate(deadlineDate.getDate() + 1);
    query = query.where('deadline', '>=', deadlineDate).where('deadline', '<', nextDay);
  }
  if (filters.package) {
    query = query.where('package', '==', filters.package);
  }

  query
    .get()
    .then((snapshot) => {
      const filteredData = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        filteredData.push(data);
      });

      // Apply search term
      const searchData = searchTerm.trim().toLowerCase();
      const filteredResults = filteredData.filter((item) => {
        const email = item.email.toLowerCase();
        const fullName = item.fullName.toLowerCase();
        return email.includes(searchData) || fullName.includes(searchData);
      });

      filteredResults.forEach((item) => {
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
          'specialInstructions',
        ];

        fields.forEach((field) => {
          const tableCell = document.createElement('td');
          if (field === 'assignmentFileURL') {
            const link = document.createElement('a');
            link.href = item[field];
            link.textContent = item[field];
            tableCell.appendChild(link);
          } else {
            tableCell.textContent = item[field];
          }
          tableRow.appendChild(tableCell);
        });

        tableBody.appendChild(tableRow);
      });
    })
    .catch((error) => {
      console.log('Error fetching data:', error);
    });
};

// Function to handle filter change
const handleFilterChange = () => {
  const deadline = document.getElementById('deadline-filter').value;
  const selectedPackage = document.getElementById('package-filter').value;

  const filters = {
    deadline: deadline || null,
    package: selectedPackage || null,
  };

  fetchData(filters);
};

// Event listeners for filter changes
document.getElementById('deadline-filter').addEventListener('change', handleFilterChange);
document.getElementById('package-filter').addEventListener('change', handleFilterChange);

// Function to handle search input change
const handleSearchChange = () => {
  const searchInput = document.getElementById('search-input').value;
  fetchData({}, searchInput);
};

// Event listener for search input change
document.getElementById('search-input').addEventListener('input', handleSearchChange);

// Fetch data on page load
document.addEventListener('DOMContentLoaded', fetchData);