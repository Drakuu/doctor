function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle('hidden'); // Toggle hidden class to show or hide the menu
}

// Close the menu if clicking outside the menu or button
window.addEventListener('click', function (event) {
    const menu = document.getElementById('menuOptions');
    const button = document.querySelector('button');

    // Check if the click was outside the button and menu
    if (!menu.contains(event.target) && event.target !== button) {
        menu.classList.add('hidden'); // Hide the menu if clicking outside
    }
});
     // Define doctor data (expanded to 10 doctors)
     const doctors = [
        { name: "Dr. Calvin Carlo", department: "Eye Care", image: "../public/assets/doctor/01.jpg" },
        { name: "Dr. Cristina Murphy", department: "Gynecology", image: "../public/assets/doctor/02.jpg" },
        { name: "Dr. Alia Reddy", department: "Psychotherapy", image: "../public/assets/doctor/03.jpg" },
        { name: "Dr. Toni Kovar", department: "Orthopedic", image: "../public/assets/doctor/04.jpg" },
        { name: "Dr. Jessica McFarlane", department: "Dentist", image: "../public/assets/doctor/05.jpg" },
        { name: "Dr. Alan Smith", department: "Cardiology", image: "../public/assets/doctor/06.jpg" },
        { name: "Dr. Maria Lopez", department: "Neurology", image: "../public/assets/doctor/07.jpg" },
        { name: "Dr. James Brown", department: "Pediatrics", image: "../public/assets/doctor/08.jpg" },
        { name: "Dr. Sarah White", department: "Dermatology", image: "../public/assets/doctor/09.jpg" },
        { name: "Dr. John Davis", department: "Orthopedic", image: "../public/assets/doctor/10.jpg" }
      ];
  
     // Function to generate the card
     function createCard(doctor) {
        const card = document.createElement("div");
        card.classList.add("bg-white", "rounded-lg", "shadow-lg", "p-5", "text-center", "flex", "flex-col", "items-center", "border", "border-gray-300");
  
        const img = document.createElement("img");
        img.src = doctor.image;
        img.alt = doctor.name;
        img.classList.add(  "rounded-full", "object-cover", "m-4", );
  
        const name = document.createElement("h3");
        name.textContent = doctor.name;
        name.classList.add("font-bold", "text-lg", "text-gray-800", "mb-2");
  
        const department = document.createElement("p");
        department.textContent = doctor.department;
        department.classList.add("text-gray-500");
  
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(department);
  
        return card;
      }
  
      // Add cards to the container
      const container = document.getElementById("doctorCards");
  
      doctors.forEach(doctor => {
        const card = createCard(doctor);
        container.appendChild(card);
      });




      // Select the button
const button = document.getElementById('addDoctorBtn');

// Add a click event listener to navigate to the new page
button.addEventListener('click', () => {
  console.log("here");
  window.location.href = './newdoc.html'; // Replace 'add-doctor.html' with your target page URL
});

      // Select the button
