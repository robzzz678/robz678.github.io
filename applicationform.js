var form = document.getElementById('job-application-form');
const successMessage = document.getElementById('success-message');
const resetButton = document.getElementById('reset-button');
const dataDisplay = document.getElementById('data-display');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  successMessage.style.display = 'block';
  dataDisplay.style.display = 'block';

  // Display the entered data
  dataDisplay.innerHTML = `
    <h2 style="text-align:center"> Applicant Form Data Details:</h2>
    <p><strong>Job Title:</strong> ${form['job-title'].value}</p>
    <p><strong>Job Location:</strong> ${form['job-location'].value}</p>
    <p><strong>Job Description:</strong> ${form['job-description'].value}</p>
    <p><strong>Name:</strong> ${form['name'].value}</p>
    <p><strong>Email Address:</strong> ${form['email'].value}</p>
    <p><strong>Phone Number:</strong> ${form['phone'].value}</p>
    <p><strong>Resume:</strong> ${form['resume'].value}</p>
    <p><strong>Cover Letter:</strong> ${form['cover-letter'].value}</p>
    <p><strong>Education:</strong> ${form['education'].value}</p>
    <p><strong>Work Experience:</strong> ${form['work-experience'].value}</p>
    <p><strong>Skills:</strong> ${form['skills'].value}</p>
    <p><strong>References:</strong> ${form['references'].value}</p>
  `;
  
});

resetButton.addEventListener('click', () => {
  form.reset();
  hidedataDisplay();
  hideSuccessMessage();
});

function displaydataDisplay() {
  form.style.display = 'none';
  dataDisplay.style.display = 'block';
}

function hidedataDisplay() {
  form.style.display = 'block';
  dataDisplay.style.display = 'none';
}

function displaySuccessMessage() {
form.style.display = 'none';
successMessage.style.display = 'block';

}

function hideSuccessMessage() {
  form.style.display = 'block';
  successMessage.style.display = 'none';
}

