import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/constants';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-125 hover:-translate-y-2 group active:scale-95 hover:shadow-2xl animate-bounce-soft"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-spin-slow transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:-translate-x-2 group-hover:scale-100 scale-75 origin-right">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
