// Function to fetch PDF file URLs from GitHub API
async function fetchPDFFiles(repos) {
    const pdfFiles = [];

    for (const repo of repos) {
        const response = await fetch(`https://api.github.com/repos/${repo}/contents`);
        const files = await response.json();

        for (const file of files) {
            if (file.name.endsWith('.pdf')) {
                pdfFiles.push(file.download_url);
            }
        }
    }

    return pdfFiles;
}

// Example usage
const repos = ['kiil20/pdf']; // Add more repositories if needed
fetchPDFFiles(repos).then(pdfFiles => console.log(pdfFiles));