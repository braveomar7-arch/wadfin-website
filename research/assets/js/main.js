const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');

function closeNav(){
  nav?.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuBtn?.setAttribute('aria-expanded','false');
  document.querySelectorAll('.nav-item.open').forEach(i=>i.classList.remove('open'));
}

if(menuBtn&&nav){
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    document.body.classList.toggle('menu-open',open);
    menuBtn.setAttribute('aria-expanded',String(open));
  });
}

document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link=>{
  link.addEventListener('click',e=>{
    if(window.innerWidth<=980){
      e.preventDefault();
      const item=link.closest('.nav-item');
      const willOpen=!item.classList.contains('open');
      document.querySelectorAll('.nav-item.open').forEach(other=>{
        if(other!==item) other.classList.remove('open');
      });
      item.classList.toggle('open',willOpen);
    }
  });
});

document.querySelectorAll('.dropdown a').forEach(a=>{
  a.addEventListener('click',closeNav);
});

window.addEventListener('resize',()=>{
  if(window.innerWidth>980) closeNav();
});

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
