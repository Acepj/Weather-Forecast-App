WEATHER FORECAST 

# 🌤️ Weather Forecast Web App

This is a responsive weather forecast web app designed with a sleek UI and animated background features. It allows users to input a city name and view real-time weather details in a visually appealing layout.

---

## 🚀 Features

### ✅ **Responsive Design**
- Fully responsive layout using **Flexbox** and **media queries**
- Fluid typography and element sizing using **CSS `clamp()`**
- Optimized for all screen sizes: desktops, tablets, and mobile devices

### 🌆 **Dynamic Backgrounds**
- Weather card container (`.iinfo-container`) displays dynamic background images
- Smooth transitions when changing images
- Ensures images are properly scaled using `background-size: cover` and `background-position: center`

### 🎨 **Frosted Glass Effect**
- Weather info containers use a semi-transparent, blurred glass effect via:
  - `backdrop-filter: blur(7px)`
  - Box shadows for depth
- Visually separates data from background without sacrificing aesthetic

### 🔤 **City Input Field**
- Centered input for entering a city name
- Styled with modern UI design principles
- Input field adapts fluidly to screen size

### 🌡️ **Weather Information Display**
- Displays:
  - City name
  - Temperature (`.weather-deg`)
  - Weather condition (`.weather-condition`)
- Scalable font sizes for optimal readability

### ⚡ **Animations**
- Optional background animation using custom `@keyframes liquid`
- Adds a subtle moving liquid effect to the background of `.iinfo-container`

---

## 📁 File Structure (Main Parts)
```plaintext
/index.html       # Main HTML layout
/style.css        # Core responsive and animated styles
/images/          # Folder for background images (e.g., sun.jpg, philip.jpg)
