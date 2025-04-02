function shuffleImages() {
    const grid = document.getElementById("imageGrid");
    const images = Array.from(grid.children);
    images.sort(() => Math.random() - 0.5);
    grid.innerHTML = "";
    images.forEach(img => grid.appendChild(img));
}