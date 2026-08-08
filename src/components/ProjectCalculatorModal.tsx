import React, { useState } from 'react';
import { X, CheckCircle2, Send, Calculator, BookOpen, Clock, IndianRupee } from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  pages: string;
  duration: string;
  reward: string;
  rewardNum: number;
  highlight?: boolean;
}

export const PROJECTS: ProjectData[] = [
  { id: 'p1', name: 'Project 1', pages: '50 Pages (Front+Back = 100)', duration: '7 Days', reward: '₹13,500', rewardNum: 13500 },
  { id: 'p2', name: 'Project 2', pages: '90 Pages (Front+Back = 180)', duration: '10 Days', reward: '₹19,000', rewardNum: 19000 },
  { id: 'p3', name: 'Project 3', pages: '120 Pages (Front+Back = 240)', duration: '15 Days', reward: '₹22,000', rewardNum: 22000, highlight: true },
  { id: 'p4', name: 'Project 4', pages: '190 Pages (Front+Back = 380)', duration: '26 Days', reward: '₹28,000', rewardNum: 28000 },
];

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject: ProjectData | null;
  onApplyTelegram: (proj: ProjectData) => void;
}

export const ProjectCalculatorModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  selectedProject,
  onApplyTelegram
}) => {
  if (!isOpen || !selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg p-6 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100/80 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold"
            style={{
              backgroundColor: 'var(--color-badge-bg)',
              color: 'var(--color-primary)',
              border: '1px solid var(--color-badge-border)'
            }}
          >
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span 
              className="text-xs font-extrabold uppercase tracking-wider"
              style={{ color: 'var(--color-primary)' }}
            >
              Project Enrollment
            </span>
            <h3 className="text-xl font-bold text-slate-900">{selectedProject.name} Details</h3>
          </div>
        </div>

        <div className="space-y-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 mb-6">
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" /> Target Work
            </span>
            <span className="text-xs font-bold text-slate-800">{selectedProject.pages}</span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> Deadline Duration
            </span>
            <span className="text-xs font-bold text-slate-800">{selectedProject.duration}</span>
          </div>

          <div className="flex justify-between items-center py-1">
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <IndianRupee className="w-3.5 h-3.5 text-emerald-600" style={{ color: 'var(--color-primary)' }} /> Total Guaranteed Reward
            </span>
            <span className="text-base font-extrabold" style={{ color: 'var(--color-primary)' }}>{selectedProject.reward}</span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-slate-600 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Standard font size and ruling template provided by VISHV BOOK.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Payment credited directly via UPI/Bank Transfer upon submission.</span>
          </div>
        </div>

        <button
          onClick={() => {
            onApplyTelegram(selectedProject);
            onClose();
          }}
          className="w-full py-3.5 px-6 bg-gradient-to-r from-[#229ED9] to-[#1d82b4] text-white font-bold rounded-2xl shadow-3d-button flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>JOIN TELEGRAM</span>
        </button>
      </div>
    </div>
  );
};
