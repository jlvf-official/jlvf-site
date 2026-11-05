const toggle=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));navigation.classList.toggle('open',!open)});
navigation.addEventListener('click',event=>{if(event.target.closest('a')){navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
const opening=document.querySelector('.opening-text-only');
document.querySelector('.replay-intro').addEventListener('click',()=>{opening.classList.add('replay-reset');void opening.offsetWidth;opening.classList.remove('replay-reset');});
