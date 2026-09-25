
    function toggleDarkMode() {
      document.body.classList.toggle('dark');
      const btn = document.querySelector('.toggle-btn');
      if (document.body.classList.contains('dark')) {
        btn.textContent = "☀️ Light Mode";
      } else {
        btn.textContent = "🌙 Dark Mode";
      }
    }