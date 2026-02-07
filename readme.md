# ❤️ Will You Be My Valentine?

A whimsical, interactive, and fully responsive web application designed to pop the big question in the cutest way possible! This project features a playful "No" button that playfully "runs away" from the user, cycling photos, smooth animations, and a heartfelt surprise on the "Yes" page.

---

## ✨ Features

- **🏃‍♂️ Elusive "No" Button**: The "No" button fluidly moves away from the cursor, making it almost impossible to click!
- **📸 Dynamic Photo Cycling**: Every time the "No" button is hovered, the main image cycles through a collection of photos (1.png to 5.png).
- **💓 Romantic "Yes" Page**: A dedicated celebration page with:
  - **Floating Heart Animation**: Beautiful hearts popping up from the bottom of the screen.
  - **Romantic Background Music**: Custom background music that starts at a specific emotional peak.
- **📱 Fully Responsive**: Designed to work perfectly on desktops, tablets, and smartphones.
- **📁 Organized Structure**: Separated folders for styles, scripts, assets, and pages for easy maintenance.

---

## 🛠️ Project Structure

```text
├── assets/          # 🖼️ Images (1.png-5.png, final.png), Music, and Icons
├── pages/           # 📄 Secondary pages (yes.html)
├── scripts/         # ⚙️ Logic (script.js for main, yes.js for celebration)
├── styles/          # 🎨 Styling (styles.css for main, yes.css for celebration)
└── index.html       # 🏠 The main entry point
```

---

## 🚀 How to Customize

Want to make this project your own? It's as simple as swapping out the assets!

### 1. Change the Photos

- Go to the `assets/` folder.
- Replace `1.png`, `2.png`, `3.png`, `4.png`, and `5.png` with your own photos.
- Replace `final.png` with the photo you want to show on the "Yes" page.
- **Note**: Keep the filenames exactly the same or update the logic in `scripts/script.js`.

### 2. Update the Messages

- Open `scripts/script.js`.
- Modify the `messages` array to include your own playful text or inside jokes.

### 3. Change the Music

- Replace `assets/music2.mp3` and `assets/whoosh.mp3` with your favorite romantic tracks or sound cue.

### 4. Adjust the Text

- Edit `index.html` or `pages/yes.html` to update the names or specific wording.

---

## 💻 How to Run

1. **Clone/Fork** the repository.
2. Simply open `index.html` in any modern web browser.
3. **No server side code required!** Just pure HTML, CSS, and Vanilla JavaScript.

---

## 📜 License

Created with ❤️ for pookies everywhere. Feel free to use, modify, and share!

> "Knew you would say yes!"
