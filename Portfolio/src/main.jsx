import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
if (typeof window !== "undefined") {
  document.documentElement.classList.add("dark");
}
// ✅ Custom Cursor Movement
document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("custom-cursor");
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});
// ✅ Custom Cursor Click Effect
document.addEventListener("click", () => {
  const cursor = document.getElementById("custom-cursor");
  if (cursor) {
    cursor.classList.add("click-effect");
    setTimeout(() => {
      cursor.classList.remove("click-effect");
    }, 500); // Adjust duration as needed
  }
}); 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
