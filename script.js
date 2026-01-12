const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    room: document.getElementById("room").value,
    equipment: document.getElementById("equipment").value,
    date: document.getElementById("date").value,
    details: document.getElementById("details").value
  };

  fetch("https://script.google.com/macros/s/AKfycbwHZEQ0X9aMQY27OxZvDzcrH9k8vzS8sMWYt3qGikDiT-_XQYUujNZmasWOpquREHnq/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      alert("Shin บอกว่า OK ✅");
      form.reset();
    })
    .catch(err => {
      alert("เกิดข้อผิดพลาด ❌");
      console.error(err);
    });
});
