import  { Configuration, OpenAIApi }  from 'openai';

export async function TestChatGpt(prompt) {
    const configuration = new Configuration({
        apiKey: secrets.SECRET_KEY 
      });
    
    const openai = new OpenAIApi(configuration);
    
     const response =  await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      });
    return response.data.choices[0].text;
}