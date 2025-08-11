import searchWikipedia from "../services/wikipediaService.js";
import getNews from "../services/newsService.js";
import getResponse from "../services/llmService.js";
import say from "say";
import opn from "opn";
export async function virtualAssistant(req, res) {
    try {
        let {text} = req.body;
        text = text.toLowerCase();
        console.log(text);

        let clearText = text.replace(/\b(please|now|can you|kindly)\b/gi, '').trim();

        if(clearText.includes('search on wikipedia')) {
            let searchQuery = clearText.replace('search on wikipedia', '').trim();
            if(searchQuery) {
                const wikipediaData = await searchWikipedia(searchQuery)
                if(wikipediaData && wikipediaData.content) {
                    console.log(wikipediaData.content);
                    await say.speak(wikipediaData.content);
                    res.status(200).json({message: wikipediaData.content});
                }
                else {
                    res.status(400).json({error: "Error processing your request."});
                }
            }
            else{
                res.status(400).json({error: "Please provide a search query."});
                say.speak("Please provide a search query.");
            }
        }

        else if(clearText.includes('open youtube')) {
            say.speak("Opening Youtube");
            opn("https://www.youtube.com/");
        }
        else if(clearText.includes('open github')) {
            say.speak("Opening Github");
            opn("https://www.github.com/");
        }
        else if(clearText.includes('open google')) {
            say.speak("Opening Gooogle");
            opn("https://www.google.com/");
        }
        else if(clearText.includes('open instagram')) {
            say.speak("Opening Instagram");
            opn("https://www.instagram.com/");
        }
        else if(clearText.includes('open telegram')) {
            say.speak("Opening Telegram");
            opn("https://web.telegram.org/");
        }
        else if(clearText.includes('hello eva')) {
            say.speak("Hello Prashant, How can I help you?");
        }
        else if(clearText.includes('news')) {
            const newsData = await getNews();

            if(newsData && newsData.length > 0) {
                console.log(newsData[1].title);
                await say.speak(newsData[1].title);
                res.status(200).json({message: newsData[1].title});
            }
            else{
                res.status(400).json({error: "Error processing your request."});
            }
        }
        else{
            const response = await getResponse(clearText);
            console.log(response);
            await say.speak(response);
            res.status(200).json({message: response});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}