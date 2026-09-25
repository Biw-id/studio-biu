import './style.css';

const mobilemenu = document.getElementById('mobile-menu');
const menubtn = document.getElementById('menu-btn');

const btnProject = document.getElementById('btn-project');
const btnMonthly = document.getElementById('btn-monthly');
const priceStarter = document.getElementById('price-starter');
const pricePro = document.getElementById('price-pro');
const periodStarter = document.getElementById('period-starter');
const periodPro = document.getElementById('period-pro');

const faqItems = document.querySelectorAll('.faq-item');

menubtn.addEventListener('click', () => {
    mobilemenu.classList.toggle('hidden');
})

btnProject.addEventListener('click', () => {
    btnProject.classList.add('bg-indigo-600', 'text-white');
    btnProject.classList.remove('text-slate-400');
    btnMonthly.classList.remove('bg-indigo-600', 'text-white');
    btnMonthly.classList.add('text-slate-400');

    priceStarter.textContent = 'Rp 1.5jt';
    pricePro.textContent = 'Rp 3.5jt';
    periodStarter.textContent = '/proyek';
    periodPro.textContent = '/proyek';
})

btnMonthly.addEventListener('click', () => {
    btnProject.classList.remove('bg-indigo-600', 'text-white');
    btnProject.classList.add('text-slate-400');
    btnMonthly.classList.add('bg-indigo-600', 'text-white');
    btnMonthly.classList.remove('text-slate-400');

    priceStarter.textContent = 'Rp 300rb';
    pricePro.textContent = 'Rp 750rb';
    periodStarter.textContent = '/bulan';
    periodPro.textContent = '/bulan';
})

faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn')
    const answer = item.querySelector('.faq-answer')
    const icon = item.querySelector('.faq-icon')

    btn.addEventListener('click', () => {
        answer.classList.toggle('hidden')
        icon.classList.toggle('rotate-180')
    })
})