
import { Configuration, OpenAIApi } from "openai";

const models = ['text-davinci-003','code-davinci-002','gpt-3.5-turbo','gpt-4'];


export class OpenAI {
    #configuration = null;
    #openai = null;

    constructor() {
        this.#configuration = new Configuration( {apiKey: process.env.OPENAI_API_KEY} );
        this.#openai = new OpenAIApi(this.#configuration);
    }

    static create() {
    }

    async ctText(question) {

        try {
            const res = await this.#openai.createChatCompletion({
                model: process.env.OPENAI_MODEL,
                messages:[{role:"user",content: question},
                stream:'false'],
            });

            return res;
        }
        catch(error) {
            console.log("OpenAI happen error!");
            console.log(error);
        }
    }

    static ctImage() {

    }

    static ctVoice() {

    }
}
