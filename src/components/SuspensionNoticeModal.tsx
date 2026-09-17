import React, { useEffect } from 'react';
import { AlertTriangle, ShieldAlert, Lock } from 'lucide-react';

export const SuspensionNoticeModal: React.FC = () => {
  // Prevent scrolling and background actions
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      id="suspension-overlay"
      className="fixed inset-0 z-[9999999] flex items-center justify-center p-4 sm:p-6 select-none"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.70)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        id="suspension-modal-card"
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden text-center relative animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Warning Stripe */}
        <div className="h-2.5 bg-gradient-to-r from-red-500 via-amber-500 to-red-600 w-full" />

        <div className="p-6 sm:p-8 space-y-5">
          {/* Icon Badge */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center shadow-inner">
            <ShieldAlert className="w-9 h-9 text-red-600 animate-pulse" />
          </div>

          {/* Titles */}
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 border border-red-200">
              <Lock className="w-3.5 h-3.5" /> Site Suspended
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Website Suspended
            </h2>
            <p className="text-sm sm:text-base font-semibold text-red-600">
              Suspended by Ads Agency
            </p>
          </div>

          {/* Description & Notice */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="font-medium text-slate-800">
                This website and its associated services have been temporarily suspended by the Ads Agency administration.
              </p>
            </div>
            <p className="text-slate-600 pl-7 text-xs">
              All external links, user interactions, and outgoing traffic redirections are locked and restricted until this suspension is officially resolved.
            </p>
          </div>

          {/* Meta Information table */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-100/80 rounded-lg p-2.5 text-slate-600 border border-slate-200/60">
              <span className="block text-[10px] uppercase font-bold text-slate-400">Authority</span>
              <span className="font-semibold text-slate-800">Ads Agency Desk</span>
            </div>
            <div className="bg-slate-100/80 rounded-lg p-2.5 text-slate-600 border border-slate-200/60">
              <span className="block text-[10px] uppercase font-bold text-slate-400">Status</span>
              <span className="font-semibold text-red-600 flex items-center justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                Active Suspension
              </span>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-xs text-slate-500 font-medium pt-2 border-t border-slate-100">
            Please contact the Ads Agency administration to restore service access.
          </p>
        </div>
      </div>
    </div>
  );
};
