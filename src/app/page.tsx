'use client';
import { useEffect, useRef } from 'react';

const htmlContent = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
<style>
/* ═══════════════════════════════════════
   RESET & VARIABLES
═══════════════════════════════════════ */
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#1565C0;
  --blue2:#1E88E5;
  --blue3:#2979FF;
  --blue4:#0D47A1;
  --pale:#E8F2FF;
  --surface:#F4F8FF;
  --gold:#FFB300;
  --goldl:#FFF8E1;
  --green:#2E7D32;
  --greenl:#E8F5E9;
  --red:#C62828;
  --text:#0D1B2A;
  --muted:#455A7A;
  --border:#C5D8F5;
  --white:#fff;
}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:var(--white);color:var(--text);overflow-x:hidden;font-size:15px;line-height:1.6}
a{text-decoration:none;color:inherit}
button{font-family:'Inter',sans-serif}
ul{list-style:none}
h1,h2,h3,h4{letter-spacing:-0.02em}

/* ═══════════════════════════════════════
   UTILITY
═══════════════════════════════════════ */
.wrap{max-width:1080px;margin:0 auto;padding:0 36px}
.sec{padding:64px 0}
.stag{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:var(--blue);margin-bottom:10px}
.stitle{font-family:'Bebas Neue',sans-serif;font-size:44px;color:var(--text);letter-spacing:.5px;line-height:1;margin-bottom:8px}
.ssub{font-size:14px;color:var(--muted);margin-bottom:32px;max-width:560px}
.bg-alt{background:var(--surface)}
.bg-white{background:var(--white)}
.divline{border:none;border-top:1px solid var(--border);margin:0}
.divlabel{text-align:center;padding:18px 0;background:var(--surface)}
.divlabel span{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:var(--blue)}

/* ═══════════════════════════════════════
   BADGES
═══════════════════════════════════════ */
.badge{display:inline-block;font-size:10px;font-weight:700;padding:3px 9px;border-radius:7px;letter-spacing:.04em}
.badge-up{background:#FFF3E0;color:#E65100}
.badge-ok{background:var(--greenl);color:var(--green)}
.badge-live{background:#FFF3E0;color:#E65100}
.badge-new{background:var(--greenl);color:var(--green)}
.badge-beta{background:var(--pale);color:var(--blue)}
.badge-daily{background:#F3E5F5;color:#6A1B9A}

/* ═══════════════════════════════════════
   BUTTONS
═══════════════════════════════════════ */
.btn-pri{background:var(--blue);color:white;padding:14px 32px;border-radius:30px;font-size:15px;font-weight:600;cursor:pointer;border:none;display:inline-flex;align-items:center;gap:8px;transition:all .25s;font-family:'DM Sans',sans-serif}
.btn-pri:hover{background:var(--blue2);transform:translateY(-2px);box-shadow:0 12px 30px rgba(21,101,192,.28)}
.btn-out{background:white;color:var(--text);padding:14px 28px;border-radius:30px;font-size:15px;font-weight:500;cursor:pointer;border:1.5px solid var(--border);transition:all .2s;font-family:'DM Sans',sans-serif}
.btn-out:hover{border-color:var(--blue);color:var(--blue);background:var(--pale)}
.btn-ghost{background:white;color:var(--blue);padding:12px 24px;border-radius:22px;font-size:13px;font-weight:600;cursor:pointer;border:1.5px solid var(--border);display:inline-flex;align-items:center;gap:8px;transition:all .2s;font-family:'DM Sans',sans-serif}
.btn-ghost:hover{border-color:var(--blue);background:var(--pale)}
.btn-wh{background:white;color:var(--blue);padding:14px 32px;border-radius:30px;font-size:14px;font-weight:700;cursor:pointer;border:none;transition:all .2s;font-family:'DM Sans',sans-serif;white-space:nowrap}
.btn-wh:hover{background:var(--pale);transform:translateY(-1px)}

/* ═══════════════════════════════════════
   BADGES — improved
═══════════════════════════════════════ */
.badge{display:inline-flex;align-items:center;font-size:0.65rem;font-weight:700;padding:2px 7px;border-radius:20px;letter-spacing:.06em;text-transform:uppercase;line-height:1.4}
.badge-up{background:#FFF3E0;color:#C2410C}
.badge-ok{background:var(--greenl);color:var(--green)}
.badge-live{background:#DCFCE7;color:#15803D}
.badge-new{background:#FEF9C3;color:#A16207}
.badge-beta{background:var(--pale);color:var(--blue)}
.badge-daily{background:#DCFCE7;color:#15803D}

/* ═══════════════════════════════════════
   NAV
═══════════════════════════════════════ */
nav{
  display:flex;align-items:center;justify-content:space-between;
  padding:0 36px;height:64px;
  background:rgba(255,255,255,.98);
  backdrop-filter:blur(20px);
  border-bottom:1px solid #E5E7EB;
  position:sticky;top:0;z-index:200;
  font-family:'Inter',sans-serif;
}
.logo{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:700;color:var(--blue4);cursor:pointer;user-select:none;letter-spacing:-0.01em}
.logo-icon{width:33px;height:33px;background:var(--blue);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.logo-icon svg{width:18px;height:18px;fill:white}
.nav-center{display:flex;gap:1px}
.nav-item{position:static}
.nav-btn{
  font-size:0.9rem;font-weight:500;color:#374151;
  padding:7px 13px;border-radius:8px;
  cursor:pointer;border:none;background:none;
  display:flex;align-items:center;gap:5px;
  transition:color .15s,background .15s;font-family:'Inter',sans-serif;
  letter-spacing:-0.01em;
}
.nav-btn:hover,.nav-btn.open{color:#1D4ED8;background:#EFF6FF}
.nav-btn .chev{font-size:11px;transition:transform .2s;opacity:.6}
.nav-btn.open .chev{transform:rotate(180deg);opacity:1}

/* ── MEGA MENU ── */
.mega-wrap{
  position:fixed;top:64px;left:0;right:0;
  background:white;
  border-top:1px solid #E5E7EB;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
  z-index:199;
  opacity:0;pointer-events:none;
  transform:translateY(-8px);
  transition:opacity .15s ease,transform .15s ease;
}
.mega-wrap.show{opacity:1;pointer-events:all;transform:translateY(0)}
.mega-inner{max-width:1200px;margin:0 auto;padding:28px 36px 24px;}
.mega-label{
  font-size:10px;font-weight:700;letter-spacing:.14em;
  text-transform:uppercase;color:var(--blue);
  margin-bottom:14px;display:block;
}
.mega-grid{
  display:grid;gap:4px;
}
.mega-grid-4{grid-template-columns:repeat(4,1fr)}
.mega-grid-3{grid-template-columns:repeat(3,1fr)}
.mega-grid-5{grid-template-columns:repeat(5,1fr)}
.dd-item{
  display:flex;align-items:flex-start;gap:10px;
  padding:12px 14px;border-radius:8px;
  cursor:pointer;transition:background .12s;
  color:inherit;
}
.dd-item:hover{background:#F0F4FF}
.dd-icon{
  width:34px;height:34px;background:#EFF6FF;
  border-radius:8px;display:flex;align-items:center;
  justify-content:center;flex-shrink:0;
  transition:background .12s;
}
.dd-item:hover .dd-icon{background:#DBEAFE}
.dd-icon i{font-size:15px;color:var(--blue)}
.dd-text h4{
  font-size:0.8rem;font-weight:600;color:#111827;
  display:flex;align-items:center;gap:6px;flex-wrap:wrap;
  letter-spacing:-0.01em;line-height:1.3;
}
.dd-text p{font-size:0.75rem;color:#6B7280;margin-top:2px;line-height:1.4}

.nav-right{display:flex;align-items:center;gap:10px}
.nav-search{
  display:flex;align-items:center;gap:7px;
  background:#F9FAFB;border:1px solid #E5E7EB;
  border-radius:20px;padding:7px 16px;
  font-size:12px;color:#6B7280;cursor:pointer;
  transition:border .15s,background .15s;font-family:'Inter',sans-serif;
}
.nav-search:hover{border-color:#93C5FD;background:white}
.nav-search i{font-size:13px}
.nav-cta{background:var(--blue);color:white;padding:8px 22px;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;border:none;transition:all .2s;font-family:'Inter',sans-serif;letter-spacing:-0.01em}
.nav-cta:hover{background:#1D4ED8;transform:translateY(-1px)}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
.hero{
  padding:88px 36px 0;text-align:center;
  background:linear-gradient(158deg,#E2EEFF 0%,#EDF4FF 28%,#FFFBF0 62%,#F5F9FF 100%);
  position:relative;overflow:hidden;
}
.hero::before{
  content:'';position:absolute;
  top:-80px;right:-100px;
  width:500px;height:500px;
  background:radial-gradient(circle,rgba(41,121,255,.07) 0%,transparent 70%);
  pointer-events:none;
}
.hero::after{
  content:'';position:absolute;
  bottom:60px;left:-60px;
  width:300px;height:300px;
  background:radial-gradient(circle,rgba(255,179,0,.06) 0%,transparent 70%);
  pointer-events:none;
}
.hero-tag{
  display:inline-flex;align-items:center;gap:7px;
  background:white;border:1px solid var(--border);border-radius:20px;
  padding:7px 18px;font-size:12px;font-weight:500;color:var(--blue);
  margin-bottom:26px;box-shadow:0 2px 14px rgba(21,101,192,.07);
  position:relative;z-index:1;
}
.pulse{width:7px;height:7px;background:#4CAF50;border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.75)}}
.hero h1{
  font-family:'Bebas Neue',sans-serif;
  font-size:86px;line-height:.92;color:var(--text);
  letter-spacing:1.5px;position:relative;z-index:1;
}
.hero h1 em{color:var(--blue3);font-style:normal}
.hero-sub{font-size:16px;color:var(--muted);max-width:490px;margin:20px auto 38px;line-height:1.78;position:relative;z-index:1}
.hero-btns{display:flex;gap:12px;justify-content:center;margin-bottom:60px;position:relative;z-index:1}
.hero-stats{
  display:grid;grid-template-columns:repeat(4,1fr);
  border:1px solid var(--border);border-radius:20px 20px 0 0;
  overflow:hidden;background:white;
  box-shadow:0 -4px 24px rgba(21,101,192,.06);
  position:relative;z-index:1;
}
.stat-item{padding:24px 16px;text-align:center;border-right:1px solid var(--border);transition:background .2s}
.stat-item:last-child{border-right:none}
.stat-item:hover{background:var(--pale)}
.stat-n{font-family:'Bebas Neue',sans-serif;font-size:46px;color:var(--blue3);line-height:1}
.stat-l{font-size:13px;font-weight:500;color:var(--text);margin-top:2px}
.stat-s{font-size:11px;color:var(--muted)}

/* ═══════════════════════════════════════
   NOTIFICATION + SELECTION RATE
═══════════════════════════════════════ */
.info-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:16px}
.icard{
  background:white;border:1px solid var(--border);
  border-radius:18px;padding:28px;position:relative;overflow:hidden;
}
.icard::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--blue)}
.icard.gold-card::before{background:var(--gold)}
.ilabel{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.11em;color:var(--muted);margin-bottom:8px}
.icard h3{font-size:19px;font-weight:600;color:var(--text);display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.icard p{font-size:13px;color:var(--muted);line-height:1.75;margin-top:10px}
.icard-divider{border:none;border-top:1px solid var(--surface);margin:18px 0}
.bigpct{font-family:'Bebas Neue',sans-serif;font-size:64px;color:var(--blue3);line-height:1;margin:4px 0}
.pctlbl{font-size:13px;color:var(--muted);margin-bottom:18px}
.funnel{display:flex;flex-direction:column;gap:9px}
.frow{display:flex;align-items:center;gap:10px}
.flbl{font-size:12px;color:var(--muted);width:134px;flex-shrink:0}
.ftrack{flex:1;background:var(--surface);border-radius:10px;height:7px;overflow:hidden}
.fbar{height:100%;border-radius:10px;transition:width .8s ease}
.fval{font-size:12px;font-weight:600;color:var(--text);width:68px;text-align:right}

/* ═══════════════════════════════════════
   TOOLS GRID
═══════════════════════════════════════ */
.tools-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.tcard{
  background:white;border:1px solid var(--border);
  border-radius:16px;padding:24px;cursor:pointer;
  transition:all .22s;
}
.tcard:hover{border-color:var(--blue2);box-shadow:0 8px 32px rgba(21,101,192,.11);transform:translateY(-3px)}
.tcard:hover .t-arrow{transform:translateX(4px)}
.ticon{width:46px;height:46px;border-radius:13px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:21px}
.ticon.b{background:#E3F0FF}.ticon.g{background:#E8F5E9}.ticon.a{background:#FFF8E1}
.ticon.p{background:#EDE7F6}.ticon.t{background:#E0F2F1}.ticon.r{background:#FFEBEE}
.tcard-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}
.tname{font-size:15px;font-weight:600;color:var(--text)}
.tdesc{font-size:12px;color:var(--muted);line-height:1.55}
.t-arrow{font-size:16px;color:var(--blue);margin-top:14px;display:block;transition:transform .2s}

/* ═══════════════════════════════════════
   EXAM PATTERN
═══════════════════════════════════════ */
.exam-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.ecard{background:white;border:1px solid var(--border);border-radius:18px;padding:26px}
.epaper{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.11em;color:var(--blue);margin-bottom:6px}
.ecard h3{font-size:22px;font-weight:600;color:var(--blue3);margin-bottom:18px}
.etable{width:100%;border-collapse:collapse}
.etable td{padding:7px 0;font-size:13px;color:var(--muted);border-bottom:1px solid var(--surface)}
.etable tr:last-child td{border-bottom:none}
.etable td:last-child{text-align:right;font-weight:600;color:var(--text)}
.positive{color:var(--green)!important}
.negative{color:var(--red)!important}
.etags{display:flex;gap:7px;flex-wrap:wrap;margin-top:14px}
.etag{background:var(--pale);color:var(--blue);font-size:11px;font-weight:500;padding:4px 11px;border-radius:8px}

/* ═══════════════════════════════════════
   SSB
═══════════════════════════════════════ */
.ssb-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin-bottom:28px}
.scard{background:white;border:1px solid var(--border);border-radius:16px;padding:22px;transition:all .2s;cursor:pointer}
.scard:hover{border-color:var(--blue2);box-shadow:0 6px 20px rgba(21,101,192,.09);transform:translateY(-2px)}
.scard-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px}
.sday{font-size:10px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.snum{font-family:'Bebas Neue',sans-serif;font-size:40px;color:var(--pale);-webkit-text-stroke:2px var(--blue3);letter-spacing:1px;line-height:1;margin-bottom:10px;display:block}
.stname{font-size:14px;font-weight:600;color:var(--blue3);margin-bottom:5px}
.stdesc{font-size:12px;color:var(--muted);line-height:1.55}
.ssb-cta{display:flex;justify-content:center;margin-top:4px}

/* ═══════════════════════════════════════
   JOURNEY (STAGE TABS)
═══════════════════════════════════════ */
.journey-track{
  display:grid;grid-template-columns:repeat(4,1fr);
  border:1px solid var(--border);border-radius:18px;
  overflow:hidden;background:white;margin-bottom:28px;
}
.jstep{
  padding:22px 18px;text-align:center;cursor:pointer;
  transition:all .2s;border-right:1px solid var(--border);
  position:relative;
}
.jstep:last-child{border-right:none}
.jstep:hover{background:var(--pale)}
.jstep.active{background:var(--pale);border-bottom:3px solid var(--blue)}
.jphase{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--blue);margin-bottom:8px}
.jnum{
  width:30px;height:30px;border-radius:50%;
  background:var(--blue);color:white;
  font-size:13px;font-weight:700;
  display:flex;align-items:center;justify-content:center;
  margin:0 auto 10px;
}
.jstep.active .jnum{background:var(--blue4);box-shadow:0 0 0 4px rgba(21,101,192,.2)}
.jstep h4{font-size:14px;font-weight:600;color:var(--text);margin-bottom:3px}
.jstep p{font-size:12px;color:var(--muted);line-height:1.4}

/* ═══════════════════════════════════════
   SALARY
═══════════════════════════════════════ */
.salary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin-bottom:14px}
.salcard{background:white;border:1px solid var(--border);border-radius:16px;padding:20px}
.sal-icon{width:40px;height:40px;border-radius:10px;background:var(--blue);display:flex;align-items:center;justify-content:center;margin-bottom:12px}
.sal-icon i{font-size:18px;color:white}
.sal-rank{font-size:14px;font-weight:600;color:var(--text)}
.sal-years{font-size:11px;color:var(--muted);margin-bottom:10px}
.sal-pay{font-size:14px;font-weight:700;color:var(--blue3);margin-bottom:10px}
.sal-bar{height:5px;border-radius:5px;background:var(--pale)}
.sal-fill{height:100%;border-radius:5px;background:var(--blue)}
.sal-note{font-size:11px;color:var(--muted);text-align:center;margin:4px 0 22px}

/* ═══════════════════════════════════════
   RANK STRUCTURE
═══════════════════════════════════════ */
.rank-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.rcard{background:white;border:1px solid var(--border);border-radius:16px;padding:24px}
.rhead{display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--surface)}
.rdot{width:10px;height:10px;border-radius:50%}
.rdot.army{background:#2E7D32}
.rdot.navy{background:var(--blue)}
.rdot.af{background:#7B1FA2}
.rname{font-size:15px;font-weight:700;color:var(--text)}
.rlist{display:flex;flex-direction:column;gap:7px}
.rlist li{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--muted)}
.rlist li .rrank-num{font-size:11px;font-weight:600;color:var(--border);width:16px;text-align:right;flex-shrink:0}

/* ═══════════════════════════════════════
   NEWS
═══════════════════════════════════════ */
.news-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.ncard{
  background:white;border:1px solid var(--border);
  border-radius:16px;padding:22px;cursor:pointer;
  transition:all .2s;
}
.ncard:hover{border-color:var(--blue2);transform:translateY(-2px);box-shadow:0 6px 20px rgba(21,101,192,.08)}
.ntag{display:inline-block;font-size:10px;font-weight:700;padding:3px 9px;border-radius:7px;margin-bottom:10px;letter-spacing:.04em}
.ntag.notif{background:var(--pale);color:var(--blue)}
.ntag.upd{background:var(--greenl);color:var(--green)}
.ntag.train{background:#FFF8E1;color:#E65100}
.ncard h4{font-size:14px;font-weight:600;color:var(--text);line-height:1.45;margin-bottom:10px}
.ndate{font-size:11px;color:var(--muted);display:flex;align-items:center;gap:5px}

/* ═══════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════ */
.test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.tcard2{background:white;border:1px solid var(--border);border-radius:16px;padding:24px}
.stars{display:flex;gap:3px;margin-bottom:13px}
.star{font-size:14px;color:var(--gold)}
.tquote{font-size:13px;color:var(--muted);line-height:1.72;font-style:italic;margin-bottom:18px}
.tperson{display:flex;align-items:center;gap:10px;padding-top:14px;border-top:1px solid var(--surface)}
.tav{
  width:38px;height:38px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:700;color:white;flex-shrink:0;
}
.tav.bl{background:var(--blue)}
.tav.gr{background:var(--green)}
.tav.pu{background:#7B1FA2}
.tpname{font-size:13px;font-weight:600;color:var(--text)}
.tpsub{font-size:11px;color:var(--blue)}

/* ═══════════════════════════════════════
   FAQ
═══════════════════════════════════════ */
.faq-wrap{max-width:700px;margin:0 auto}
.faq-item{
  background:white;border:1px solid var(--border);
  border-radius:14px;margin-bottom:8px;overflow:hidden;
}
.fq{
  width:100%;display:flex;align-items:center;justify-content:space-between;
  padding:17px 20px;background:white;border:none;
  cursor:pointer;text-align:left;
  font-size:14px;font-weight:500;color:var(--text);
  transition:all .15s;font-family:'DM Sans',sans-serif;
}
.fq:hover{background:var(--pale);color:var(--blue)}
.fq.open{background:var(--pale);color:var(--blue)}
.fq .fchev{font-size:16px;color:var(--blue);transition:transform .25s;flex-shrink:0}
.fq.open .fchev{transform:rotate(180deg)}
.fa{max-height:0;overflow:hidden;transition:max-height .32s ease,padding .32s}
.fa.open{max-height:220px;padding:0 20px 20px}
.fa p{font-size:13px;color:var(--muted);line-height:1.75}

/* ═══════════════════════════════════════
   CTA BANNER
═══════════════════════════════════════ */
.cta-banner{
  background:var(--blue);border-radius:22px;
  padding:52px 52px;display:flex;
  align-items:center;justify-content:space-between;gap:28px;
  margin:64px 0 56px;
  position:relative;overflow:hidden;
}
.cta-banner::before{
  content:'';position:absolute;right:-80px;top:-80px;
  width:300px;height:300px;
  background:radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 70%);
}
.cta-banner::after{
  content:'';position:absolute;left:40%;bottom:-40px;
  width:200px;height:200px;
  background:radial-gradient(circle,rgba(255,179,0,.1) 0%,transparent 70%);
}
.cta-left{position:relative;z-index:1}
.cta-left h2{font-family:'Bebas Neue',sans-serif;font-size:48px;color:white;line-height:1.02;letter-spacing:.6px}
.cta-left p{font-size:14px;color:rgba(255,255,255,.7);margin-top:8px;max-width:380px}
.cta-right{position:relative;z-index:1;display:flex;flex-direction:column;gap:10px;align-items:flex-end}
.cta-stats{display:flex;gap:20px}
.ctat{text-align:center}
.ctat .cn{font-family:'Bebas Neue',sans-serif;font-size:36px;color:white;line-height:1}
.ctat .cl{font-size:11px;color:rgba(255,255,255,.6)}

/* ═══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
footer{background:var(--text);padding:56px 36px 30px}
.foot-grid{
  display:grid;grid-template-columns:2fr 1fr 1fr 1fr;
  gap:48px;max-width:1080px;margin:0 auto 40px;
}
.flogo{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:700;color:white;margin-bottom:14px}
.flogo-ic{width:30px;height:30px;background:var(--blue2);border-radius:7px;display:flex;align-items:center;justify-content:center}
.flogo-ic svg{width:16px;height:16px;fill:white}
.fdesc{font-size:13px;color:rgba(255,255,255,.45);line-height:1.75;margin-bottom:18px}
.fdiscl{font-size:11px;color:rgba(255,255,255,.28);line-height:1.65}
.fcol h4{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.35);margin-bottom:16px}
.fcol a{display:block;font-size:13px;color:rgba(255,255,255,.55);margin-bottom:9px;cursor:pointer;transition:color .14s}
.fcol a:hover{color:white}
.foot-bot{
  max-width:1080px;margin:0 auto;
  padding-top:24px;border-top:1px solid rgba(255,255,255,.09);
  display:flex;align-items:center;justify-content:space-between;
}
.foot-bot p{font-size:12px;color:rgba(255,255,255,.3)}
.foot-link{font-size:13px;font-weight:600;color:rgba(255,255,255,.7);cursor:pointer;display:flex;align-items:center;gap:6px;transition:color .15s}
.foot-link:hover{color:white}

/* ═══════════════════════════════════════
   ANIMATIONS (on scroll)
═══════════════════════════════════════ */
.fade-up{opacity:0;transform:translateY(24px);transition:opacity .5s ease,transform .5s ease}
.fade-up.visible{opacity:1;transform:translateY(0)}
</style>

<!-- ══════════════════════════════════════
     NAV
══════════════════════════════════════ -->
<nav id="site-nav" role="navigation" aria-label="Main navigation">
  <a href="/" class="logo">
    <div class="logo-icon">
      <svg viewBox="0 0 24 24"><path d="M12 2L4 7v6c0 5 3.5 9.3 8 10.5C16.5 22.3 20 18 20 13V7L12 2z"/></svg>
    </div>
    ConquerNDA
  </a>

  <div class="nav-center" role="menubar">
    <!-- NDA Exam -->
    <div class="nav-item" role="none">
      <button class="nav-btn" role="menuitem" aria-haspopup="true" aria-expanded="false"
        data-mega="mega-exam" onmouseenter="openMega('mega-exam',this)" onkeydown="handleNavKey(event,'mega-exam',this)">
        NDA Exam <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
      </button>
    </div>
    <!-- Preparation -->
    <div class="nav-item" role="none">
      <button class="nav-btn" role="menuitem" aria-haspopup="true" aria-expanded="false"
        data-mega="mega-prep" onmouseenter="openMega('mega-prep',this)" onkeydown="handleNavKey(event,'mega-prep',this)">
        Preparation <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
      </button>
    </div>
    <!-- SSB -->
    <div class="nav-item" role="none">
      <button class="nav-btn" role="menuitem" aria-haspopup="true" aria-expanded="false"
        data-mega="mega-ssb" onmouseenter="openMega('mega-ssb',this)" onkeydown="handleNavKey(event,'mega-ssb',this)">
        SSB <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
      </button>
    </div>
    <!-- Career -->
    <div class="nav-item" role="none">
      <button class="nav-btn" role="menuitem" aria-haspopup="true" aria-expanded="false"
        data-mega="mega-career" onmouseenter="openMega('mega-career',this)" onkeydown="handleNavKey(event,'mega-career',this)">
        Career <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
      </button>
    </div>
    <!-- Tools -->
    <div class="nav-item" role="none">
      <button class="nav-btn" role="menuitem" aria-haspopup="true" aria-expanded="false"
        data-mega="mega-tools" onmouseenter="openMega('mega-tools',this)" onkeydown="handleNavKey(event,'mega-tools',this)">
        Tools <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
      </button>
    </div>
  </div>

  <div class="nav-right">
    <div class="nav-search" tabindex="0"><i class="ti ti-search" aria-hidden="true"></i> Search…</div>
    <button class="nav-cta">Start Free</button>
  </div>
</nav>

<!-- ══════════════════════════════════════
     MEGA MENU PANELS
══════════════════════════════════════ -->

<!-- NDA EXAM -->
<div id="mega-exam" class="mega-wrap" role="region" aria-label="NDA Exam menu"
  onmouseenter="keepMega('mega-exam')" onmouseleave="closeMega()">
  <div class="mega-inner">
    <span class="mega-label">NDA Exam</span>
    <div class="mega-grid mega-grid-4">
      <a href="/what-is-nda" class="dd-item"><div class="dd-icon"><i class="ti ti-info-circle"></i></div><div class="dd-text"><h4>What is NDA</h4><p>Overview, history &amp; wings</p></div></a>
      <a href="/eligibility" class="dd-item"><div class="dd-icon"><i class="ti ti-shield-check"></i></div><div class="dd-text"><h4>Eligibility</h4><p>Age, education &amp; physical</p></div></a>
      <a href="/exam-pattern" class="dd-item"><div class="dd-icon"><i class="ti ti-file-description"></i></div><div class="dd-text"><h4>Exam Pattern</h4><p>Papers, marking &amp; cutoffs</p></div></a>
      <a href="/syllabus" class="dd-item"><div class="dd-icon"><i class="ti ti-book"></i></div><div class="dd-text"><h4>Syllabus</h4><p>Topic-wise complete guide</p></div></a>
      <a href="/previous-year-papers" class="dd-item"><div class="dd-icon"><i class="ti ti-history"></i></div><div class="dd-text"><h4>Previous Papers <span class="badge badge-new">New</span></h4><p>PYQs 2019–2025</p></div></a>
      <a href="/cutoff-analysis" class="dd-item"><div class="dd-icon"><i class="ti ti-chart-line"></i></div><div class="dd-text"><h4>Cutoff Analysis</h4><p>Historical cutoff trends</p></div></a>
    </div>
  </div>
</div>

<!-- PREPARATION -->
<div id="mega-prep" class="mega-wrap" role="region" aria-label="Preparation menu"
  onmouseenter="keepMega('mega-prep')" onmouseleave="closeMega()">
  <div class="mega-inner">
    <span class="mega-label">Preparation</span>
    <div class="mega-grid mega-grid-4">
      <a href="/roadmap" class="dd-item"><div class="dd-icon"><i class="ti ti-map"></i></div><div class="dd-text"><h4>Study Roadmap</h4><p>Class 10, 11, 12 &amp; dropper</p></div></a>
      <a href="/roadmap" class="dd-item"><div class="dd-icon"><i class="ti ti-books"></i></div><div class="dd-text"><h4>Books &amp; Resources</h4><p>Best books subject-wise</p></div></a>
      <a href="/current-affairs" class="dd-item"><div class="dd-icon"><i class="ti ti-news"></i></div><div class="dd-text"><h4>Daily Current Affairs <span class="badge badge-daily">Daily</span></h4><p>Defence &amp; GK updates</p></div></a>
      <a href="/mock-tests" class="dd-item"><div class="dd-icon"><i class="ti ti-clipboard-list"></i></div><div class="dd-text"><h4>Mock Tests <span class="badge badge-beta">Beta</span></h4><p>Practice full-length tests</p></div></a>
      <a href="/fitness" class="dd-item"><div class="dd-icon"><i class="ti ti-run"></i></div><div class="dd-text"><h4>Fitness Tracker</h4><p>PT &amp; physical prep guide</p></div></a>
    </div>
  </div>
</div>

<!-- SSB -->
<div id="mega-ssb" class="mega-wrap" role="region" aria-label="SSB menu"
  onmouseenter="keepMega('mega-ssb')" onmouseleave="closeMega()">
  <div class="mega-inner">
    <span class="mega-label">SSB Interview</span>
    <div class="mega-grid mega-grid-4">
      <a href="/ssb" class="dd-item"><div class="dd-icon"><i class="ti ti-calendar"></i></div><div class="dd-text"><h4>SSB Overview</h4><p>5-day selection process</p></div></a>
      <a href="/ssb/screening" class="dd-item"><div class="dd-icon"><i class="ti ti-brain"></i></div><div class="dd-text"><h4>Screening</h4><p>OIR test &amp; PPDT</p></div></a>
      <a href="/ssb/psychology" class="dd-item"><div class="dd-icon"><i class="ti ti-mood-smile"></i></div><div class="dd-text"><h4>Psychology Tests</h4><p>TAT, WAT, SRT &amp; SDT</p></div></a>
      <a href="/ssb/gto" class="dd-item"><div class="dd-icon"><i class="ti ti-users"></i></div><div class="dd-text"><h4>GTO Tasks</h4><p>Group outdoor tasks</p></div></a>
      <a href="/ssb/personal-interview" class="dd-item"><div class="dd-icon"><i class="ti ti-message"></i></div><div class="dd-text"><h4>Interview</h4><p>Personal interview prep</p></div></a>
      <a href="/ssb/cpss" class="dd-item"><div class="dd-icon"><i class="ti ti-plane"></i></div><div class="dd-text"><h4>CPSS <span class="badge badge-beta">Pilots</span></h4><p>Pilot aptitude battery</p></div></a>
      <a href="/medical" class="dd-item"><div class="dd-icon"><i class="ti ti-stethoscope"></i></div><div class="dd-text"><h4>Medical Examination</h4><p>Medical standards &amp; prep</p></div></a>
    </div>
  </div>
</div>

<!-- CAREER -->
<div id="mega-career" class="mega-wrap" role="region" aria-label="Career menu"
  onmouseenter="keepMega('mega-career')" onmouseleave="closeMega()">
  <div class="mega-inner">
    <span class="mega-label">Career</span>
    <div class="mega-grid mega-grid-4">
      <a href="/salary" class="dd-item"><div class="dd-icon"><i class="ti ti-coin"></i></div><div class="dd-text"><h4>Salary &amp; Perks</h4><p>Complete pay breakdown</p></div></a>
      <a href="/rank-structure" class="dd-item"><div class="dd-icon"><i class="ti ti-award"></i></div><div class="dd-text"><h4>Rank Structure</h4><p>Army, Navy &amp; Air Force</p></div></a>
      <a href="/training" class="dd-item"><div class="dd-icon"><i class="ti ti-building"></i></div><div class="dd-text"><h4>NDA Training Life</h4><p>3-year academy life</p></div></a>
      <a href="/success-stories" class="dd-item"><div class="dd-icon"><i class="ti ti-star"></i></div><div class="dd-text"><h4>Success Stories</h4><p>Real aspirant journeys</p></div></a>
      <a href="/defence-news" class="dd-item"><div class="dd-icon"><i class="ti ti-news"></i></div><div class="dd-text"><h4>Defence News</h4><p>Latest from the forces</p></div></a>
    </div>
  </div>
</div>

<!-- TOOLS -->
<div id="mega-tools" class="mega-wrap" role="region" aria-label="Tools menu"
  onmouseenter="keepMega('mega-tools')" onmouseleave="closeMega()">
  <div class="mega-inner">
    <span class="mega-label">Quick Tools</span>
    <div class="mega-grid mega-grid-4">
      <a href="/rank-predictor" class="dd-item"><div class="dd-icon"><i class="ti ti-chart-bar"></i></div><div class="dd-text"><h4>AIR Rank Predictor <span class="badge badge-live">Live</span></h4><p>Predict rank with UPSC data</p></div></a>
      <a href="/rank-predictor" class="dd-item"><div class="dd-icon"><i class="ti ti-calculator"></i></div><div class="dd-text"><h4>Marks Calculator</h4><p>Calculate your total score</p></div></a>
      <a href="/eligibility" class="dd-item"><div class="dd-icon"><i class="ti ti-shield-check"></i></div><div class="dd-text"><h4>Eligibility Checker</h4><p>Quick eligibility check</p></div></a>
      <a href="/cutoff-analysis" class="dd-item"><div class="dd-icon"><i class="ti ti-trending-up"></i></div><div class="dd-text"><h4>Cutoff Predictor</h4><p>Written cutoff estimator</p></div></a>
      <a href="/rank-predictor" class="dd-item"><div class="dd-icon"><i class="ti ti-git-branch"></i></div><div class="dd-text"><h4>Branch Predictor</h4><p>Army / Navy / Air Force</p></div></a>
      <a href="/fitness" class="dd-item"><div class="dd-icon"><i class="ti ti-run"></i></div><div class="dd-text"><h4>Fitness Tracker</h4><p>PT &amp; physical prep guide</p></div></a>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     HERO
══════════════════════════════════════ -->
<section class="hero">
  <div class="hero-tag"><span class="pulse"></span> India's Most Complete NDA Platform</div>
  <h1>Your Gateway to the<br><em>Indian Armed Forces</em></h1>
  <p class="hero-sub">Everything NDA aspirants need — Rank Predictor, Syllabus, SSB Guide, Cutoff Analysis, Eligibility, Salary Calculator, and more.</p>
  <div class="hero-btns">
    <button class="btn-pri"><i class="ti ti-chart-bar"></i> Predict My Rank</button>
    <button class="btn-out">Explore NDA →</button>
  </div>
  <div class="hero-stats">
    <div class="stat-item"><div class="stat-n">15+</div><div class="stat-l">Major Sections</div><div class="stat-s">Covered</div></div>
    <div class="stat-item"><div class="stat-n">100+</div><div class="stat-l">Articles</div><div class="stat-s">In-depth guides</div></div>
    <div class="stat-item"><div class="stat-n">10</div><div class="stat-l">Exam Datasets</div><div class="stat-s">Real UPSC data</div></div>
    <div class="stat-item"><div class="stat-n">1900+</div><div class="stat-l">Candidates</div><div class="stat-s">Analyzed</div></div>
  </div>
</section>

<!-- ══════════════════════════════════════
     NOTIFICATION + SELECTION RATE
══════════════════════════════════════ -->
<div class="bg-white">
<div class="wrap"><div class="sec fade-up">
  <div class="info-grid">
    <div class="icard">
      <div class="ilabel">Latest Notification</div>
      <h3>NDA &amp; NA (II) 2026 <span class="badge badge-up">Upcoming</span></h3>
      <p>UPSC notification expected May 2026<br>Application window: May–June 2026<br>Exam date: September 2026</p>
      <hr class="icard-divider">
      <button class="btn-ghost">View Full Notification <i class="ti ti-arrow-right"></i></button>
    </div>
    <div class="icard gold-card">
      <div class="ilabel">Selection Rate</div>
      <div class="bigpct">4%</div>
      <div class="pctlbl">of applicants get selected into NDA</div>
      <div class="funnel">
        <div class="frow"><span class="flbl">Apply</span><div class="ftrack"><div class="fbar" style="width:100%;background:#1565C0"></div></div><span class="fval">~5 lakh</span></div>
        <div class="frow"><span class="flbl">Clear Written</span><div class="ftrack"><div class="fbar" style="width:40%;background:#1976D2"></div></div><span class="fval">~20,000</span></div>
        <div class="frow"><span class="flbl">SSB Recommended</span><div class="ftrack"><div class="fbar" style="width:12%;background:#64B5F6"></div></div><span class="fval">~6,000</span></div>
        <div class="frow"><span class="flbl">Join NDA</span><div class="ftrack"><div class="fbar" style="width:1%;background:#FFB300"></div></div><span class="fval">~400</span></div>
      </div>
    </div>
  </div>
</div></div></div>

<!-- ══════════════════════════════════════
     TOOLS
══════════════════════════════════════ -->
<div class="bg-alt">
<div class="wrap"><div class="sec fade-up">
  <div class="stag">Quick Tools</div>
  <div class="stitle">Powerful Tools at Your Fingertips</div>
  <div class="ssub">Data-driven tools built with real UPSC data to plan your NDA journey.</div>
  <div class="tools-grid">
    <a href="/rank-predictor" class="tcard">
      <div class="ticon b"><i class="ti ti-chart-line" style="color:var(--blue)"></i></div>
      <div class="tcard-top"><span class="tname">AIR Rank Predictor</span><span class="badge badge-live">Live</span></div>
      <div class="tdesc">Predict your All India Rank using verified UPSC data and real candidate scores.</div>
      <i class="ti ti-arrow-right t-arrow"></i>
    </a>
    <a href="/rank-predictor" class="tcard">
      <div class="ticon g"><i class="ti ti-calculator" style="color:var(--green)"></i></div>
      <div class="tcard-top"><span class="tname">Marks Calculator</span></div>
      <div class="tdesc">Calculate your total NDA score instantly with the correct marking scheme applied.</div>
      <i class="ti ti-arrow-right t-arrow"></i>
    </a>
    <a href="/eligibility" class="tcard">
      <div class="ticon a"><i class="ti ti-shield-check" style="color:#E65100"></i></div>
      <div class="tcard-top"><span class="tname">Eligibility Checker</span></div>
      <div class="tdesc">Check if you qualify for NDA based on age, education, and physical standards.</div>
      <i class="ti ti-arrow-right t-arrow"></i>
    </a>
    <a href="/cutoff-analysis" class="tcard">
      <div class="ticon p"><i class="ti ti-trending-up" style="color:#7B1FA2"></i></div>
      <div class="tcard-top"><span class="tname">Cutoff Predictor</span></div>
      <div class="tdesc">Estimate written cutoff chances based on historical trends across 10 exam datasets.</div>
      <i class="ti ti-arrow-right t-arrow"></i>
    </a>
    <a href="/rank-predictor" class="tcard">
      <div class="ticon t"><i class="ti ti-git-branch" style="color:#00695C"></i></div>
      <div class="tcard-top"><span class="tname">Branch Predictor</span></div>
      <div class="tdesc">Predict your chances of Army, Navy, or Air Force based on your rank and preferences.</div>
      <i class="ti ti-arrow-right t-arrow"></i>
    </a>
    <a href="/fitness" class="tcard">
      <div class="ticon r"><i class="ti ti-run" style="color:var(--red)"></i></div>
      <div class="tcard-top"><span class="tname">Fitness Tracker</span></div>
      <div class="tdesc">Track your physical preparation for the NDA medical and SSB fitness requirements.</div>
      <i class="ti ti-arrow-right t-arrow"></i>
    </a>
  </div>
</div></div></div>

<!-- DIVIDER -->
<div class="divlabel"><span>NDA Exam at a Glance</span></div>

<!-- ══════════════════════════════════════
     EXAM PATTERN
══════════════════════════════════════ -->
<div class="bg-white">
<div class="wrap"><div class="sec fade-up">
  <div class="stag">Exam Pattern</div>
  <div class="stitle">NDA Written Examination</div>
  <div class="ssub">Two papers, 900 marks total. Qualifying in both individually is mandatory.</div>
  <div class="exam-grid">
    <div class="ecard">
      <div class="epaper">Paper I</div>
      <h3>Mathematics</h3>
      <table class="etable">
        <tr><td>Total Marks</td><td>300</td></tr>
        <tr><td>Questions</td><td>120 (MCQ)</td></tr>
        <tr><td>Correct Answer</td><td class="positive">+2.5 marks</td></tr>
        <tr><td>Wrong Answer</td><td class="negative">−0.83 marks</td></tr>
        <tr><td>Duration</td><td>2.5 Hours</td></tr>
        <tr><td>Min Qualifying</td><td><strong>75 Marks (25%)</strong></td></tr>
      </table>
    </div>
    <div class="ecard">
      <div class="epaper">Paper II</div>
      <h3>General Ability Test</h3>
      <table class="etable">
        <tr><td>Total Marks</td><td>600</td></tr>
        <tr><td>Questions</td><td>150 (MCQ)</td></tr>
        <tr><td>Correct Answer</td><td class="positive">+4.0 marks</td></tr>
        <tr><td>Wrong Answer</td><td class="negative">−1.33 marks</td></tr>
        <tr><td>Duration</td><td>2.5 Hours</td></tr>
        <tr><td>Min Qualifying</td><td><strong>150 Marks (25%)</strong></td></tr>
      </table>
      <div class="etags">
        <span class="etag">English</span><span class="etag">Physics</span>
        <span class="etag">Chemistry</span><span class="etag">GK</span>
        <span class="etag">History</span><span class="etag">Geography</span>
      </div>
    </div>
  </div>
</div></div></div>

<!-- DIVIDER -->
<div class="divlabel"><span>SSB Selection Process</span></div>

<!-- ══════════════════════════════════════
     SSB
══════════════════════════════════════ -->
<div class="bg-alt">
<div class="wrap"><div class="sec fade-up">
  <div class="stag">SSB Interview</div>
  <div class="stitle">5-Day Selection Process</div>
  <div class="ssub">The SSB tests your Officer Like Qualities through a rigorous 5-day assessment. Only ~4% of SSB attendees are finally recommended.</div>
  <div class="ssb-grid">
    <div class="scard">
      <div class="scard-top"><span class="snum">01</span><span class="sday">Day 1</span></div>
      <div class="stname">Screening</div>
      <div class="stdesc">OIR Test + PPDT — tests basic aptitude and communication skills. Only ~30% clear this stage.</div>
    </div>
    <div class="scard">
      <div class="scard-top"><span class="snum">02</span><span class="sday">Day 2</span></div>
      <div class="stname">Psychology Tests</div>
      <div class="stdesc">TAT, WAT, SRT, SDT — in-depth tests that reveal personality and thought process.</div>
    </div>
    <div class="scard">
      <div class="scard-top"><span class="snum">03</span><span class="sday">Day 3–4</span></div>
      <div class="stname">GTO Tasks</div>
      <div class="stdesc">Group Discussions, Planning Exercise, Progressive Group Tasks, HGT, and Command Task.</div>
    </div>
    <div class="scard">
      <div class="scard-top"><span class="snum">04</span><span class="sday">Day 3–4</span></div>
      <div class="stname">Personal Interview</div>
      <div class="stdesc">One-on-one with the Interviewing Officer. Tests knowledge, personality and motivation.</div>
    </div>
  </div>
  <div class="ssb-cta">
    <a href="/ssb" class="btn-ghost">View Complete SSB Guide <i class="ti ti-arrow-right"></i></a>
  </div>
</div></div></div>

<!-- ══════════════════════════════════════
     NDA JOURNEY (INTERACTIVE TABS)
══════════════════════════════════════ -->
<div class="bg-white">
<div class="wrap"><div class="sec fade-up">
  <div class="stag">Your NDA Journey</div>
  <div class="stitle">4 Stages to the Academy</div>
  <div class="ssub">Click any stage to learn more about what to expect and prepare.</div>
  <div class="journey-track">
    <div class="jstep active" onclick="setJourney(0)">
      <div class="jphase">Stage 1</div>
      <div class="jnum">1</div>
      <h4>Apply</h4>
      <p>UPSC form, eligibility, documents</p>
    </div>
    <div class="jstep" onclick="setJourney(1)">
      <div class="jphase">Stage 2</div>
      <div class="jnum">2</div>
      <h4>Written Exam</h4>
      <p>Maths + GAT · 900 marks total</p>
    </div>
    <div class="jstep" onclick="setJourney(2)">
      <div class="jphase">Stage 3</div>
      <div class="jnum">3</div>
      <h4>SSB Interview</h4>
      <p>5-day psychological assessment</p>
    </div>
    <div class="jstep" onclick="setJourney(3)">
      <div class="jphase">Stage 4</div>
      <div class="jnum">4</div>
      <h4>Medical &amp; Merit</h4>
      <p>Medical board + final merit list</p>
    </div>
  </div>
  <div id="journey-info" style="background:var(--pale);border:1px solid var(--border);border-radius:16px;padding:24px 28px;font-size:14px;color:var(--muted);line-height:1.75;transition:opacity .2s">
    <strong style="color:var(--text)">Stage 1 — Apply:</strong> Fill the UPSC NDA form online during the notification window (typically Feb and Aug). Ensure you meet the age criteria (16.5–19.5 years), educational qualifications (Class 12 pass/appearing), and physical standards. Male and female candidates both eligible since 2022. Application fee: ₹100 (SC/ST exempt).
  </div>
</div></div></div>

<!-- DIVIDER -->
<div class="divlabel"><span>Salary &amp; Career</span></div>

<!-- ══════════════════════════════════════
     SALARY
══════════════════════════════════════ -->
<div class="bg-alt">
<div class="wrap"><div class="sec fade-up">
  <div class="stag">Career Growth</div>
  <div class="stitle">Officer Salary Progression</div>
  <div class="ssub">From cadet stipend to General-level pay — a complete breakdown.</div>
  <div class="salary-grid">
    <div class="salcard">
      <div class="sal-icon"><i class="ti ti-award"></i></div>
      <div class="sal-rank">Cadet (NDA)</div>
      <div class="sal-years">During Training</div>
      <div class="sal-pay">₹56,100/mo</div>
      <div class="sal-bar"><div class="sal-fill" style="width:18%"></div></div>
    </div>
    <div class="salcard">
      <div class="sal-icon"><i class="ti ti-award"></i></div>
      <div class="sal-rank">Lieutenant</div>
      <div class="sal-years">0–2 Years</div>
      <div class="sal-pay">₹56,100 – 1,77,500</div>
      <div class="sal-bar"><div class="sal-fill" style="width:32%"></div></div>
    </div>
    <div class="salcard">
      <div class="sal-icon"><i class="ti ti-award"></i></div>
      <div class="sal-rank">Captain</div>
      <div class="sal-years">2–6 Years</div>
      <div class="sal-pay">₹61,300 – 1,93,900</div>
      <div class="sal-bar"><div class="sal-fill" style="width:48%"></div></div>
    </div>
    <div class="salcard">
      <div class="sal-icon"><i class="ti ti-award"></i></div>
      <div class="sal-rank">Major</div>
      <div class="sal-years">6–13 Years</div>
      <div class="sal-pay">₹69,400 – 2,07,200</div>
      <div class="sal-bar"><div class="sal-fill" style="width:60%"></div></div>
    </div>
  </div>
  <p class="sal-note">*7th CPC pay matrix + MSP (₹15,500) + DA + HRA + allowances. Actual take-home varies by posting.</p>
  <div class="ssb-cta">
    <button class="btn-ghost">View Detailed Breakdown <i class="ti ti-arrow-right"></i></button>
  </div>
</div></div></div>

<!-- ══════════════════════════════════════
     RANK STRUCTURE
══════════════════════════════════════ -->
<div class="bg-white">
<div class="wrap"><div class="sec fade-up">
  <div class="stag">Defence Forces</div>
  <div class="stitle">Officer Rank Structure</div>
  <div class="ssub">Rank progression across all three services of the Indian Armed Forces.</div>
  <div class="rank-grid">
    <div class="rcard">
      <div class="rhead"><div class="rdot army"></div><span class="rname">Indian Army</span></div>
      <ul class="rlist">
        <li><span class="rrank-num">1.</span>Lieutenant</li>
        <li><span class="rrank-num">2.</span>Captain</li>
        <li><span class="rrank-num">3.</span>Major</li>
        <li><span class="rrank-num">4.</span>Lt Colonel</li>
        <li><span class="rrank-num">5.</span>Colonel</li>
        <li><span class="rrank-num">6.</span>Brigadier</li>
        <li><span class="rrank-num">7.</span>Major General</li>
        <li><span class="rrank-num">8.</span>Lt General</li>
        <li><span class="rrank-num">9.</span>General</li>
      </ul>
    </div>
    <div class="rcard">
      <div class="rhead"><div class="rdot navy"></div><span class="rname">Indian Navy</span></div>
      <ul class="rlist">
        <li><span class="rrank-num">1.</span>Sub Lieutenant</li>
        <li><span class="rrank-num">2.</span>Lieutenant</li>
        <li><span class="rrank-num">3.</span>Lt Commander</li>
        <li><span class="rrank-num">4.</span>Commander</li>
        <li><span class="rrank-num">5.</span>Captain</li>
        <li><span class="rrank-num">6.</span>Commodore</li>
        <li><span class="rrank-num">7.</span>Rear Admiral</li>
        <li><span class="rrank-num">8.</span>Vice Admiral</li>
        <li><span class="rrank-num">9.</span>Admiral</li>
      </ul>
    </div>
    <div class="rcard">
      <div class="rhead"><div class="rdot af"></div><span class="rname">Indian Air Force</span></div>
      <ul class="rlist">
        <li><span class="rrank-num">1.</span>Flying Officer</li>
        <li><span class="rrank-num">2.</span>Flt Lieutenant</li>
        <li><span class="rrank-num">3.</span>Sqn Leader</li>
        <li><span class="rrank-num">4.</span>Wing Commander</li>
        <li><span class="rrank-num">5.</span>Gp Captain</li>
        <li><span class="rrank-num">6.</span>Air Commodore</li>
        <li><span class="rrank-num">7.</span>Air Vice Marshal</li>
        <li><span class="rrank-num">8.</span>Air Marshal</li>
        <li><span class="rrank-num">9.</span>ACM</li>
      </ul>
    </div>
  </div>
</div></div></div>

<!-- DIVIDER -->
<div class="divlabel"><span>Latest Updates</span></div>

<!-- ══════════════════════════════════════
     NEWS
══════════════════════════════════════ -->
<div class="bg-alt">
<div class="wrap"><div class="sec fade-up">
  <div class="stag">Defence News</div>
  <div class="stitle">Latest Updates</div>
  <div class="ssub">Stay updated with NDA and defence-related news and notifications.</div>
  <div class="news-grid">
    <div class="ncard">
      <span class="ntag notif">Notification</span>
      <h4>NDA 2 2026 Notification Expected in May</h4>
      <div class="ndate"><i class="ti ti-clock"></i> May 2026</div>
    </div>
    <div class="ncard">
      <span class="ntag upd">Update</span>
      <h4>UPSC Announces Changes to NDA Exam Pattern</h4>
      <div class="ndate"><i class="ti ti-clock"></i> Apr 2026</div>
    </div>
    <div class="ncard">
      <span class="ntag train">Training</span>
      <h4>Indian Army Inducts New Batch of NDA Cadets</h4>
      <div class="ndate"><i class="ti ti-clock"></i> Mar 2026</div>
    </div>
  </div>
</div></div></div>

<!-- DIVIDER -->
<div class="divlabel"><span>Success Stories</span></div>

<!-- ══════════════════════════════════════
     TESTIMONIALS
══════════════════════════════════════ -->
<div class="bg-white">
<div class="wrap"><div class="sec fade-up">
  <div class="stag">Testimonials</div>
  <div class="stitle">Real Aspirant Journeys</div>
  <div class="ssub">Hear from NDA cadets who used ConquerNDA to plan smarter and rank better.</div>
  <div class="test-grid">
    <div class="tcard2">
      <div class="stars"><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span></div>
      <p class="tquote">"The rank predictor was incredibly accurate — I got AIR 234, just 20 off the prediction. This platform gave me the confidence to push harder."</p>
      <div class="tperson">
        <div class="tav bl">A</div>
        <div><div class="tpname">Arjun Sharma</div><div class="tpsub">Indian Army · NDA 148</div></div>
      </div>
    </div>
    <div class="tcard2">
      <div class="stars"><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span></div>
      <p class="tquote">"As a female candidate, finding reliable NDA info was hard. This platform had everything — SSB psychology, CPSS prep, and fitness tracking."</p>
      <div class="tperson">
        <div class="tav pu">P</div>
        <div><div class="tpname">Priya Deshmukh</div><div class="tpsub">Indian Air Force · NDA 153</div></div>
      </div>
    </div>
    <div class="tcard2">
      <div class="stars"><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span></div>
      <p class="tquote">"The SSB section alone is worth gold. The psychology test guides and GTO task breakdowns helped me clear SSB in my first attempt."</p>
      <div class="tperson">
        <div class="tav gr">V</div>
        <div><div class="tpname">Vikram Singh</div><div class="tpsub">Indian Navy · NDA 151</div></div>
      </div>
    </div>
  </div>
</div></div></div>

<!-- ══════════════════════════════════════
     FAQ
══════════════════════════════════════ -->
<div class="bg-alt">
<div class="wrap"><div class="sec fade-up" style="text-align:center">
  <div class="stag">FAQ</div>
  <div class="stitle">Common Questions</div>
  <p class="ssub" style="margin:8px auto 32px;max-width:420px;text-align:center">Quick answers to the most common NDA-related questions.</p>
  <div class="faq-wrap" style="text-align:left">
    <div class="faq-item">
      <button class="fq" onclick="faqToggle(this)">What is NDA and who can apply? <i class="ti ti-chevron-down fchev"></i></button>
      <div class="fa"><p>NDA (National Defence Academy) is India's premier tri-services training institution. Unmarried male and female candidates aged 16.5–19.5 years who have passed or are appearing in Class 12 with Physics and Maths (for technical wings) can apply. The exam is conducted twice a year by UPSC.</p></div>
    </div>
    <div class="faq-item">
      <button class="fq" onclick="faqToggle(this)">What is the NDA exam pattern? <i class="ti ti-chevron-down fchev"></i></button>
      <div class="fa"><p>The NDA written exam has two papers: Mathematics (300 marks, 120 MCQs) and General Ability Test (600 marks, 150 MCQs). Total is 900 marks. Both have negative marking. Qualifying in both individually is mandatory. After the written exam, shortlisted candidates attend SSB (900 marks).</p></div>
    </div>
    <div class="faq-item">
      <button class="fq" onclick="faqToggle(this)">What is the NDA cutoff usually? <i class="ti ti-chevron-down fchev"></i></button>
      <div class="fa"><p>Written cutoffs typically range from 300–360 out of 900 depending on exam difficulty. Final merit cutoffs (written + SSB) usually fall between 680–750 out of 1800. Use our Cutoff Predictor tool for year-wise analysis backed by real UPSC data.</p></div>
    </div>
    <div class="faq-item">
      <button class="fq" onclick="faqToggle(this)">How does the SSB interview work? <i class="ti ti-chevron-down fchev"></i></button>
      <div class="fa"><p>SSB is a 5-day assessment worth 900 marks. Day 1: Screening (OIR + PPDT). Day 2: Psychology tests (TAT, WAT, SRT, SDT). Days 3–4: GTO tasks and personal interview with the IO. Day 5: Conference and results. Only ~30% clear screening, and ~6–8% are finally recommended.</p></div>
    </div>
    <div class="faq-item">
      <button class="fq" onclick="faqToggle(this)">What is the salary of an NDA officer? <i class="ti ti-chevron-down fchev"></i></button>
      <div class="fa"><p>An NDA cadet receives ₹56,100/month as stipend during training. After commissioning as Lieutenant, pay ranges from ₹56,100–1,77,500 plus MSP (₹15,500), DA, HRA, and other allowances. Total CTC for a new officer can exceed ₹1 lakh/month before tax.</p></div>
    </div>
    <div class="faq-item">
      <button class="fq" onclick="faqToggle(this)">Can girls apply for NDA? <i class="ti ti-chevron-down fchev"></i></button>
      <div class="fa"><p>Yes! Since 2022, following a Supreme Court order, NDA admits female candidates. Unmarried women aged 16.5–19.5 who have passed Class 12 with Physics and Maths (for Army technical, Navy, Air Force wings) can apply. Eligibility criteria are otherwise the same as for male candidates.</p></div>
    </div>
    <div class="faq-item">
      <button class="fq" onclick="faqToggle(this)">What is the NDA training duration? <i class="ti ti-chevron-down fchev"></i></button>
      <div class="fa"><p>NDA training spans 3 years (6 terms) at Khadakwasla, Pune. After this, cadets go to their respective service academies — IMA Dehradun (Army), INA Ezhimala (Navy), or AFA Hyderabad (Air Force) — for another 1–1.5 years of pre-commissioning training.</p></div>
    </div>
  </div>
</div></div></div>

<!-- ══════════════════════════════════════
     CTA BANNER
══════════════════════════════════════ -->
<div class="bg-white">
<div class="wrap">
  <div class="cta-banner fade-up">
    <div class="cta-left">
      <h2>Start your NDA<br>prep today.</h2>
      <p>Join 1,900+ candidates who used ConquerNDA to plan smarter, rank higher, and serve the nation.</p>
      <div style="margin-top:24px;display:flex;gap:12px">
        <button class="btn-wh">Predict My AIR Rank →</button>
        <button style="background:rgba(255,255,255,.12);color:white;padding:13px 24px;border-radius:28px;font-size:14px;font-weight:500;cursor:pointer;border:1px solid rgba(255,255,255,.25);font-family:'DM Sans',sans-serif;transition:background .2s" onmouseover="this.style.background='rgba(255,255,255,.2)'" onmouseout="this.style.background='rgba(255,255,255,.12)'">Browse All Tools</button>
      </div>
    </div>
    <div class="cta-right">
      <div class="cta-stats">
        <div class="ctat"><div class="cn">1900+</div><div class="cl">Candidates Analyzed</div></div>
        <div class="ctat"><div class="cn">10</div><div class="cl">Exam Datasets</div></div>
        <div class="ctat"><div class="cn">100+</div><div class="cl">Articles</div></div>
      </div>
    </div>
  </div>
</div></div>

<!-- ══════════════════════════════════════
     FOOTER
══════════════════════════════════════ -->
<footer>
  <div class="foot-grid">
    <div>
      <div class="flogo">
        <div class="flogo-ic"><svg viewBox="0 0 24 24"><path d="M12 2L4 7v6c0 5 3.5 9.3 8 10.5C16.5 22.3 20 18 20 13V7L12 2z"/></svg></div>
        ConquerNDA
      </div>
      <p class="fdesc">India's most complete platform for National Defence Academy aspirants. Real data, precise predictions, and comprehensive guides for every stage of your NDA journey.</p>
      <p class="fdiscl">Estimated predictions · UPSC NDA Data 2020–2025<br>Not affiliated with UPSC or Indian Armed Forces.</p>
    </div>
    <div class="fcol">
      <h4>Preparation</h4>
      <a>Complete Syllabus</a>
      <a>Exam Pattern</a>
      <a>Cutoff Trends</a>
      <a>Previous Papers</a>
      <a>Mock Tests</a>
      <a>Books & Resources</a>
    </div>
    <div class="fcol">
      <h4>Resources</h4>
      <a>AIR Rank Predictor</a>
      <a>SSB Interview Guide</a>
      <a>Eligibility Checker</a>
      <a>Salary & Perks</a>
      <a>Branch Predictor</a>
      <a>Defence News</a>
    </div>
    <div class="fcol">
      <h4>Legal</h4>
      <a>About Us</a>
      <a>Contact</a>
      <a>Privacy Policy</a>
      <a>Terms of Service</a>
    </div>
  </div>
  <div class="foot-bot">
    <p>© 2026 ConquerNDA. All rights reserved.</p>
    <div class="foot-link">Predict My AIR Rank <i class="ti ti-arrow-right"></i></div>
  </div>
</footer>
`;

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Mega-menu open/close with hover + keyboard
    let closeTimer: ReturnType<typeof setTimeout> | null = null;
    let currentMega: string | null = null;

    (window as any).openMega = function(id: string, btn: HTMLElement) {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      if (currentMega && currentMega !== id) {
        const prev = document.getElementById(currentMega);
        if (prev) prev.classList.remove('show');
        document.querySelectorAll('.nav-btn').forEach(b => { b.classList.remove('open'); (b as HTMLElement).setAttribute('aria-expanded','false'); });
      }
      const panel = document.getElementById(id);
      if (panel) { panel.classList.add('show'); }
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      currentMega = id;
    };

    (window as any).keepMega = function(id: string) {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      currentMega = id;
    };

    (window as any).closeMega = function() {
      closeTimer = setTimeout(() => {
        document.querySelectorAll('.mega-wrap').forEach(p => p.classList.remove('show'));
        document.querySelectorAll('.nav-btn').forEach(b => { b.classList.remove('open'); (b as HTMLElement).setAttribute('aria-expanded','false'); });
        currentMega = null;
      }, 120);
    };

    (window as any).handleNavKey = function(e: KeyboardEvent, id: string, btn: HTMLElement) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const panel = document.getElementById(id);
        if (!panel) return;
        const isOpen = panel.classList.contains('show');
        document.querySelectorAll('.mega-wrap').forEach(p => p.classList.remove('show'));
        document.querySelectorAll('.nav-btn').forEach(b => { b.classList.remove('open'); (b as HTMLElement).setAttribute('aria-expanded','false'); });
        if (!isOpen) { panel.classList.add('show'); btn.classList.add('open'); btn.setAttribute('aria-expanded','true'); currentMega = id; }
        else { currentMega = null; }
      }
      if (e.key === 'Escape') {
        document.querySelectorAll('.mega-wrap').forEach(p => p.classList.remove('show'));
        document.querySelectorAll('.nav-btn').forEach(b => { b.classList.remove('open'); (b as HTMLElement).setAttribute('aria-expanded','false'); });
        currentMega = null;
        btn.focus();
      }
    };

    // Add mouseleave to each nav-btn too so leaving button starts the close timer
    document.querySelectorAll('.nav-btn').forEach(btn => {
      (btn as HTMLElement).addEventListener('mouseleave', (window as any).closeMega);
    });

    // Close on outside click
    const handleOutsideClick = function(e: MouseEvent) {
      const target = e.target as Element;
      if (!target.closest('.nav-btn') && !target.closest('.mega-wrap')) {
        document.querySelectorAll('.mega-wrap').forEach(p => p.classList.remove('show'));
        document.querySelectorAll('.nav-btn').forEach(b => { b.classList.remove('open'); (b as HTMLElement).setAttribute('aria-expanded','false'); });
        currentMega = null;
      }
    };
    document.addEventListener('click', handleOutsideClick);

    // Escape closes from anywhere
    const handleEsc = function(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.mega-wrap').forEach(p => p.classList.remove('show'));
        document.querySelectorAll('.nav-btn').forEach(b => { b.classList.remove('open'); (b as HTMLElement).setAttribute('aria-expanded','false'); });
        currentMega = null;
      }
    };
    document.addEventListener('keydown', handleEsc);

    (window as any).faqToggle = function (btn: HTMLElement) {
      var fa = btn.nextElementSibling as HTMLElement;
      var open = fa.classList.contains('open');
      document.querySelectorAll('.fa').forEach(f => f.classList.remove('open'));
      document.querySelectorAll('.fq').forEach(f => f.classList.remove('open'));
      if (!open) { fa.classList.add('open'); btn.classList.add('open'); }
    };

    var journeyData = [
      "<strong style='color:var(--text)'>Stage 1 — Apply:</strong> Fill the UPSC NDA form online during the notification window (typically Feb and Aug). Ensure you meet age criteria (16.5–19.5 years), educational qualifications (Class 12 pass/appearing), and physical standards. Both male and female candidates eligible since 2022. Application fee: ₹100 (SC/ST exempt).",
      "<strong style='color:var(--text)'>Stage 2 — Written Exam:</strong> Two papers totalling 900 marks. Paper I: Mathematics (300 marks, 120 MCQs). Paper II: General Ability Test (600 marks, 150 MCQs). Negative marking applies. Duration: 2.5 hours each. Minimum qualifying: 25% in each paper. Results declare in 2–3 months.",
      "<strong style='color:var(--text)'>Stage 3 — SSB Interview:</strong> 5-day process worth 900 marks. Day 1: Screening (OIR + PPDT) — only ~30% proceed. Day 2: Psychology tests (TAT, WAT, SRT, SDT). Days 3–4: GTO Tasks + Personal Interview. Day 5: Conference. Recommended candidates (~6–8%) proceed to medical.",
      "<strong style='color:var(--text)'>Stage 4 — Medical &amp; Merit:</strong> Recommended candidates undergo a detailed medical examination at designated Military Hospitals. Those declared fit are placed on the final merit list combining written + SSB scores. Top candidates across merit get allotted to Army, Navy (including Naval Academy), or Air Force wings."
    ];

    (window as any).setJourney = function (n: number) {
      document.querySelectorAll('.jstep').forEach((s, i) => s.classList.toggle('active', i === n));
      var info = document.getElementById('journey-info');
      if (!info) return;
      info.style.opacity = '0';
      setTimeout(function () {
        info!.innerHTML = journeyData[n];
        info!.style.opacity = '1';
      }, 160);
    };

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(function (el) { obs.observe(el); });

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
      obs.disconnect();
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, []);

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
  );
}
