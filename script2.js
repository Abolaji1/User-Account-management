// get the required HTML elements
const loginForm = document.querySelector('form');
const loginUsername = document.querySelector('#username');
const loginPassword = document.querySelector('#password');
const userAccountsSection = document.querySelector('section:nth-of-type(1)');
const userDataSection = document.querySelector('section:nth-of-type(2)');
const userTable = document.querySelector('#userTable');
const createAccountButton = document.querySelector('button[type="submit"]');

// define an array of users
const users = [
  { username: 'admin', password: 'Kazeem123', permissions: 'admin' },
  { username: 'john_doe', password: 'johndoe123', permissions: 'user' },
  { username: 'jane_doe', password: 'janedoe123', permissions: 'user' }
];

// function to check if the user is an admin
function isAdmin(username) {
  const user = users.find(user => user.username === username);
  return user && user.permissions === 'admin';
}

// function to handle the login form submission
function handleLoginFormSubmit(event) {
  event.preventDefault(); // prevent the default form submission

  const username = loginUsername.value;
  const password = loginPassword.value;

  // check if the username and password are valid
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // clear the login form
    loginUsername.value = '';
    loginPassword.value = '';

    // check if the user is an admin
    const isAdminUser = isAdmin(username);

    // show/hide the user accounts and user data sections based on the user permissions
    userAccountsSection.style.display = isAdminUser ? 'block' : 'none';
    userDataSection.style.display = isAdminUser ? 'block' : 'none';

    // enable/disable the create account button based on the user permissions
    createAccountButton.disabled = !isAdminUser;
  } else {
    alert('Invalid username or password or not authorized!');
  }
}

// function to handle the edit and delete buttons
function handleUserActionButtonClick(event) {
  const button = event.target;
  const action = button.textContent.toLowerCase();

  if (action === 'edit') {
    // TODO: implement the edit user functionality
  } else if (action === 'delete') {
    // TODO: implement the delete user functionality
  }
}

// add event listeners to the login form and the user table
loginForm.addEventListener('submit', handleLoginFormSubmit);
userTable.addEventListener('click', handleUserActionButtonClick);

// hide the user accounts and user data sections by default
userAccountsSection.style.display = 'none';
userDataSection.style.display = 'none';


const createAccountForm = document.querySelector('#createAccountForm');
//const userTable = document.querySelector('#userTable');

// function to add a new user to the user table
function addUserToTable(username, email, permissions) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${username}</td>
        <td>${email}</td>
        <td>${permissions}</td>
        <td>
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        </td>
    `;
    nuserTable.querySelector('tbody').appendChild(newRow);
}

// event listener for form submit
createAccountForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = createAccountForm.elements.newUsername.value;
    const password = createAccountForm.elements.newPassword.value;
            const email = createAccountForm.elements.newEmail.value;
            const permissions = createAccountForm.elements.newPermissions.value;
    
            // clear form inputs
            createAccountForm.reset();
    
            // add new user to table
            addUserToTable(username, email, permissions);
        });


