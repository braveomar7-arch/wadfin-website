
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
}

document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link=>{
  link.addEventListener('click',e=>{
    if(window.innerWidth<=980){
      e.preventDefault();
      const item=link.closest('.nav-item');
      document.querySelectorAll('.nav-item.open').forEach(other=>{
        if(other!==item) other.classList.remove('open');
      });
      item.classList.toggle('open');
    }
  });
});

document.querySelectorAll('.dropdown a').forEach(a=>{
  a.addEventListener('click',()=>{
    nav?.classList.remove('open');
    document.querySelectorAll('.nav-item.open').forEach(i=>i.classList.remove('open'));
  });
});

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
