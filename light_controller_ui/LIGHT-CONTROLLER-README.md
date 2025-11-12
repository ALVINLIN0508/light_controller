# Smart Light Controller - JavaScript UI

A pure HTML/CSS/JavaScript version of the Tkinter Smart Light Controller. No backend required - runs entirely in the browser!

## 📁 Files

- `light-controller.html` - Main UI structure
- `light-controller.css` - Styling (light/dark themes)
- `light-controller.js` - UI logic and interactions

## 🚀 How to Run

### Option 1: Direct Open (Simplest)

```powershell
# Just double-click the HTML file, or:
Start-Process light-controller.html
```

### Option 2: Local Server (Recommended)

```powershell
# Using Python
python -m http.server 3000

# Using Node.js
npx http-server -p 3000

# Then open: http://localhost:3000/light-controller.html
```

## ✨ Features (Matching Tkinter Version)

### Core Functions

- ✅ **Power Toggle** - Turn light ON/OFF
- ✅ **Brightness Control** - Slider from 0-100%
- ✅ **Color Selection** - Warm, Natural, Cool
- ✅ **Theme Toggle** - Light mode ↔️ Dark mode (Night Mode)
- ✅ **Auto Mode Button** - Placeholder for future features

### UI Elements

- Status display showing light state
- Large power button
- Interactive brightness slider
- Three color selection buttons
- Mode control buttons

### Bonus Features

- **Keyboard Shortcuts**:
  - `Space` - Toggle power
  - `Arrow Up/Down` - Adjust brightness ±5%
  - `1/2/3` - Select color (Warm/Natural/Cool)
  - `T` - Toggle theme
- **Smooth animations** on all interactions
- **Responsive design** - works on mobile/tablet
- **Console logging** - All actions logged to browser console (F12)

## 🎨 Themes

### Light Theme (Default)

- White background
- Black text
- Light grey buttons

### Dark Theme (Night Mode)

- Black background
- White text
- Grey buttons

## 🔄 Comparison with Python Tkinter

| Feature           | Python (Tkinter) | JavaScript (HTML) |
| ----------------- | ---------------- | ----------------- |
| Power Toggle      | ✅               | ✅                |
| Brightness Slider | ✅               | ✅                |
| Color Buttons     | ✅               | ✅                |
| Theme Toggle      | ✅               | ✅                |
| Auto Mode         | Button only      | Button only       |
| Window Size       | 400x500          | 400px width       |
| Deployment        | .exe or .py      | Open in browser   |
| Platform          | Desktop only     | Any device        |

## 🛠️ Customization

### Change Colors

Edit `light-controller.css`:

```css
/* Light theme colors */
body.light-theme {
  background-color: white;
  color: black;
}

/* Dark theme colors */
body.dark-theme {
  background-color: black;
  color: white;
}
```

### Modify Brightness Range

Edit `light-controller.html`:

```html
<input type="range" min="0" max="100" <!-- Change max value here -- />
value="50">
```

### Add New Features

Edit `light-controller.js` and add your functions!

## 📱 Mobile Support

The UI is fully responsive and works on:

- Desktop browsers (Chrome, Firefox, Edge, Safari)
- Tablets
- Smartphones

## 🔮 Future Enhancements (To Be Added)

These match the commented imports in the Python version:

- [ ] API integration (fetch data from IoT server)
- [ ] Real-time clock display
- [ ] Auto mode implementation (circadian rhythm)
- [ ] Background tasks (periodic updates)
- [ ] Data persistence (localStorage)

## 🐛 Troubleshooting

### UI doesn't show up

- Make sure all 3 files are in the same folder
- Check browser console (F12) for errors

### Keyboard shortcuts don't work

- Click on the page first to give it focus

### Theme doesn't change

- Check if JavaScript is enabled in your browser
- Look for errors in console (F12)

## 📝 Notes

- This is a **UI-only version** - no backend connection
- All actions are logged to browser console
- Perfect for prototyping and design demonstrations
- Easy to deploy (just upload 3 files to any web host)

## 🎯 Use Cases

- UI/UX prototype for IoT light controller
- Teaching web development basics
- Design mockup for stakeholder presentations
- Foundation for adding backend API later

---

**Created by:** Following the Tkinter `tkinter_ui.py` design  
**Version:** 1.0  
**License:** MIT
