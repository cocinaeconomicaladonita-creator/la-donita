const number = '529995769415';
for (const link of document.querySelectorAll('[data-wa]')) link.href = `https://wa.me/${number}?text=${encodeURIComponent(link.dataset.wa)}`;
const groupInviteUrl = 'https://chat.whatsapp.com/KxTNJ7ZRFLU4tTpyJElz9z';
for (const link of document.querySelectorAll('.group-link')) link.href = groupInviteUrl || `https://wa.me/${number}?text=${encodeURIComponent('Hola, Doñita. Vengo de su página web y me gustaría unirme al grupo de WhatsApp para recibir el menú y los anuncios diarios. ¿Me comparte el enlace, por favor?')}`;
for (const link of document.querySelectorAll('a[href^="https://wa.me/"], a[href^="https://chat.whatsapp.com/"]')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); } });
