import { rtkApi } from '@/shared/api/rtkApi';
import { Ai } from '../types/ai';

export const aiApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getChatResponse: builder.mutation<Ai, string>({
            query: (message) => {
                return {
                    url: `https://cors-anywhere.herokuapp.com/https://api.anthropic.com/v1/messages/`,
                    method: 'POST',
                    body: {
                        max_tokens: 200,
                        model: 'claude-3-opus-20240229',
                        messages: [{ role: 'user', content: message }],
                    },
                    headers: {
                        'x-api-key': import.meta.env.VITE_AI_API_KEY,
                        'anthropic-version': '2023-06-01',
                        Authorization: 'OK',
                    },
                };
            },
        }),
    }),
    overrideExisting: true,
});

export const { useGetChatResponseMutation } = aiApi;
