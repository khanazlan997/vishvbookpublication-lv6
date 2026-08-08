import React, { useState } from 'react';
import { Send, Check, Copy, ExternalLink, X, ShieldCheck, Sparkles, BookOpen, Users } from 'lucide-react';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
  telegramUrl?: string;
  telegramHandle?: string;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({
  isOpen,
  onClose,
  telegramUrl = "https://t.me/+LOvIryArnjxiNTRl",
  telegramHandle = "@vishvbook_official"
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(telegramUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md p-6 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100/80 hover:bg-slate-200/80 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Telegram Header Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 rounded-3xl bg-gradient-to-tr from-[#229ED9] to-[#38bdf8] flex items-center justify-center shadow-lg shadow-[#229ED9]/30 text-white transform -rotate-3 hover:rotate-0 transition-transform">
            <Send className="w-8 h-8 translate-x-[-1px] translate-y-[1px]" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Join VISHV BOOK Telegram
          </h3>
          <p className="mt-1 text-sm text-slate-500 max-w-xs">
            Connect directly with our publication desk to receive daily writing projects & guidelines.
          </p>
        </div>

        {/* Channel Details Box */}
        <div className="mt-6 p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs text-[#229ED9] font-bold text-lg">
              VB
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Official Channel</p>
              <p className="text-sm font-bold text-slate-800">{telegramHandle}</p>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#229ED9] bg-white hover:bg-sky-100/80 rounded-lg shadow-2xs border border-sky-200/60 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Action Steps */}
        <div className="mt-5 space-y-2 text-xs text-slate-600">
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
            <p>Click <strong>Join Channel</strong> to open Telegram app or web.</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
            <p>Subscribe to our official channel for verified handwriting & content project posts.</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
            <p>Message our admin desk to verify your writing sample & claim your first project!</p>
          </div>
        </div>

        {/* Direct Action Button */}
        <div className="mt-6 flex flex-col gap-2">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 bg-gradient-to-r from-[#229ED9] to-[#1d82b4] text-white font-bold text-center rounded-2xl shadow-3d-button flex items-center justify-center gap-2 group text-sm"
          >
            <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <span>JOIN TELEGRAM</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>

          <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>100% Verified Official Publication Telegram Desk</span>
          </div>
        </div>
      </div>
    </div>
  );
};
