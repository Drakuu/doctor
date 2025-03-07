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

// Ensure DOM is fully loaded before initializing charts
document.addEventListener('DOMContentLoaded', function () {
  // First Chart: Bar Chart
  const ctx1 = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx1, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
              {
                  label: 'Male',
                  data: [400, 450, 320, 500, 520, 780, 620, 680, 720, 800, 850, 950],
                  backgroundColor: 'rgba(13, 110, 253, 0.8)',
                  categoryPercentage: 0.5,
                  barPercentage: 0.9,
              },
              {
                  label: 'Female',
                  data: [600, 550, 700, 820, 600, 400, 430, 460, 480, 520, 600, 700],
                  backgroundColor: 'rgba(25, 135, 84, 0.8)',
                  categoryPercentage: 0.4,
                  barPercentage: 0.9,
              },
              {
                  label: 'Children',
                  data: [300, 350, 400, 420, 300, 280, 340, 390, 350, 370, 340, 320],
                  backgroundColor: 'rgba(255, 193, 7, 0.8)',
                  categoryPercentage: 0.4,
                  barPercentage: 0.9,
              },
          ],
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
              },
              x: {
                  ticks: {
                      autoSkip: false,
                      maxRotation: 0,
                      minRotation: 0,
                  },
                  grid: {
                      display: false,
                  },
              },
          },
          responsive: true,
          maintainAspectRatio: false,
      },
  });

  // Second Chart: Multi-Layer Radial (Doughnut) Chart
  const ctx2 = document.getElementById('multiLayerRadialChart').getContext('2d');
  const percentages = [20, 15, 25, 10, 32.25]; // Example percentages for each section

  const multiLayerRadialChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
          labels: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Radiology'],
          datasets: [
              {
                  data: [50, 40, 60, 30, 69],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                  borderWidth: 1,
                  hoverOffset: 10,
              },
              {
                  data: [50, 30, 40, 20, 60],
                  backgroundColor: ['#FFD1DC', '#A2DFFF', '#FFF5CC', '#B3E7E7', '#D4C2FF'],
                  borderWidth: 1,
                  hoverOffset: 5,
              },
              {
                  data: [30, 25, 35, 15, 45],
                  backgroundColor: ['#FFE4E9', '#E5F7FF', '#FFFCE6', '#E6FAFA', '#EFEAFF'],
                  borderWidth: 1,
              },
          ],
      },
      options: {
          responsive: false,
          maintainAspectRatio: false,
          cutout: '70%', // Controls the central area size
          plugins: {
              legend: {
                  display: false,
              },
              tooltip: {
                  callbacks: {
                      label: function (context) {
                          return `${context.label}: ${context.raw}`;
                      },
                  },
              },
          },
      },
      plugins: [
        {
          id: 'centralText',
          beforeDraw: function (chart) {
            let total = 0;
            chart.data.datasets.forEach((dataset) => {
              total += dataset.data.reduce((a, b) => a + b, 0); // Sum up all data points
            });
            const { width } = chart;
            const ctx = chart.ctx;

            // Draw Central Text
            ctx.save();
            ctx.font = 'bold 16px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#666';
            ctx.fillText('Total', width / 2, width / 2 - 10);
            ctx.font = 'bold 20px sans-serif';
            ctx.fillStyle = '#333';
            ctx.fillText(`${total}`, width / 2, width / 2 + 10); // Display the summed total
            ctx.restore();
          },
        }
      ],
  });
});
