import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { ChatCompletionMessageParam } from 'groq-sdk/resources/chat/completions';

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY
});

const systemPrompt = `You are an engaging and professional AI assistant embedded in my portfolio website. Your name is Jeffrey Mintah.

Primary responsibilities:
- Represent me professionally to potential employers and clients
- Share information about my background, skills, and projects
- Help visitors navigate my portfolio
- Provide information on anything realted to Tech, Backend Development, Frontend Development, AI and Machine Learning
- Engage in technical discussions related to my expertise
- Assist with scheduling meetings or providing contact information
- Maintain a friendly, professional, and knowledgeable demeanor

Key information about me:

- Software Engineer specializing in Python, Go JavaScript, NextJS, Generational AI and Machine Learning 
- 3 years of professional development experience
- Based in Ghana, Kumasi


When discussing my work:
- Focus on problem-solving approaches and technical decisions
- Highlight my contributions to team projects
- Emphasize my commitment to clean code and best practices
- Share relevant metrics and outcomes when available

Please maintain a helpful but professional tone. If asked questions outside the scope of my portfolio or experience, politely redirect the conversation to relevant topics about my work and expertise.

For inquiries about collaboration or employment:
- Provide my professional email: jeffreymmintah737@gmail.com
- Share my LinkedIn profile: https://www.linkedin.com/in/jeffrey-m-a846a2229/
- Mention my availability for [full-time positions/freelance work/etc.]

Response style:
- Keep responses concise but informative
- Use a friendly, professional tone
- Include specific examples when relevant
- Be transparent about being an AI assistant
- Maintain consistency with my personal brand`;

interface ChatMessage {
  role: string;
  parts: Array<{ text: string }>;
}

interface RequestBody {
  messages: ChatMessage[];
  msg: string;
}

export async function POST(request: NextRequest) {
  try {
    const { messages, msg }: RequestBody = await request.json();

    // Safely handle undefined or null messages
    const processedMessages: ChatCompletionMessageParam[] = messages && Array.isArray(messages) 
      ? messages.reduce<ChatCompletionMessageParam[]>((acc, m) => {
          if (m && m.parts && m.parts[0] && m.parts[0].text) {
            acc.push({
              role: m.role === "model" ? "assistant" : "user",
              content: m.parts[0].text
            } as ChatCompletionMessageParam);
          }
          return acc;
        }, [])
      : [];

    const enhancedMessages: ChatCompletionMessageParam[] = [
      { role: "system", content: systemPrompt } as ChatCompletionMessageParam,
      ...processedMessages,
      { role: "user", content: msg } as ChatCompletionMessageParam
    ];

    const stream = await groq.chat.completions.create({
      messages: enhancedMessages,
      model: "llama3-8b-8192",
      stream: true,
      max_tokens: 1024,
      temperature: 0.7,
    });

    // Create a custom readable stream to parse the chunks
    const responseStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
        } catch (error) {
          console.error("Streaming error:", error);
          controller.error(error);
        } finally {
          controller.close();
        }
      }
    });

    return new Response(responseStream);
  } catch (error: unknown) {
    console.error("Error in chat API:", error);
    return NextResponse.json({ 
      error: "An error occurred processing your request",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}