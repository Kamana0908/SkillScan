const fileInput = document.getElementById("fileInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const progress = document.getElementById("progress");
const statusText = document.getElementById("statusText");
const fileInfo = document.getElementById("fileInfo");
const resultBox = document.getElementById("result");
const resultList = document.getElementById("resultList");

// Handle file selection
if (fileInput) {
  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      fileInfo.textContent = `Selected File: ${fileName}`;
      statusText.textContent = "Ready to analyze.";
    }
  });
}

// Handle analysis simulation
if (analyzeBtn) {
  analyzeBtn.addEventListener("click", () => {
    if (!fileInput.files.length) {
      alert("Please select a resume file first!");
      return;
    }

    // Reset UI
    progress.style.width = "0%";
    resultBox.classList.add("hidden");
    resultList.innerHTML = "";
    statusText.textContent = "Starting AI analysis...";
    let width = 0;

    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        statusText.textContent = "Analysis Complete ✅";
        showResults();
      } else {
        width += 4;
        progress.style.width = width + "%";
        statusText.textContent = `Scanning... ${width}%`;
      }
    }, 200);
  });
}

// Display mock analysis results
function showResults() {
  resultBox.classList.remove("hidden");
  const mockResults = [
    "Detected Skills: Java, Python, React, SQL",
    "Resume Strength: 85%",
    "Suggestions: Add more project details and measurable achievements.",
    "Top Match: Software Developer, Backend Engineer"
  ];

  mockResults.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r;
    resultList.appendChild(li);
  });
}
