// قائمة الملفات على GitHub Pages مباشرة
const pdfFiles = [
    "BackupMarV05.pdf",
    "file2.pdf",
    "file3.pdf"
];

const container = document.getElementById("pdf-list");

pdfFiles.forEach(file => {
    const card = document.createElement("div");
    card.className = "card";

    // نستخدم رابط GitHub Pages العام مباشرة
    const url = file; // لأن الملف في نفس المسار (pdf/)

    card.innerHTML = `
        <h3>${file}</h3>
        <div class="buttons">
            <button class="view" onclick="viewPDF('${url}')">عرض</button>
            <button class="download" onclick="downloadPDF('${url}')">تحميل</button>
        </div>
    `;

    container.appendChild(card);
});

function viewPDF(url) {
    const viewerContainer = document.getElementById("pdf-viewer-container");
    const viewer = document.getElementById("pdf-viewer");
    viewer.src = url; // يعرض PDF داخل iframe
    viewerContainer.style.display = "block";
}

function downloadPDF(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    link.click();
}
