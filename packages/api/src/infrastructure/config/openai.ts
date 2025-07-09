import OpenAI from "openai";

export class DeepSeekConfig {
    static _instance: DeepSeekConfig
    private openAi: OpenAI
    static get instance() {
        if (!this._instance) {
            this._instance = new DeepSeekConfig()
        }
        return this._instance
    }

    protected constructor() {
        this.openAi = new OpenAI({
            baseURL: 'https://api.deepseek.com',
            apiKey: process.env.DEEPSEEK_API_KEY
        });
    }

   private async askDeepSeek(prompt: string) {
        const completion = await this.openAi.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                { role: "system", content: "You are a helpful assistant for privacy and tracker insights." },
                { role: "user", content: prompt }
            ]
        });
        return completion.choices[0].message.content;
    }

    async main(prompt: string) {
        return await this.askDeepSeek(prompt);
    }
}

