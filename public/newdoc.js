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



  // Get the 'Back' button by its ID
  const button = document.getElementById('back');

  // Add a click event listener to the 'Back' button
  button.addEventListener('click', () => {
    console.log("here");
    window.location.href = '.../doctors.html'; // Make sure this path is correct
  });