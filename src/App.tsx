import React from 'react';
import { 
  BookOpen, 
  Home, 
  Clock, 
  TrendingUp, 
  Target, 
  Eye, 
  HeartHandshake, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  ChevronRight, 
  ArrowUpRight, 
  BookMarked
} from 'lucide-react';

import { Card3D } from './components/Card3D';
import { TypewriterText } from './components/TypewriterText';
import { JoinTelegramButton } from './components/JoinTelegramButton';
import { PROJECTS } from './components/ProjectCalculatorModal';

export default function App() {
  const TELEGRAM_URL = "https://t.me/+LOvIryArnjxiNTRl";

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Book & Story Writer",
      text: "VISHV BOOK has been a game changer for me! I completed Project 2 in 9 days and received my ₹19,000 reward instantly. Very reliable desk.",
      rating: 5,
      avatarBg: "bg-emerald-100 text-emerald-700"
    },
    {
      name: "Rahul Verma",
      role: "Content Creator",
      text: "Super clear manuscript formatting instructions. Getting work-from-home writing jobs with timely payments was exactly what I needed.",
      rating: 5,
      avatarBg: "bg-teal-100 text-teal-700"
    },
    {
      name: "Pooja Patel",
      role: "Handwriting & Story Writer",
      text: "Finished 120 pages for Project 3 and received ₹22,000 on schedule. The admin team on Telegram is extremely supportive throughout.",
      rating: 5,
      avatarBg: "bg-amber-100 text-amber-700"
    },
    {
      name: "Vikram Singh",
      role: "Academic Writer",
      text: "VISHV BOOK Publication offers fair rewards with 100% transparency. Best remote writing opportunity for passionate Indian writers.",
      rating: 5,
      avatarBg: "bg-emerald-100 text-emerald-700"
    },
    {
      name: "Sneha Reddy",
      role: "Content Writer",
      text: "Currently working on Project 4. The flexible deadlines allow me to balance writing with my personal studies easily.",
      rating: 5,
      avatarBg: "bg-rose-100 text-rose-700"
    },
    {
      name: "Amit Kumar",
      role: "Publication Contributor",
      text: "Genuine project assignments and punctual payment transfers. I recommend VISHV BOOK to all my fellow creative writers!",
      rating: 5,
      avatarBg: "bg-amber-100 text-amber-700"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Decorative Background Glow Orbs */}
      <div 
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-3xl -z-10 rounded-full opacity-60 transition-all duration-700"
        style={{
          background: 'radial-gradient(ellipse at center, var(--color-glow) 0%, transparent 70%)'
        }}
      />
      <div 
        className="pointer-events-none fixed bottom-10 right-0 w-[500px] h-[500px] blur-3xl -z-10 rounded-full opacity-40 transition-all duration-700"
        style={{
          background: 'radial-gradient(circle at center, var(--color-glow) 0%, transparent 60%)'
        }}
      />

      {/* 1. Sticky Header */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo & Subtitle */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 shadow-xs sm:shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0"
              style={{ borderColor: 'var(--color-primary)' }}
            >
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYsrl4iXh6mkjgkNOB_jxZDERgAeyGDg7GwGBkyCYg7uJbjNw_cGTmPF6RPkQAevVCI_25eg0hfBLiTQM-Iui-57DTy73vVYHdzZH_abRhVFhBSt366pVgRJInDdAMAwJK73I7Op_CcTAW_njrblXaYMKH-xqLf671HE2ZxIyBz7-fszAXzQTHTioDW9GT/s320/1000208213.jpg" 
                alt="VISHV BOOK Logo" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-xl md:text-2xl font-extrabold sm:font-black text-slate-900 tracking-tight font-display uppercase leading-none">
                  VISHV BOOK
                </span>
              </div>
              <span 
                className="text-[10px] sm:text-[11px] font-extrabold tracking-wider sm:tracking-widest uppercase mt-0.5"
                style={{ color: 'var(--color-primary)' }}
              >
                Publication
              </span>
            </div>
          </a>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <JoinTelegramButton
              size="sm"
              text="JOIN TELEGRAM"
            />
          </div>

        </div>
      </header>

      <main className="space-y-24 pb-20">

        {/* 2. Hero Section — Animated Typing Text */}
        <section className="relative pt-12 pb-8 md:pt-20 md:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Hiring Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-slate-200/90 shadow-xs backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--color-primary-light)' }}></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: 'var(--color-primary)' }}></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                Now Recruiting Remote Writers Nationwide
              </span>
            </div>

            {/* Dynamic Animated Typing Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              We are hiring <br className="hidden sm:block" />
              <TypewriterText />
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Join India's leading publication company. Access authentic work-from-home book writing, content creation, and manuscript transcription projects with weekly payouts and full mentorship.
            </p>

            {/* Key Highlights Quick Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/70 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Work From Home</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/70 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Weekly Guaranteed Payouts</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/70 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>No Experience Required</span>
              </div>
            </div>

            {/* Hero Call to Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <JoinTelegramButton
                size="lg"
                text="JOIN TELEGRAM"
              />

              <a
                href="#reward-chart"
                className="px-6 py-3.5 rounded-full bg-white/95 hover:bg-white text-slate-800 font-bold border border-slate-200 shadow-xs hover:shadow-md transition-all text-sm flex items-center gap-2 cursor-pointer"
              >
                <BookMarked className="w-4 h-4 text-emerald-600" style={{ color: 'var(--color-primary)' }} />
                <span>View Project Rates</span>
              </a>
            </div>

          </div>
        </section>

        {/* 3. Work Benefits Section (3 boxes) */}
        <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span 
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
              style={{ 
                backgroundColor: 'var(--color-badge-bg)', 
                color: 'var(--color-badge-text)',
                borderColor: 'var(--color-badge-border)'
              }}
            >
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Work Benefits
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
              Enjoy complete flexibility, timely rewards, and continuous career support with VISHV BOOK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Benefit Card 1 */}
            <Card3D className="p-8 flex flex-col justify-between">
              <div>
                <div 
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-lg mb-6"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    boxShadow: '0 10px 25px -5px var(--color-glow)'
                  }}
                >
                  <Home className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Work From Home
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enjoy complete flexibility to complete writing assignments from any location. Set your own daily pace without fixed office hours or commute hassles.
                </p>
              </div>
              <div 
                className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold"
                style={{ color: 'var(--color-primary)' }}
              >
                <span>100% Remote Flexibility</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card3D>

            {/* Benefit Card 2 */}
            <Card3D className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Timely Payment
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Get paid on time, every time. As soon as your completed pages pass submission review, your reward is transferred directly via Bank or UPI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <span>Direct Transfer Guarantee</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card3D>

            {/* Benefit Card 3 */}
            <Card3D className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Growth Opportunity
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Consistently successful writers unlock higher-tier publishing assignments, long-term book contracts, and priority project allocations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-600">
                <span>Publication Mentorship</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Card3D>

          </div>

          <div className="mt-10 flex justify-center">
            <JoinTelegramButton
              size="md"
              text="JOIN TELEGRAM"
            />
          </div>
        </section>

        {/* 4. Our Mission & Vision Section (3 boxes) */}
        <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span 
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
              style={{ 
                backgroundColor: 'var(--color-badge-bg)', 
                color: 'var(--color-badge-text)',
                borderColor: 'var(--color-badge-border)'
              }}
            >
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Mission & Vision
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
              Building a transparent, dignified, and prosperous publication network for writers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission Box 1 */}
            <Card3D className="p-8 flex flex-col justify-between">
              <div>
                <div 
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-lg mb-6"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                    boxShadow: '0 10px 25px -5px var(--color-glow)'
                  }}
                >
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To empower talented independent writers and content creators nationwide by providing dignified, legitimate remote publishing opportunities with fair, guaranteed compensation.
                </p>
              </div>
            </Card3D>

            {/* Vision Box 2 */}
            <Card3D className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-teal-500/20 mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To become India's premier and most trusted publication network, connecting passionate storytellers and book creators with seamless distribution and publication channels.
                </p>
              </div>
            </Card3D>

            {/* Values Box 3 */}
            <Card3D className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 mb-6">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Our Values
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Complete financial transparency, zero hidden fees, punctual rewards, high publication quality standards, and supportive author mentorship on every project.
                </p>
              </div>
            </Card3D>

          </div>
        </section>

        {/* 5. Salary / Reward Chart Section */}
        <section id="reward-chart" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span 
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
              style={{ 
                backgroundColor: 'var(--color-badge-bg)', 
                color: 'var(--color-badge-text)',
                borderColor: 'var(--color-badge-border)'
              }}
            >
              Transparent Payouts
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Project & Reward Chart
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
              Select your preferred project scope and see exact page requirements, duration, and guaranteed reward payout.
            </p>
          </div>

          {/* Desktop Table View (Clean 4 Columns) */}
          <div className="hidden md:block glass-panel rounded-3xl overflow-hidden border border-white/90 shadow-xl">
            <table className="w-full text-left border-collapse table-glass">
              <thead>
                <tr className="bg-slate-100/90 border-b border-slate-200/80 text-xs uppercase font-extrabold text-slate-700 tracking-wider">
                  <th className="py-4 px-6">Project</th>
                  <th className="py-4 px-6">Pages</th>
                  <th className="py-4 px-6">Duration</th>
                  <th className="py-4 px-6">Reward</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {PROJECTS.map((proj) => (
                  <tr 
                    key={proj.id} 
                    className={`hover:bg-slate-50/90 transition-colors ${proj.highlight ? 'bg-emerald-50/40' : ''}`}
                  >
                    <td className="py-5 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-600" style={{ color: 'var(--color-primary)' }} />
                      <span>{proj.name}</span>
                      {proj.highlight && (
                        <span 
                          className="text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase border"
                          style={{
                            backgroundColor: 'var(--color-badge-bg)',
                            color: 'var(--color-badge-text)',
                            borderColor: 'var(--color-badge-border)'
                          }}
                        >
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="py-5 px-6 text-slate-700 font-medium">{proj.pages}</td>
                    <td className="py-5 px-6 text-slate-600 font-medium">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {proj.duration}
                      </span>
                    </td>
                    <td className="py-5 px-6 font-extrabold text-emerald-600 text-base" style={{ color: 'var(--color-primary)' }}>
                      {proj.reward}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Card View */}
          <div className="md:hidden space-y-4">
            {PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                className={`glass-panel p-6 rounded-2xl border ${proj.highlight ? 'border-emerald-300 ring-2 ring-emerald-500/20' : 'border-white/80'} shadow-md space-y-3 relative`}
              >
                {proj.highlight && (
                  <span 
                    className="absolute top-4 right-4 text-[10px] text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-xs"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    Most Popular
                  </span>
                )}
                
                <div className="flex items-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs"
                    style={{ 
                      backgroundColor: 'var(--color-badge-bg)', 
                      color: 'var(--color-badge-text)' 
                    }}
                  >
                    VB
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg">{proj.name}</h3>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Pages:</span>
                    <span className="font-semibold text-slate-800">{proj.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Duration:</span>
                    <span className="font-semibold text-slate-800">{proj.duration}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-100">
                    <span className="text-slate-500 font-medium">Guaranteed Reward:</span>
                    <span className="font-extrabold text-base" style={{ color: 'var(--color-primary)' }}>{proj.reward}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            * All page counts refer to standard handwritten/formatted publishing templates provided upon project enrollment.
          </div>
        </section>

        {/* 6. Client Feedback Section — Infinite Marquee Slider */}
        <section id="feedback" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="text-center space-y-3 mb-10">
            <span 
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
              style={{ 
                backgroundColor: 'var(--color-badge-bg)', 
                color: 'var(--color-badge-text)',
                borderColor: 'var(--color-badge-border)'
              }}
            >
              Testimonials & Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our Clients & Writers Say
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
              Real experiences from writers who have completed writing assignments with VISHV BOOK.
            </p>
          </div>

          {/* Continuous Marquee Container */}
          <div className="relative w-full overflow-hidden py-4">
            
            {/* Left & Right Gradient Shadows for seamless edge fade */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10" />

            <div className="animate-marquee flex gap-6">
              {/* Duplicate array twice for seamless continuous scroll loop */}
              {[...testimonials, ...testimonials].map((item, idx) => (
                <div 
                  key={idx}
                  className="w-[300px] sm:w-[360px] p-6 glass-panel rounded-2xl border border-white/90 shadow-md shrink-0 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-3 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-4">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className={`w-9 h-9 rounded-full ${item.avatarBg} font-bold flex items-center justify-center text-xs shrink-0 shadow-xs`}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{item.name}</h4>
                      <p className="text-[11px] text-slate-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <JoinTelegramButton
              size="md"
              text="JOIN TELEGRAM"
            />
          </div>
        </section>

      </main>

      {/* 7. Footer Section */}
      <footer className="w-full bg-white/90 border-t border-slate-200/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-full overflow-hidden border shadow-xs"
              style={{ borderColor: 'var(--color-primary)' }}
            >
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYsrl4iXh6mkjgkNOB_jxZDERgAeyGDg7GwGBkyCYg7uJbjNw_cGTmPF6RPkQAevVCI_25eg0hfBLiTQM-Iui-57DTy73vVYHdzZH_abRhVFhBSt366pVgRJInDdAMAwJK73I7Op_CcTAW_njrblXaYMKH-xqLf671HE2ZxIyBz7-fszAXzQTHTioDW9GT/s320/1000208213.jpg" 
                alt="VISHV BOOK Logo" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="text-lg font-bold text-slate-900 font-serif tracking-tight uppercase">
              VISHV BOOK <span className="text-xs font-bold" style={{ color: 'var(--color-primary)' }}>Publication</span>
            </span>
          </div>

          {/* Design Attribution Link */}
          <div className="pt-2">
            <p className="text-sm font-semibold text-slate-700">
              Design By.{' '}
              <a
                href="https://bharatx-website-agency.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 font-bold transition-colors inline-flex items-center gap-1"
                style={{ color: 'var(--color-primary)' }}
              >
                <span>BharatX Web Agency</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>

          {/* Copyright & Social Disclaimer */}
          <div className="text-xs text-slate-400 space-y-1">
            <p>© {new Date().getFullYear()} VISHV BOOK Publication. All rights reserved.</p>
            <p className="text-[11px]">Official remote writing recruiter desk for books, content, & story projects.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
