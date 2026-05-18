/* ═══════════════════════════════════════════════
   script.js — Portfólio Italo Ian
   ═══════════════════════════════════════════════ */

/* ── Hambúrguer menu ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

/* ── Fechar menu ao redimensionar para desktop ── */
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

/* ── Validação do formulário ── */
const form = document.getElementById('contactForm');

function setError(id, show) {
  const fg = document.getElementById('fg-' + id);
  if (show) fg.classList.add('has-error');
  else      fg.classList.remove('has-error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome     = document.getElementById('nome').value.trim();
  const email    = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  let valid = true;

  if (!nome)                { setError('nome',  true);  valid = false; }
  else                      { setError('nome',  false); }

  if (!isValidEmail(email)) { setError('email', true);  valid = false; }
  else                      { setError('email', false); }

  if (!mensagem)            { setError('msg',   true);  valid = false; }
  else                      { setError('msg',   false); }

  if (valid) {
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }
});
