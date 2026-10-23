import './style.css';

// DOM Elements
const mobilemenu = document.getElementById('mobile-menu');
const menubtn = document.getElementById('menu-btn');

const btnProject = document.getElementById('btn-project');
const btnMonthly = document.getElementById('btn-monthly');
const priceStarter = document.getElementById('price-starter');
const pricePro = document.getElementById('price-pro');
const periodStarter = document.getElementById('period-starter');
const periodPro = document.getElementById('period-pro');
const ctaStarter = document.getElementById('cta-starter');
const ctaPro = document.getElementById('cta-pro');

const faqItems = document.querySelectorAll('.faq-item');

// 1. Mobile Menu Toggle
if (menubtn && mobilemenu) {
  menubtn.addEventListener('click', () => {
    mobilemenu.classList.toggle('hidden');
  });

  // Close mobile menu on link click
  mobilemenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobilemenu.classList.add('hidden');
    });
  });
}

// 2. Pricing Toggle Logic
if (btnProject && btnMonthly) {
  btnProject.addEventListener('click', () => {
    btnProject.classList.add('bg-indigo-600', 'text-white');
    btnProject.classList.remove('text-slate-400');
    btnMonthly.classList.remove('bg-indigo-600', 'text-white');
    btnMonthly.classList.add('text-slate-400');

    if (priceStarter) priceStarter.textContent = 'Rp 1.5jt';
    if (periodStarter) periodStarter.textContent = '/proyek';
    if (pricePro) pricePro.textContent = 'Rp 3.5jt';
    if (periodPro) periodPro.textContent = '/proyek';

    if (ctaStarter) {
      ctaStarter.href = 'https://wa.me/6282289634937?text=Halo%20Studio%20Biu,%20saya%20tertarik%20dengan%20Paket%20Landing%20Page%20(Rp%201.5jt%20Sekali%20Bayar)';
    }
    if (ctaPro) {
      ctaPro.href = 'https://wa.me/6282289634937?text=Halo%20Studio%20Biu,%20saya%20tertarik%20dengan%20Paket%20Pro%20(Rp%203.5jt%20Sekali%20Bayar)';
    }
  });

  btnMonthly.addEventListener('click', () => {
    btnProject.classList.remove('bg-indigo-600', 'text-white');
    btnProject.classList.add('text-slate-400');
    btnMonthly.classList.add('bg-indigo-600', 'text-white');
    btnMonthly.classList.remove('text-slate-400');

    if (priceStarter) priceStarter.textContent = 'Rp 300rb';
    if (periodStarter) periodStarter.textContent = '/bulan';
    if (pricePro) pricePro.textContent = 'Rp 750rb';
    if (periodPro) periodPro.textContent = '/bulan';

    if (ctaStarter) {
      ctaStarter.href = 'https://wa.me/6282289634937?text=Halo%20Studio%20Biu,%20saya%20tertarik%20dengan%20Paket%20Landing%20Page%20Langganan%20(Rp%20300rb%20per%20bulan)';
    }
    if (ctaPro) {
      ctaPro.href = 'https://wa.me/6282289634937?text=Halo%20Studio%20Biu,%20saya%20tertarik%20dengan%20Paket%20Pro%20Langganan%20(Rp%20750rb%20per%20bulan)';
    }
  });
}

// 3. FAQ Accordion Toggle
faqItems.forEach(item => {
  const btn = item.querySelector('.faq-btn');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');

  if (btn && answer && icon) {
    btn.addEventListener('click', () => {
      const isHidden = answer.classList.contains('hidden');
      
      // Close all other open items for cleaner UX
      faqItems.forEach(otherItem => {
        const otherAnswer = otherItem.querySelector('.faq-answer');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherAnswer && otherIcon) {
          otherAnswer.classList.add('hidden');
          otherIcon.classList.remove('rotate-180');
        }
      });

      if (isHidden) {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    });
  }
});
