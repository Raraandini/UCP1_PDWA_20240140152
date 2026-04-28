// Array data anggota contoh
let members = [
  {
    name: "Andi Pratama",
    email: "andi@example.com",
    interest: "Web Development"
  },
  {
    name: "Siti Nurhaliza",
    email: "siti@example.com",
    interest: "UI/UX Design"
  },
  {
    name: "Budi Santoso",
    email: "budi@example.com",
    interest: "Cyber Security"
  }
];

// Menampilkan data anggota di halaman index.html
const memberTable = document.getElementById("memberTable");

if (memberTable) {
  members.forEach(function(member) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${member.name}</td>
      <td>${member.email}</td>
      <td>${member.interest}</td>
    `;

    memberTable.appendChild(row);
  });
}

// Form input anggota baru
const memberForm = document.getElementById("memberForm");

if (memberForm) {
  memberForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const interest = document.getElementById("interest").value;

    const newMember = {
      name: name,
      email: email,
      interest: interest
    };

    members.push(newMember);

    alert("Member data has been saved!");

    const formResult = document.getElementById("formResult");
    formResult.style.display = "block";
    formResult.innerHTML = `
      <h3>Submitted Data</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interest Field:</strong> ${interest}</p>
    `;

    memberForm.reset();
    console.log(members);
  });
}

// Multimedia interaction
function playAudio() {
  const audio = document.getElementById("communityAudio");
  audio.play();
}

function pauseAudio() {
  const audio = document.getElementById("communityAudio");
  audio.pause();
}

function showInfo() {
  alert("Welcome to Tech Community Multimedia Gallery!");
}

function changeImage() {
  const image = document.getElementById("communityImage");

  if (image.src.includes("1519389950473")) {
    image.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f";
  } else {
    image.src = "https://images.unsplash.com/photo-1519389950473-47ba0277781c";
  }
}