
## Code Overview

### 1. HTML (`index.html`)

- **Main Elements:**
  - `#overlay`: Displays chapter intro (title and legend).
  - `#parallaxBackground`: Parallax scrolling background.
  - `#storyBox`: Shows the current chapter's narrative.
  - `#buttonBox`: Holds choice buttons (A–D).

- **Scripts:**
  - Loads JavaScript files: `jsonload.js`, `english.js`, and `script.js`.

---

### 2. JavaScript (`script.js`)

- **Main Functions:**
  - `initVisuals()`: Builds parallax layers.
  - `showIntro()`: Displays chapter intro overlay.
  - `loadNewChapter()`: Loads the current chapter's text and buttons based on the `story` object.
  
- **Event Listeners:**
  - `optionA/B/C/D()`: Handlers for user choices, update `chapterIndex`, and trigger `loadNewChapter()`.

- **Story Flow:**
  - Story data is loaded from `english.js` into a `story` object.
  - Each chapter has:
    - `chapterDescription`
    - `options`: An array with option labels, descriptions, and `nextChapterIndex`.

---

### 3. CSS (`style.css`)

- **Parallax Effect:**
  - `.parallaxLayer`: Uses keyframe animations to create a scrolling background effect.
  
- **Chapter Overlay:**
  - `#overlay`: Fades in/out chapter intros with a 4-second animation.
  
- **Responsive Design:**
  - Several `@media` queries ensure readability across devices.

- **Buttons:**
  - Styled with hover effects and responsive sizing.

---

## Story Data (`english.js`)

- **Structure Example:**

```js
var english = {
  "chapters": [
    {
      "chapter": {
        "intro": { "title": "~ Nightfall ~", "legend": " " },
        "chapterIndex": 0,
        "chapterDescription": "Welcome to the game...",
        "options": [
          {
            "option": "A",
            "nextChapterIndex": 1,
            "optionDescription": "A: Yes."
          },
          ...
        ]
      }
    },
    ...
  ]
};
