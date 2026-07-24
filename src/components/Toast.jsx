import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1F1611] text-[#FAF6F0] px-6 py-4 rounded-xl shadow-2xl z-[100] flex items-center gap-3 border border-[#3D2F25] animate-in slide-in-from-bottom-5 duration-300">
      <CheckCircle className="w-5 h-5 text-[#6B8E5A] flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
