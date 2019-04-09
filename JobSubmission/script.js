let jobSubmissionForm = document.getElementById("jobSubmissionForm");


// Attach event handler to the form
// Note: forms are the owners of submit events
jobSubmissionForm.addEventListener('submit', handleSubmit, false);

function handleSubmit(event) {
    event.preventDefault();
}


/*
function printFormValues() {
    console.log("printFormValues called");
}

function getJobName() {
    console.log("getJobName called");
}*/