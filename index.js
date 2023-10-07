const colorsSectionEl = document.getElementById("colors-section");
const colorSettingsEl = document.getElementById("color-settings");

colorSettingsEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const schemeModeEl = document.getElementById("scheme-mode")
  const rgbPaletteEl = document.getElementById("rgb-palette");

  fetch(`https://www.thecolorapi.com/scheme?hex=${rgbPaletteEl.value.substring(1)}&mode=${schemeModeEl.value}`)
    .then(res => res.json())
    .then(data => {
      const hexPalette = data.colors.map(color => color.hex.value)
      renderPalette(hexPalette);
    })
});

function renderPalette(colors) {
  const paletteDiv = document.createElement("div");
  paletteDiv.classList.add("hex-palette");

  colors.forEach(color => {
    const stripColor = document.createElement("div");
    stripColor.style.backgroundColor = color;

    paletteDiv.append(stripColor);
  });

  colors.forEach(color => {
    const colorName = document.createElement("p");
    colorName.classList.add("t-center");
    colorName.textContent = color;

    paletteDiv.append(colorName);
  });

  colorsSectionEl.append(paletteDiv);
};