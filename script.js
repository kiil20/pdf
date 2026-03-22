// قائمة الملفات (ضع ملفات PDF الموجودة في نفس المسار)
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
    window.open(file, "_blank");
}

function downloadPDF(file) {
    const link = document.createElement("a");
    link.href = file;
    link.download = file;
    link.click();
}
