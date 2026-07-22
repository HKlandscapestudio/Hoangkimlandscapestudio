const green365 = [
  {
  day: 3,
  title: "Xây dựng nền tảng hồ sơ năng lực",
  image: "assets/day-003.png"
},
  {
    day: 1,
    title: "Bắt đầu hành trình Green365",
    image: "assets/day-001.png"
  },

  {
    day: 2,
    title: "Thành quả Green365 Ngày 2",
    image: "assets/day-002.png"
  }
];

const gallery = document.getElementById("green365-gallery");

if (gallery) {
  const sortedDays = [...green365].sort((a, b) => b.day - a.day);

  sortedDays.forEach((item) => {
    const card = document.createElement("article");
    card.className = "green365-card";

    card.innerHTML = `
      <img
        src="${item.image}"
        alt="Green365 Ngày ${item.day}"
        loading="lazy"
      >

      <div class="green365-card-content">
        <span>
          Ngày ${String(item.day).padStart(3, "0")} / 365
        </span>

        <h3>${item.title}</h3>
      </div>
    `;

    gallery.appendChild(card);
  });
}
