const username = "kiil20";
const repo = "pdf";

// جلب ملفات PDF من GitHub API
const apiURL = `https://api.github.com/repos/${username}/${repo}/contents/`;

fetch(apiURL)
    .then(res => res.json())
    .then(files => {
        const container = document.getElementById("pdf-list");

        files.forEach(file => {
            if (file.name.endsWith(".pdf")) {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <h3>${file.name}</h3>
                    <div class="buttons">
                        <button class="view" onclick="viewPDF('${file.download_url}')">عرض</button>
                        <button class="download" onclick="downloadPDF('${file.download_url}')">تحميل</button>
                    </div>
                `;

                container.appendChild(card);
            }
        });
    })
    .catch(err => {
        document.getElementById("pdf-list").innerHTML = "❌ حدث خطأ في تحميل الملفات";
        console.error(err);
   });

// عرض PDF داخل iframe
function viewPDF(url) {
    const viewerContainer = document.getElementById("pdf-viewer-container");
    const viewer = document.getElementById("pdf-viewer");
    viewer.src = url;          // تعيين الملف للإطار
    viewerContainer.style.display = "block"; // اظهار الإطار
}

// تحميل PDF عند الضغط على زر التحميل
function downloadPDF(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    link.click();
}
