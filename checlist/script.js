document.addEventListener('DOMContentLoaded', () => {
        const checkboxes = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        const downloadButton = document.querySelector('.download-button');

        let totalWeight = 0;
        checkboxes.forEach(checkbox => {
            totalWeight += parseInt(checkbox.dataset.weight || 0);
        });

        function updateProgressBar() {
            let checkedWeight = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    checkedWeight += parseInt(checkbox.dataset.weight || 0);
                }
            });

            const progressPercentage = totalWeight > 0 ? (checkedWeight / totalWeight) * 100 : 0;
            progressBar.style.width = `${progressPercentage.toFixed(0)}%`;
            progressText.textContent = `${progressPercentage.toFixed(0)}% adaptado`;
        }

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateProgressBar);
        });

        updateProgressBar(); // Inicial

        downloadButton.addEventListener('click', () => {
            const checklistElement = document.querySelector('.checklist-container');

            html2canvas(checklistElement).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF("p", "mm", "a4");
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('checklist_acessibilidade.pdf');
            });
        });
    });