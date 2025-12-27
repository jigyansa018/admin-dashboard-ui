/* ===== BAR CHART ===== */
const canvas = document.getElementById("chart");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 200;

  const data = [120, 190, 150, 220, 180, 260];
  const barWidth = 40;
  const gap = 30;

  data.forEach((value, index) => {
    const x = index * (barWidth + gap) + 40;
    const y = canvas.height - value;
    ctx.fillStyle = "#2563eb";
    ctx.fillRect(x, y, barWidth, value);
  });
}

/* ===== DARK MODE ===== */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

/* ===== SIDEBAR TOGGLE ===== */
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

/* ===== FETCH API DATA ===== */
const tableBody = document.querySelector("tbody");

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  tableBody.innerHTML = "";
  users.forEach(user => {
    tableBody.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td class="active">Active</td>
      </tr>
    `;
  });
}

fetchUsers();
