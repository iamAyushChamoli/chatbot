import { Configuration } from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.REACT_APP_OPEN_AI_SECRET,
    organization: process.env.REACT_APP_OPENAI_ORAGANIZATION_ID,
  });
  return config;
};
