// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
    const theme = document.getElementById("theme");
    setTimeout(() => {
      toast.innerHTML = "Calculator";
    }, 1500);
    if (theme.getAttribute("href") === lightTheme) {
      theme.setAttribute("href", darkTheme);
      themeIcon.setAttribute("src", sunIcon);
      toast.innerHTML = "Dark Mode 🌙";
    } else {
      theme.setAttribute("href", lightTheme);
      themeIcon.setAttribute("src", moonIcon);
      toast.innerHTML = "Light Mode ☀️";
    }
  }