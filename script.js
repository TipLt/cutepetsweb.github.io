/* Created by: TipLt
   Date: 2025-01-23 14:17:06
*/

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});