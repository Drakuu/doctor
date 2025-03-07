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

 
// Sample data array (Appointments)
const appointments = [
    {
        id: 1,
        name: "Howard Tanner",
        email: "howard@contact.com",
        age: 25,
        gender: "Male",
        department: "Cardiology",
        date: "20th Dec 2020",
        time: "11:00 AM",
        doctor: "Dr. Calvin Carlo",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/01.jpg",
        doctorImage: "../public/assets/doctor/01.jpg"
    },
    {
        id: 2,
        name: "Wendy Filson",
        email: "wendy@contact.com",
        age: 28,
        gender: "Female",
        department: "Gynecology",
        date: "20th Dec 2020",
        time: "11:00 AM",
        doctor: "Dr. Cristino Murphy",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/02.jpg",
        doctorImage: "../public/assets/doctor/02.jpg"
    },
    {
        id: 3,
        name: "Faye Bridger",
        email: "faye@contact.com",
        age: 30,
        gender: "Female",
        department: "Psychotherapy",
        date: "21st Dec 2020",
        time: "2:00 PM",
        doctor: "Dr. Alia Reddy",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/03.jpg",
        doctorImage: "../public/assets/doctor/03.jpg"
    },
    {
        id: 4,
        name: "Ronald Curtis",
        email: "ronald@contact.com",
        age: 35,
        gender: "Male",
        department: "Orthopedic",
        date: "22nd Dec 2020",
        time: "9:00 AM",
        doctor: "Dr. Toni Kovar",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/04.jpg",
        doctorImage: "../public/assets/doctor/04.jpg"
    },
    {
        id: 5,
        name: "Melissa Hibner",
        email: "melissa@contact.com",
        age: 40,
        gender: "Female",
        department: "Dental",
        date: "22nd Dec 2020",
        time: "11:00 AM",
        doctor: "Dr. Jessica McFarlane",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/05.jpg",
        doctorImage: "../public/assets/doctor/05.jpg"
    },
    {
        id: 6,
        name: "Randall Case",
        email: "randall@contact.com",
        age: 50,
        gender: "Male",
        department: "Orthopedic",
        date: "23rd Dec 2020",
        time: "10:00 AM",
        doctor: "Dr. Toni Kovar",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/06.jpg",
        doctorImage: "../public/assets/doctor/06.jpg"
    },
    {
        id: 7,
        name: "Jerry Morena",
        email: "jerry@contact.com",
        age: 27,
        gender: "Male",
        department: "Dentist",
        date: "23rd Dec 2020",
        time: "3:00 PM",
        doctor: "Dr. Jessica McFarlane",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/07.jpg",
        doctorImage: "../public/assets/doctor/07.jpg"
    },
    {
        id: 8,
        name: "Lester McNally",
        email: "lester@contact.com",
        age: 33,
        gender: "Male",
        department: "Gastrology",
        date: "24th Dec 2020",
        time: "12:00 PM",
        doctor: "Dr. Elsie Sherman",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/08.jpg",
        doctorImage: "../public/assets/doctor/08.jpg"
    },
    {
        id: 9,
        name: "Christopher Burrell",
        email: "christopher@contact.com",
        age: 28,
        gender: "Female",
        department: "Urology",
        date: "24th Dec 2020",
        time: "4:00 PM",
        doctor: "Dr. Bertha Magers",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/09.jpg",
        doctorImage: "../public/assets/doctor/09.jpg"
    },
    {
        id: 10,
        name: "Deborah Turner",
        email: "deborah@contact.com",
        age: 38,
        gender: "Female",
        department: "Neurology",
        date: "25th Dec 2020",
        time: "1:00 PM",
        doctor: "Dr. Johnathan Smith",
        fees: "$50/Patient",
        patientImage: "../public/assets/client/10.jpg",
        doctorImage: "../public/assets/doctor/10.jpg"
    }
];


// Function to populate the table
function populateTable() {
    const tableBody = document.getElementById("tableBody");

    appointments.forEach(appointment => {
        const row = document.createElement("tr");
        row.classList.add("hover:bg-gray-50");

        row.innerHTML = `
            <td class="py-3 px-4 border-b">${appointment.id}</td>
            <td class="py-3 px-4 border-b">
                <div class="flex items-center">
                    <img class="w-8 h-8 rounded-full mr-3" src="${appointment.patientImage}" alt="${appointment.name}">
                    ${appointment.name}
                </div>
            </td>
            <td class="py-3 px-4 border-b">${appointment.email}</td>
            <td class="py-3 px-4 border-b">${appointment.age}</td>
            <td class="py-3 px-4 border-b">${appointment.gender}</td>
            <td class="py-3 px-4 border-b">${appointment.department}</td>
            <td class="py-3 px-4 border-b">${appointment.date}</td>
            <td class="py-3 px-4 border-b">${appointment.time}</td>
            <td class="py-3 px-4 border-b">
                <div class="flex items-center">
                    <img class="w-8 h-8 rounded-full mr-3" src="${appointment.doctorImage}" alt="${appointment.doctor}">
                    ${appointment.doctor}
                </div>
            </td>
            <td class="py-3 px-4 border-b">${appointment.fees}</td>
            <td class="py-3 px-4 border-b">
                <div class="flex justify-center space-x-4">
                    <!-- Icons for view, tick, and cross using FontAwesome -->
                    <button class="text-blue-500 hover:text-blue-700 text-lg">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-green-500 hover:text-green-700 text-lg">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="text-red-500 hover:text-red-700 text-lg">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Ensure the DOM is fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', (event) => {
    populateTable(); // Populate the table after DOM is ready
});
