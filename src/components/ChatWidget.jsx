import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const chatSystemPrompt = `You are Lebo, the friendly and knowledgeable renovation advisor for Deskab Projects — a trusted renovation and construction company based in Olievenhoutbosch, Centurion, South Africa.

Company Info:
- Base: Olievenhoutbosch, Centurion, 0187, Gauteng, South Africa
- Stats: 8+ years experience, 350+ projects completed, 98% satisfaction rate
- Services: Painting (interior/exterior/waterproofing), Tiling (ceramic/porcelain/mosaic), Wooden Floors (hardwood/laminate/sanding/sealing), Ceilings & Cornices (Rhinoboard/PVC/bulkhead/LED), Drywalling (steel stud partitions/soundproofing), Carpentry (built-in cupboards/kitchens/doors), Plumbing (geysers/bathrooms/burst pipes), Electrical (DB boards/wiring/lighting/COC certificates), Building (extensions/boundary walls/turnkey construction), Solar Installation (panels/inverters/lithium batteries/hybrid systems)
- Contact email: deskabrenovations01@gmail.com
- Guarantee: All work guaranteed, electrical work comes with COC certificate, 4.9/5 star rating locally
- Pricing Guide: Painting from R35/m², Tiling from R150/m² (supply & install), Solar systems from R60,000 (5kW), Extensions from R8,500/m². Free quotes and site visits — responses within 48 hours.
- Service Area: Centurion, Pretoria, Midrand, and surrounding Gauteng areas.

Behaviour:
- Be warm, helpful, and knowledgeable — like a trusted friend who knows renovations.
- Answer specific questions about painting, tiling, solar, plumbing, electrical, building, floors, ceilings, drywalling, and carpentry.
- For pricing, give honest ranges and always recommend a free site visit for an accurate quote.
- Encourage users to contact via email: deskabrenovations01@gmail.com

Formatting Rules:
- Keep answers concise, clear, and helpful (max 2-3 short paragraphs or bullet points).
- Use plain, friendly South African language.
- Format key numbers or bullet lists cleanly.
- Never output code fences or raw markdown code blocks.`;



function formatBotResponse(text) {
  if (!text) return '';

  let cleaned = text
    .replace(/```[a-z]*\n?/gi, '')
    .replace(/```/g, '')
    .trim();

  // Convert bold **text** -> <strong>
  cleaned = cleaned.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#B8651B]">$1</strong>');

  // Convert italic *text* -> <em>
  cleaned = cleaned.replace(/\*(.*?)\*/g, '<em class="italic text-[#7A6B5E]">$1</em>');

  // Parse paragraphs and bullet lists
  const lines = cleaned.split('\n');
  let inList = false;
  let listType = 'ul';
  let htmlResult = [];

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inList) {
        inList = false;
        htmlResult.push(`</${listType}>`);
      }
      htmlResult.push('<div class="h-2"></div>');
      return;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
      if (!inList) {
        inList = true;
        listType = 'ul';
        htmlResult.push('<ul class="my-2 space-y-1.5 pl-4 list-disc marker:text-[#B8651B]">');
      }
      const content = trimmed.replace(/^[-*•]\s+/, '');
      htmlResult.push(`<li class="text-sm leading-relaxed">${content}</li>`);
    } else if (/^\d+\.\s/.test(trimmed)) {
      if (!inList) {
        inList = true;
        listType = 'ol';
        htmlResult.push('<ol class="my-2 space-y-1.5 pl-4 list-decimal marker:text-[#B8651B]">');
      }
      const content = trimmed.replace(/^\d+\.\s+/, '');
      htmlResult.push(`<li class="text-sm leading-relaxed">${content}</li>`);
    } else {
      if (inList) {
        inList = false;
        htmlResult.push(`</${listType}>`);
      }
      htmlResult.push(`<p class="leading-relaxed text-sm my-1 text-[#1F1611]">${trimmed}</p>`);
    }
  });

  if (inList) {
    htmlResult.push(`</${listType}>`);
  }

  return htmlResult.join('');
}

export default function ChatWidget({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([{ role: 'system', content: chatSystemPrompt }]);
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && !initialized) {
      setInitialized(true);
      setMessages([
        {
          role: 'assistant',
          content: formatBotResponse(`Hi! I'm **Lebo**, your renovation advisor at Deskab Projects. 👋

How can I help you today?
- **Get a price estimate** for painting, tiling, solar, or any of our 10 services
- **Renovation advice** — what materials, timeframes, and what to expect
- **Quick questions** about our services in Centurion and Pretoria`)
        }
      ]);
    }
  }, [isOpen, initialized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (textToSend) => {
    const text = textToSend || input;
    if (!text || !text.trim()) return;

    const userMsg = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const updatedHistory = [...history, userMsg];
    setHistory(updatedHistory);

    try {
      let responseText = '';
      if (window.puter && window.puter.ai) {
        const response = await window.puter.ai.chat(updatedHistory);
        if (response && response.message && response.message.content) {
          responseText = response.message.content;
        } else if (typeof response === 'string') {
          responseText = response;
        } else {
          responseText = "I'm here to answer your thatch roofing questions. Ask me about pricing, reed types, repairs, or lapa design!";
        }
      } else {
        // High quality formatted fallback
        const lower = text.toLowerCase();
        if (lower.includes('cost') || lower.includes('price')) {
          responseText = `**Thatch Roof Cost Guide:**\n\n- **New Construction**: R2,500 – R4,500 per m²\n- **Custom Lapas**: R85,000 – R180,000\n- **Roof Inspection**: ~R1,500 (photographic report)\n\n*We offer free site visits and fixed-price quotes within 7 days!*`;
        } else if (lower.includes('lifespan') || lower.includes('long')) {
          responseText = `**Thatch Roof Lifespan:**\n\n- **Cape Reed**: 35 – 50 years (ideal for coastal & high moisture)\n- **Water Reed**: 30 – 45 years (classic rustic lodge feel)\n- **Ridge Replacement**: Every 12 – 15 years as routine care`;
        } else if (lower.includes('repair') || lower.includes('leak')) {
          responseText = `**Repair & Restoration Services:**\n\n- Leak sealing & localized patch re-thatching\n- Ridge rebuilds (flush cut, block, or ornamental)\n- 24/7 emergency storm damage response\n\nCall our emergency line directly at **+27 11 123 4567** for urgent callouts.`;
        } else {
          responseText = `Superior Thatch has **28+ years of heritage craftsmanship** across South Africa.\n\nWould you like me to connect you with our team for a **free site visit** or quote? You can also call us on **+27 11 123 4567**.`;
        }
      }

      const formattedContent = formatBotResponse(responseText);
      const botMsg = { role: 'assistant', rawContent: responseText, content: formattedContent };
      setMessages((prev) => [...prev, botMsg]);
      setHistory((prev) => [...prev, { role: 'assistant', content: responseText }]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorFormatted = formatBotResponse("I'm having trouble connecting right now. Please call us on **+27 11 123 4567** or email **hello@superiorthatch.co.za** and we'll help you right away!");
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: errorFormatted
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        id="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        className="border-none cursor-pointer shadow-xl hover:scale-105 transition-transform"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </button>

      {isOpen && (
        <div id="chat-panel" role="dialog" aria-label="Chat with Lebo" className="shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1F1611] via-[#2A1810] to-[#1F1611] p-4 text-white flex items-center justify-between border-b border-[#3D2F25]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8A04E] to-[#B8651B] flex items-center justify-center font-display font-bold text-sm text-white shadow-md">
                  L
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#6B8E5A] border-2 border-[#1F1611]"></span>
              </div>
              <div>
                <div className="font-semibold text-sm flex items-center gap-1.5">
                  <span>Lebo</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#B8651B]/30 text-[#E8A04E] text-[10px] uppercase font-bold tracking-wider">
                    Renovation Advisor
                  </span>
                </div>
                <div className="text-[11px] text-white/60 flex items-center gap-1.5 mt-0.5">
                  <Sparkles className="w-3 h-3 text-[#E8A04E]" />
                  <span>Powered by Puter AI · Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF6F0]">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'user' ? (
                  <div className="bg-gradient-to-br from-[#B8651B] to-[#8B4A14] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[82%] text-sm leading-relaxed shadow-md">
                    {m.content}
                  </div>
                ) : (
                  <div className="flex gap-2.5 items-start max-w-[92%]">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#B8651B] to-[#E8A04E] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5 shadow-sm">
                      L
                    </div>
                    <div className="bg-white border border-[#E8DDD0] text-[#1F1611] rounded-2xl rounded-tl-sm p-4 text-sm shadow-sm hover:shadow-md transition-shadow">
                      <div dangerouslySetInnerHTML={{ __html: m.content }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#B8651B] to-[#E8A04E] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5 shadow-sm">
                    T
                  </div>
                  <div className="bg-white border border-[#E8DDD0] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 shadow-sm items-center">
                    <span className="text-xs text-[#7A6B5E] font-medium mr-1">Lebo is typing</span>
                    <span className="typing-dot w-1.5 h-1.5 bg-[#B8651B] rounded-full inline-block"></span>
                    <span className="typing-dot w-1.5 h-1.5 bg-[#B8651B] rounded-full inline-block"></span>
                    <span className="typing-dot w-1.5 h-1.5 bg-[#B8651B] rounded-full inline-block"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-3 py-2.5 bg-[#F2E8DA] border-t border-[#E8DDD0] flex gap-2 overflow-x-auto scrollbar-none">
            <button onClick={() => handleSend("How much does painting cost per m²?")} className="suggestion-chip hover:border-[#B8651B]">
              🖌️ Painting cost?
            </button>
            <button onClick={() => handleSend("What size solar system do I need?")} className="suggestion-chip hover:border-[#B8651B]">
              ☀️ Solar system sizing?
            </button>
            <button onClick={() => handleSend("How long does a bathroom renovation take?")} className="suggestion-chip hover:border-[#B8651B]">
              🚿 Bathroom reno time?
            </button>
            <button onClick={() => handleSend("Do you do drywalling and ceilings?")} className="suggestion-chip hover:border-[#B8651B]">
              🏠 Drywalling & ceilings?
            </button>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-[#E8DDD0] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Lebo about painting, solar, tiling, electrical…"
              className="flex-1 px-4 py-2.5 bg-[#FAF6F0] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#B8651B]/40 border border-[#E8DDD0]"
            />
            <button
              onClick={() => handleSend()}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8651B] to-[#8B4A14] hover:opacity-90 flex items-center justify-center text-white transition-opacity flex-shrink-0 border-none cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
