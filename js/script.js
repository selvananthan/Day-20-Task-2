document.addEventListener('DOMContentLoaded', function() {
    const filestackClient = filestack.init('YOUR_API_KEY'); // Replace with your Filestack API key

    const uploadBtn = document.getElementById('uploadBtn');
    const fileList = document.getElementById('fileList');

    uploadBtn.addEventListener('click', function() {
        filestackClient.picker({
            onUploadDone: function(result) {
                console.log(result);
                displayFiles(result.filesUploaded);
            }
        }).open();
    });

    function displayFiles(files) {
        fileList.innerHTML = '';
        files.forEach(file => {
            const li = document.createElement('li');
            li.textContent = `File: ${file.filename}, URL: ${file.url}`;
            fileList.appendChild(li);
        });
    }
});
