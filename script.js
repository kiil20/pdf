// قائمة الملفات (أضف ملفاتك هنا)
const pdfFiles = [
    "file1.pdf",
    "file2.pdf",
    "file3.pdf"
];

const container = document.getElementById("pdf-list");

pdfFiles.forEach(file => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${file}</h3>
        <div class="buttons">
            <button class="view" onclick="viewPDF('${file}')">عرض</button>
            <button class="download" onclick="downloadPDF('${file}')">تحميل</button>
        </div>
    `;

    container.appendChild(card);
});

function viewPDF(file) {
    window.open("pdfs/" + file, "_blank");
}

function downloadPDF(file) {
    const link = document.createElement("a");
    link.href = "pdfs/" + file;
    link.download = file;
    link.click();
}