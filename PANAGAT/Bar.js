document.addEventListener("DOMContentLoaded", function () {
    // Sample data for the bars (you can replace it with your own data)
    const data = [80, 60, 40, 70];
  
    // Get the graph container element
    const graphContainer = document.getElementById("graphContainer");
  
    // Loop through the data and create bars dynamically
    for (let i = 0; i < data.length; i++) {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${data[i]}%`;
      bar.style.backgroundColor = getRandomColor(); // Function to generate random colors
      graphContainer.appendChild(bar);
    }
  });
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  