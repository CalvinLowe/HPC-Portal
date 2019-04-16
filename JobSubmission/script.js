// Form
let jobSubmissionForm = document.getElementById("jobSubmissionForm");

// Buttons
let saveJobButton = document.getElementById("saveJobButton");

// Outputs
let saveAs = document.getElementById("saveAsOutput");

// Attach event handler to the form
// Note: forms are the owners of submit events
jobSubmissionForm.addEventListener('submit', handleSubmit, false);

// Attach event handler to the button
saveJobButton.addEventListener('click', handleSaveAs, false);

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    formData = new FormData(jobSubmissionForm); // TODO: turn this into a helper function

    for (var [key, value] of formData.entries()) { 
        //console.log(key, value);
    }
    // Need to check whether file has a name or is valid else ignore it.
}

// Handle saving the form as a PBS script
function handleSaveAs(event) {
    console.log("handleSaveAs handler called");
    event.preventDefault();
    formData = new FormData(jobSubmissionForm); // TODO: turn this into a helper function

    for (var [key, value] of formData.entries()) { 
        var line = key + ": " + value; // string builder for each key value pari
        saveAsOutput.appendChild(document.createElement("hr"));
        saveAsOutput.appendChild(document.createTextNode(line)); // append a template literal instead if you want to output in the pbs script format
    }
}