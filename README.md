# 🤖 E.V.A. - Enhanced Voice Assistant

E.V.A. is a futuristic, voice-enabled virtual assistant built using Node.js, Express, TailwindCSS, and a powerful LLM (via Groq API). It can:

- Respond to general queries using an LLM
- Fetch real-time news
- Search Wikipedia and read aloud the result
- Open popular websites like YouTube, GitHub, Google, and more
- Speak the response using text-to-speech (`say` module)

## 🧠 Features

- 🎙 Voice command recognition using the browser's `SpeechRecognition` API
- 🗣 Voice responses using `say`
- 📄 Wikipedia integration
- 📰 News integration via `NewsAPI`
- 🌐 Smart web navigation (open YouTube, Google, etc.)
- 💡 AI-powered summaries using **Groq LLaMA-3 model**

## 🛠️ Tech Stack

- Node.js + Express.js
- EJS templating
- TailwindCSS for UI
- Groq SDK (LLaMA-3 LLM)
- Wikipedia + News APIs
- Say (TTS) + Opn (Open browser)

## 📦 Installation

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/eva-voice-assistant.git
   cd eva-voice-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   Create a `.env` file in the root:
   ```env
   PORT=8080
   NEWS_API=your_newsapi_key
   GROQ_API=your_groq_api_key
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Visit in browser**
   ```
   http://localhost:8080
   ```

## 🖥️ Project Structure

```
📁 eva-voice-assistant
├── controllers
│   └── assistantController.js  # Command handling logic
├── routes
│   └── virtualRoute.js         # API endpoint
├── services
│   ├── llmService.js           # AI response via Groq API
│   ├── newsService.js          # News fetch logic
│   └── wikipediaService.js     # Wikipedia search logic
├── views
│   └── main.ejs                # Frontend UI
├── .env                        # API keys and port
├── index.js                    # Entry point
├── package.json                # Project config
└── README.md                   # You are here!
```

## 🗣️ Sample Commands

- "Search on Wikipedia Sachin Tendulkar"
- "Open YouTube"
- "Show me the latest news"
- "Hey EVA"

## ⚠️ Notes

- **Text-to-speech (say)** may not work properly on all OSes. Install additional voices or test on macOS/Linux for best results.
- The web UI requires **Chrome or Edge** (SpeechRecognition API support).
- The Groq API must be set up correctly with access to the **LLaMA-3** model.

## 📸 UI Screenshot

> *(Add a screenshot of the UI here)*

## 🧑‍💻 Author

**Prashant Sali**  
[LinkedIn](https://www.linkedin.com/) | [GitHub](https://github.com/your-username)

## 📄 License

This project is licensed under the **ISC License**.