/* ============================================================
   CONSTANTES DE CONFIGURACIÓN — editar aquí precios, textos,
   catálogo e imágenes sin tocar la lógica de abajo.
   ============================================================ */
const RESTAURANT_NAME = 'Verde Brasa';
const DELIVERY_FEE = 4000; // COP
const STAGE_DURATION_MS = 5000; // demo: avanza de etapa cada 5s
const ORDER_STAGES = ['Recibido', 'Preparando', 'Listo', 'Entregado'];

// Formato de moneda: pesos colombianos, sin decimales (ej. $25.000)
const fmt = (n) => '$' + Math.round(n).toLocaleString('es-CO');

// Categorías del menú
const CATEGORIES = [
  { id: 'burger',   label: 'Hamburguesas' },
  { id: 'salchi',   label: 'Salchipapas' },
  { id: 'almuerzo', label: 'Almuerzos' },
  { id: 'bebida',   label: 'Bebidas' },
  { id: 'postre',   label: 'Postres' },
];

// Imágenes reales de Unsplash (foto de stock, solo para esta demo visual)
const IMG = {
  burger1: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  burger2: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
  burger3: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80',
  burger4: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
  fries1:  'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
  fries2:  'https://images.unsplash.com/photo-1541599468348-e96984315921?auto=format&fit=crop&w=600&q=80',
  lunch1:  'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
  lunch2:  'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80',
  lemonade:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80',
  soda:    'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80',
  brownie: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
  churros: 'https://images.unsplash.com/photo-1624454002302-c8d8ffbee3e5?auto=format&fit=crop&w=600&q=80',
};

// Opciones para armar una hamburguesa (precios en COP)
const BUN_OPTIONS = [
  { id: 'brioche', name: 'Pan brioche',        extra: 0 },
  { id: 'sesamo',  name: 'Pan con ajonjolí',    extra: 0 },
  { id: 'integral',name: 'Pan integral',        extra: 1500 },
  { id: 'sinpan',  name: 'Sin pan (bowl)',      extra: -2000 },
];
const PROTEIN_OPTIONS = [
  { id: 'res',     name: 'Carne de res 150g',   extra: 0 },
  { id: 'doble',   name: 'Doble carne',         extra: 9000 },
  { id: 'pollo',   name: 'Pollo a la parrilla', extra: 2000 },
  { id: 'veggie',  name: 'Vegetariana (portobello)', extra: 3000 },
  { id: 'sincarne',name: 'Sin carne',           extra: -5000 },
];
const CHEESE_OPTIONS = [
  { id: 'sin',      name: 'Sin queso',        extra: 0 },
  { id: 'americano',name: 'Queso americano',  extra: 2500 },
  { id: 'cheddar',  name: 'Cheddar añejo',    extra: 3500 },
  { id: 'doble',    name: 'Doble queso',      extra: 6000 },
];
const VEGGIE_TOGGLES = [
  { id: 'lechuga',  name: 'Lechuga' },
  { id: 'tomate',   name: 'Tomate' },
  { id: 'cebolla',  name: 'Cebolla morada' },
  { id: 'pepinillo',name: 'Pepinillos' },
  { id: 'aguacate', name: 'Aguacate', extra: 3500 },
];
const SAUCE_OPTIONS = [
  { id: 'especial', name: 'Salsa de la casa' },
  { id: 'bbq',      name: 'BBQ ahumada' },
  { id: 'picante',  name: 'Picante habanero' },
  { id: 'sinSalsa', name: 'Sin salsa' },
];

// Catálogo de productos (precios en COP)
const MENU = [
  { id:'b1', cat:'burger', name:'Clásica Verde', desc:'Res, queso americano, vegetales frescos', price:25000, img:IMG.burger1, tag:'MÁS PEDIDA', customizable:true },
  { id:'b2', cat:'burger', name:'Doble Brasa', desc:'Doble carne, cheddar añejo, BBQ', price:34000, img:IMG.burger2, customizable:true },
  { id:'b3', cat:'burger', name:'Pollo Grill', desc:'Pechuga a la parrilla, aguacate', price:24000, img:IMG.burger3, customizable:true },
  { id:'b4', cat:'burger', name:'Portobello Veggie', desc:'100% vegetariana, sin carne animal', price:22000, img:IMG.burger4, tag:'VEGGIE', customizable:true },
  { id:'s1', cat:'salchi', name:'Salchipapa Clásica', desc:'Papas, salchicha, tocino, salsas', price:21000, img:IMG.fries1, customizable:false },
  { id:'s2', cat:'salchi', name:'Salchipapa Ranchera', desc:'Con chorizo, jalapeño y queso fundido', price:26000, img:IMG.fries2, customizable:false },
  { id:'a1', cat:'almuerzo', name:'Pollo en crema', desc:'Con arroz, ensalada y patacón', price:28000, img:IMG.lunch1, customizable:false },
  { id:'a2', cat:'almuerzo', name:'Lomito a la plancha', desc:'Con papas doradas y ensalada', price:32000, img:IMG.lunch2, customizable:false },
  { id:'d1', cat:'bebida', name:'Limonada de coco', desc:'Refrescante, hecha al momento', price:8000, img:IMG.lemonade, customizable:false },
  { id:'d2', cat:'bebida', name:'Gaseosa 400ml', desc:'Variedad de sabores', price:6000, img:IMG.soda, customizable:false },
  { id:'p1', cat:'postre', name:'Brownie con helado', desc:'Chocolate 70% y helado de vainilla', price:12000, img:IMG.brownie, customizable:false },
  { id:'p2', cat:'postre', name:'Churros rellenos', desc:'Con dulce de leche', price:10000, img:IMG.churros, customizable:false },
];

/* ============================================================
   ESTADO
   ============================================================ */
let activeCategory = 'burger';
let searchTerm = '';
let cart = [];
let activeProduct = null;
let czState = {};
let czQty = 1;
let currentOrder = null;
let orderTimer = null;
let currentView = 'home';
let adminMode = localStorage.getItem('vb-admin-mode') === 'true';
let orderHistory = JSON.parse(localStorage.getItem('vb-orders') || '[]');
let promoCode = '';
let paymentMethod = 'cash';
let cardDetails = { number: '', name: '', expiry: '', cvv: '' };

function persistState(){
  localStorage.setItem('vb-orders', JSON.stringify(orderHistory));
  localStorage.setItem('vb-cart', JSON.stringify(cart));
  localStorage.setItem('vb-current-order', JSON.stringify(currentOrder));
}

function loadState(){
  cart = JSON.parse(localStorage.getItem('vb-cart') || '[]');
  currentOrder = JSON.parse(localStorage.getItem('vb-current-order') || 'null');
}

const uid = () => Math.random().toString(36).slice(2, 9);

/* ============================================================
   RENDER: CHIPS
   ============================================================ */
function renderChips(){
  const row = document.getElementById('chipRow');
  row.innerHTML = CATEGORIES.map(c => `
    <button class="chip ${c.id===activeCategory?'active':''}" data-cat="${c.id}">${c.label}</button>
  `).join('');
  row.querySelectorAll('.chip').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeCategory = btn.dataset.cat;
      renderChips();
      renderMenu();
    });
  });
}

/* ============================================================
   RENDER: MENU GRID
   ============================================================ */
function renderMenu(){
  const grid = document.getElementById('menuGrid');
  const title = document.getElementById('sectionTitle');
  let items = activeCategory === 'all' ? MENU : MENU.filter(m => m.cat === activeCategory);
  if(searchTerm.trim()){
    items = MENU.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));
    title.textContent = `Resultados para "${searchTerm}"`;
  } else {
    const cat = CATEGORIES.find(c=>c.id===activeCategory);
    title.textContent = cat ? cat.label : 'Todo el menú';
  }

  if(items.length === 0){
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px 10px;color:var(--smoke);font-size:13px;">No encontramos nada con ese nombre 🔎</div>`;
    return;
  }

  grid.innerHTML = items.map((item, i) => `
    <button class="menu-card" data-id="${item.id}" style="animation-delay:${i*0.04}s">
      <div class="art">
        ${item.tag ? `<span class="tag">${item.tag}</span>` : ''}
        <img src="${item.img}" alt="${item.name}" loading="lazy">
      </div>
      <div class="body">
        <div class="name">${item.name}</div>
        <div class="desc">${item.desc}</div>
        <div class="foot">
          <span class="price">${fmt(item.price)}</span>
          <span class="add" aria-hidden="true">+</span>
        </div>
      </div>
    </button>
  `).join('');

  grid.querySelectorAll('.menu-card').forEach(card=>{
    card.addEventListener('click', ()=> openProduct(card.dataset.id));
  });
}

/* ============================================================
   CUSTOMIZER — arma tu hamburguesa (o producto simple)
   ============================================================ */
function openProduct(id){
  const product = MENU.find(m=>m.id===id);
  activeProduct = product;
  czQty = 1;

  if(product.customizable){
    czState = {
      bun: 'brioche',
      protein: 'res',
      cheese: 'americano',
      veggies: { lechuga:true, tomate:true, cebolla:false, pepinillo:true, aguacate:false },
      sauce: 'especial',
      note: '',
    };
  } else {
    czState = { note: '' };
  }
  renderCustomizer();
  openSheet('czSheet');
}

function calcUnitPrice(){
  if(!activeProduct.customizable) return activeProduct.price;
  let total = activeProduct.price;
  total += (BUN_OPTIONS.find(o=>o.id===czState.bun)?.extra || 0);
  total += (PROTEIN_OPTIONS.find(o=>o.id===czState.protein)?.extra || 0);
  total += (CHEESE_OPTIONS.find(o=>o.id===czState.cheese)?.extra || 0);
  VEGGIE_TOGGLES.forEach(v=>{
    if(czState.veggies[v.id] && v.extra) total += v.extra;
  });
  return Math.max(total, 5000);
}

function optionRow({selected, name, extra, kind, onClickAttr}){
  const priceTxt = extra ? (extra>0 ? `+${fmt(extra)}` : `-${fmt(Math.abs(extra))}`) : '';
  const control = kind === 'radio'
    ? `<div class="radio ${selected?'checked':''}"></div>`
    : `<div class="check ${selected?'checked':''}"></div>`;
  return `
    <div class="opt-row ${selected?'selected':''}" ${onClickAttr}>
      <div class="opt-left"><span class="opt-name">${name}</span></div>
      <div class="opt-left">${priceTxt?`<span class="opt-extra">${priceTxt}</span>`:''}${control}</div>
    </div>
  `;
}

function renderCustomizer(){
  const scroll = document.getElementById('czScroll');
  const p = activeProduct;

  let html = `
    <div class="cz-hero"><img src="${p.img}" alt="${p.name}"></div>
    <h3 class="cz-title">${p.name}</h3>
    <div class="cz-price" id="czLivePrice">${fmt(calcUnitPrice())}</div>
  `;

  if(p.customizable){
    html += buildGroup('Tipo de pan', 'Elige 1', BUN_OPTIONS, 'bun', 'radio', 0);
    html += buildGroup('Proteína', 'Elige 1 · puedes pedir sin carne', PROTEIN_OPTIONS, 'protein', 'radio', 1);
    html += buildGroup('Queso', 'Elige 1', CHEESE_OPTIONS, 'cheese', 'radio', 2);

    html += `<div class="cz-group" style="animation-delay:.12s">
      <div class="cz-group-head">
        <span class="cz-group-title">Vegetales</span>
        <span class="cz-group-sub">Personaliza libremente</span>
      </div>
      ${VEGGIE_TOGGLES.map(v => optionRow({
        selected: czState.veggies[v.id],
        name: v.name,
        extra: v.extra,
        kind: 'check',
        onClickAttr: `data-veg="${v.id}"`
      })).join('')}
    </div>`;

    html += buildGroup('Salsa', 'Elige 1', SAUCE_OPTIONS, 'sauce', 'radio', 4);
  }

  html += `
    <div class="cz-group" style="animation-delay:.18s">
      <div class="cz-group-head"><span class="cz-group-title">Notas para cocina</span></div>
      <textarea class="note-box" id="czNote" rows="2" placeholder="Ej: bien cocido, sin sal, cortar a la mitad...">${czState.note||''}</textarea>
    </div>
  `;

  scroll.innerHTML = html;
  bindCustomizerEvents();
  updateCzFooter();
}

function buildGroup(title, sub, options, stateKey, kind, delayIndex){
  return `<div class="cz-group" style="animation-delay:${delayIndex*0.05}s">
    <div class="cz-group-head">
      <span class="cz-group-title">${title}</span>
      <span class="cz-group-sub">${sub}</span>
    </div>
    ${options.map(o => optionRow({
      selected: czState[stateKey]===o.id,
      name:o.name, extra:o.extra, kind,
      onClickAttr: `data-group="${stateKey}" data-val="${o.id}"`
    })).join('')}
  </div>`;
}

function bindCustomizerEvents(){
  document.querySelectorAll('#czScroll [data-group]').forEach(row=>{
    row.addEventListener('click', ()=>{
      czState[row.dataset.group] = row.dataset.val;
      renderCustomizer();
      flashPrice();
    });
  });
  document.querySelectorAll('#czScroll [data-veg]').forEach(row=>{
    row.addEventListener('click', ()=>{
      const id = row.dataset.veg;
      czState.veggies[id] = !czState.veggies[id];
      renderCustomizer();
      flashPrice();
    });
  });
  const note = document.getElementById('czNote');
  if(note){ note.addEventListener('input', (e)=> czState.note = e.target.value); }
}

function flashPrice(){
  const el = document.getElementById('czLivePrice');
  if(!el) return;
  el.style.transform = 'scale(1.08)';
  el.style.color = 'var(--green)';
  setTimeout(()=>{ el.style.transform = 'scale(1)'; el.style.color = 'var(--green-deep)'; }, 220);
}

function updateCzFooter(){
  const qtyEl = document.getElementById('czQty');
  qtyEl.textContent = czQty;
  const unit = calcUnitPrice();
  document.getElementById('czAddPrice').textContent = fmt(unit*czQty);
}

function bumpQty(el){
  el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
}

document.getElementById('czMinus').addEventListener('click', ()=>{
  if(czQty>1){ czQty--; updateCzFooter(); bumpQty(document.getElementById('czQty')); }
});
document.getElementById('czPlus').addEventListener('click', ()=>{
  czQty++; updateCzFooter(); bumpQty(document.getElementById('czQty'));
});

document.getElementById('czAddBtn').addEventListener('click', ()=>{
  const p = activeProduct;
  const unit = calcUnitPrice();
  let details = [];
  if(p.customizable){
    details.push(BUN_OPTIONS.find(o=>o.id===czState.bun).name);
    details.push(PROTEIN_OPTIONS.find(o=>o.id===czState.protein).name);
    details.push(CHEESE_OPTIONS.find(o=>o.id===czState.cheese).name);
    const veggieNames = VEGGIE_TOGGLES.filter(v=>czState.veggies[v.id]).map(v=>v.name);
    details.push(veggieNames.length ? veggieNames.join(', ') : 'Sin vegetales');
    details.push(SAUCE_OPTIONS.find(o=>o.id===czState.sauce).name);
  }
  if(czState.note) details.push(`Nota: ${czState.note}`);

  cart.push({
    uid: uid(), menuId: p.id, name: p.name, img: p.img,
    qty: czQty, unitPrice: unit, details,
  });
  persistState();

  closeSheet('czSheet');
  showToast(`${p.name} agregada a tu orden`);
  renderCartUI();
  const fab = document.getElementById('cartFab');
  fab.classList.remove('bump'); void fab.offsetWidth; fab.classList.add('bump');
});

/* ============================================================
   CARRITO
   ============================================================ */
function cartCount(){ return cart.reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return cart.reduce((s,i)=>s+i.unitPrice*i.qty,0); }
function promoDiscount(){
  if(promoCode !== 'VERDE30') return 0;
  return cart.filter(item=>MENU.find(product=>product.id===item.menuId)?.cat === 'burger')
    .reduce((sum,item)=>sum + item.unitPrice * item.qty * 0.3, 0);
}
function cartTotal(){ return cart.length ? cartSubtotal() - promoDiscount() + DELIVERY_FEE : 0; }

function applyPromo(){
  if(!cart.some(item=>MENU.find(product=>product.id===item.menuId)?.cat === 'burger')){
    showToast('Agrega una hamburguesa para usar VERDE30');
    return;
  }
  promoCode = 'VERDE30';
  renderCartUI();
  showToast('Código VERDE30 aplicado: 30% en hamburguesas');
}

function renderCartUI(){
  const fab = document.getElementById('cartFab');
  const count = cartCount();
  document.getElementById('cartFabCount').textContent = count;
  document.getElementById('cartFabTotal').textContent = fmt(cartTotal());
  fab.classList.toggle('show', count>0 && currentView==='home');

  renderCartSheet();
  renderSidePanel();
}

function renderCartSheet(){
  const wrap = document.getElementById('cartItemsWrap');
  const summary = document.getElementById('cartSummary');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if(cart.length===0){
    wrap.innerHTML = `<div class="empty-state">
      <div class="emoji">🛒</div>
      <h3>Tu orden está vacía</h3>
      <p>Agrega hamburguesas, salchipapas o almuerzos<br>desde el menú para armar tu pedido.</p>
    </div>`;
    summary.innerHTML = '';
    document.getElementById('paymentOptions').innerHTML = '';
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = 0.5;
    document.getElementById('checkoutTotal').textContent = fmt(0);
    return;
  }

  checkoutBtn.disabled = false;
  checkoutBtn.style.opacity = 1;

  wrap.innerHTML = cart.map((item,i) => `
    <div class="cart-item" data-uid="${item.uid}" style="animation-delay:${i*0.04}s">
      <div class="art"><img src="${item.img}" alt="${item.name}"></div>
      <div class="info">
        <div class="name">${item.name}</div>
        <div class="meta">${item.details && item.details.length ? item.details.join(' · ') : 'Estándar'}</div>
        <div class="row2">
          <div class="mini-qty">
            <button class="mini-btn" data-act="minus">–</button>
            <span class="mini-num">${item.qty}</span>
            <button class="mini-btn" data-act="plus">+</button>
          </div>
          <span class="price">${fmt(item.unitPrice*item.qty)}</span>
        </div>
      </div>
    </div>
  `).join('');

  wrap.querySelectorAll('.cart-item').forEach(row=>{
    const uidv = row.dataset.uid;
    row.querySelector('[data-act="plus"]').addEventListener('click', ()=>{
      const it = cart.find(i=>i.uid===uidv); it.qty++; persistState(); renderCartUI();
    });
    row.querySelector('[data-act="minus"]').addEventListener('click', ()=>{
      const it = cart.find(i=>i.uid===uidv);
      it.qty--;
      if(it.qty<=0) cart = cart.filter(i=>i.uid!==uidv);
      persistState();
      renderCartUI();
    });
  });

  summary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>${fmt(cartSubtotal())}</span></div>
    ${promoDiscount() ? `<div class="summary-row discount"><span>Descuento VERDE30</span><span>-${fmt(promoDiscount())}</span></div>` : ''}
    <div class="summary-row"><span>Envío</span><span>${fmt(DELIVERY_FEE)}</span></div>
    <div class="summary-row total"><span>Total</span><span class="val">${fmt(cartTotal())}</span></div>
  `;
  renderPaymentOptions();
  document.getElementById('checkoutTotal').textContent = fmt(cartTotal());
}

function renderPaymentOptions(){
  const options = document.getElementById('paymentOptions');
  options.innerHTML = `
    <div class="payment-head"><strong>Forma de pago</strong><span>Demo local</span></div>
    <div class="payment-methods">
      <button class="payment-method ${paymentMethod==='cash'?'selected':''}" data-payment="cash" type="button"><span class="payment-icon">$</span><span><b>Efectivo en caja</b><small>Pagas al recoger</small></span><i></i></button>
      <button class="payment-method ${paymentMethod==='card'?'selected':''}" data-payment="card" type="button"><span class="payment-icon">▣</span><span><b>Tarjeta</b><small>Pasarela simulada</small></span><i></i></button>
    </div>
    ${paymentMethod==='card' ? `<div class="card-form">
      <input id="cardNumber" inputmode="numeric" placeholder="Número de tarjeta" value="${cardDetails.number}">
      <input id="cardName" placeholder="Nombre en la tarjeta" value="${cardDetails.name}">
      <div><input id="cardExpiry" placeholder="MM/AA" value="${cardDetails.expiry}"><input id="cardCvv" inputmode="numeric" placeholder="CVV" value="${cardDetails.cvv}"></div>
      <p>Esta es una pasarela de prueba. No se realiza ningún cobro real.</p>
    </div>` : ''}
  `;
  options.querySelectorAll('[data-payment]').forEach(button=>button.addEventListener('click', ()=>{
    paymentMethod = button.dataset.payment;
    renderPaymentOptions();
  }));
  [['cardNumber','number'],['cardName','name'],['cardExpiry','expiry'],['cardCvv','cvv']].forEach(([id,key])=>{
    const input = document.getElementById(id);
    if(input) input.addEventListener('input', event=>cardDetails[key] = event.target.value);
  });
}

document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  if(cart.length===0) return;
  if(paymentMethod==='card' && (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv)){
    showToast('Completa los datos de la tarjeta de prueba');
    return;
  }
  placeOrder();
});

function placeOrder(){
  currentOrder = {
    id: 'VB-' + Math.floor(1000 + Math.random()*9000),
    items: cart.map(i=>({...i})),
    total: cartTotal(),
    paymentMethod,
    promoCode,
    stageIndex: 0,
    placedAt: Date.now(),
  };
  orderHistory.unshift(currentOrder);
  cart = [];
  promoCode = '';
  persistState();
  closeSheet('cartSheet');
  renderCartUI();
  showToast('¡Pedido confirmado! Síguelo en "Pedidos"');
  goToView('orders');
  startOrderTimer();
}

function startOrderTimer(){
  if(orderTimer) clearInterval(orderTimer);
  orderTimer = setInterval(()=>{
    if(!currentOrder) return;
    if(currentOrder.stageIndex < ORDER_STAGES.length-1){
      currentOrder.stageIndex++;
      const savedOrder = orderHistory.find(order=>order.id===currentOrder.id);
      if(savedOrder) savedOrder.stageIndex = currentOrder.stageIndex;
      persistState();
      renderOrdersView();
      renderSidePanel();
      renderAdminView();
      if(currentOrder.stageIndex === ORDER_STAGES.length-1){
        showToast('Tu pedido fue entregado 🎉');
        clearInterval(orderTimer);
      } else {
        showToast(`Tu pedido está: ${ORDER_STAGES[currentOrder.stageIndex]}`);
      }
    }
  }, STAGE_DURATION_MS);
}

/* ============================================================
   VISTA DE PEDIDOS / TRACKING
   ============================================================ */
function trackDotIcon(i, done){
  if(done) return '✓';
  return ['🧾','🔥','🛍️','🛵'][i];
}

function renderOrdersView(){
  const el = document.getElementById('ordersView');
  if(!currentOrder){
    el.innerHTML = `<div class="empty-state">
      <div class="emoji">🧾</div>
      <h3>Aún no tienes pedidos</h3>
      <p>Cuando confirmes una orden, podrás ver aquí<br>el número de pedido y el estado en vivo.</p>
    </div>`;
    return;
  }
  const o = currentOrder;
  el.innerHTML = `
    <div class="order-hero">
      <div class="num-label">NÚMERO DE PEDIDO</div>
      <div class="num">#${o.id}</div>
      <div class="eta">${ORDER_STAGES[o.stageIndex]==='Entregado' ? '¡Buen provecho!' : 'Tiempo estimado: 15–20 min'}</div>
    </div>
    <div class="track-steps">
      ${ORDER_STAGES.map((s,i)=>`
        <div class="track-step ${i<o.stageIndex?'done':''} ${i===o.stageIndex?'current':''}">
          <div class="track-dot">${trackDotIcon(i, i<o.stageIndex)}</div>
          <div class="track-label">${s}</div>
        </div>
      `).join('')}
    </div>
    <div class="order-list-card">
      <h4>Resumen del pedido</h4>
      ${o.items.map(it=>`
        <div style="display:flex;justify-content:space-between;font-size:12.5px;padding:6px 0;border-bottom:1px dashed var(--line);">
          <span>${it.qty}× ${it.name}</span>
          <span style="font-weight:700;">${fmt(it.unitPrice*it.qty)}</span>
        </div>
      `).join('')}
      <div class="summary-row total"><span>Total pagado</span><span class="val">${fmt(o.total)}</span></div>
    </div>
  `;
}

/* ============================================================
   PANEL LATERAL (ESCRITORIO)
   ============================================================ */
function renderSidePanel(){
  const el = document.getElementById('sidePanelContent');
  if(currentOrder){
    el.innerHTML = `
      <h3 style="font-size:16px;margin-bottom:14px;">Pedido activo</h3>
      <div class="order-hero" style="margin-bottom:14px;">
        <div class="num-label">NÚMERO DE PEDIDO</div>
        <div class="num">#${currentOrder.id}</div>
        <div class="eta">${ORDER_STAGES[currentOrder.stageIndex]}</div>
      </div>
      <div class="track-steps">
        ${ORDER_STAGES.map((s,i)=>`
          <div class="track-step ${i<currentOrder.stageIndex?'done':''} ${i===currentOrder.stageIndex?'current':''}">
            <div class="track-dot">${trackDotIcon(i, i<currentOrder.stageIndex)}</div>
            <div class="track-label">${s}</div>
          </div>
        `).join('')}
      </div>
      <div class="order-list-card">
        <h4>Detalle</h4>
        ${currentOrder.items.map(it=>`
          <div style="font-size:12px;padding:8px 0;border-bottom:1px dashed var(--line);">
            <div style="display:flex;justify-content:space-between;font-weight:700;"><span>${it.qty}× ${it.name}</span><span>${fmt(it.unitPrice*it.qty)}</span></div>
            <div style="color:var(--smoke);font-size:11px;margin-top:2px;">${it.details.join(' · ')}</div>
          </div>
        `).join('')}
        <div class="summary-row total"><span>Total</span><span class="val">${fmt(currentOrder.total)}</span></div>
      </div>
    `;
  } else if(cart.length>0){
    el.innerHTML = `
      <h3 style="font-size:16px;margin-bottom:14px;">Tu orden en curso</h3>
      ${cart.map(it=>`
        <div class="cart-item" style="border-bottom:1px solid var(--line);">
          <div class="art"><img src="${it.img}" alt="${it.name}"></div>
          <div class="info">
            <div class="name">${it.name}</div>
            <div class="meta">${it.details.join(' · ')}</div>
            <div class="row2"><span style="font-size:11.5px;color:var(--smoke);">${it.qty} unid.</span><span class="price">${fmt(it.unitPrice*it.qty)}</span></div>
          </div>
        </div>
      `).join('')}
      <div class="order-list-card" style="margin-top:14px;">
        <div class="summary-row"><span>Subtotal</span><span>${fmt(cartSubtotal())}</span></div>
        <div class="summary-row"><span>Envío</span><span>${fmt(DELIVERY_FEE)}</span></div>
        <div class="summary-row total"><span>Total</span><span class="val">${fmt(cartTotal())}</span></div>
      </div>
      <button class="btn-primary" style="width:100%;margin-top:14px;" onclick="document.getElementById('checkoutBtn').click()">
        <span class="l">Confirmar pedido</span><span class="r">${fmt(cartTotal())}</span>
      </button>
    `;
  } else {
    el.innerHTML = `<div class="empty-state" style="padding-top:60px;">
      <div class="emoji">🍔</div>
      <h3>Arma tu orden</h3>
      <p>Elige productos del menú a la izquierda.<br>Aquí verás tu carrito y el número de pedido.</p>
    </div>`;
  }
}

function renderAdminView(){
  const stats = document.getElementById('adminStats');
  const queue = document.getElementById('adminQueue');
  if(!stats || !queue) return;
  const activeOrders = orderHistory.filter(order=>order.stageIndex < ORDER_STAGES.length - 1);
  const revenue = orderHistory.reduce((sum, order)=>sum + order.total, 0);
  stats.innerHTML = `
    <div class="admin-stat"><span class="stat-icon">⌁</span><div><strong>${activeOrders.length}</strong><span>En cola</span></div></div>
    <div class="admin-stat"><span class="stat-icon gold">$</span><div><strong>${fmt(revenue)}</strong><span>Ventas demo</span></div></div>
    <div class="admin-stat"><span class="stat-icon red">!</span><div><strong>${orderHistory.filter(order=>order.stageIndex===0).length}</strong><span>Por recibir</span></div></div>
  `;
  if(!orderHistory.length){
    queue.innerHTML = `<div class="admin-empty"><div>⌂</div><h3>La cola está vacía</h3><p>Los pedidos confirmados por clientes aparecerán aquí en tiempo real.</p></div>`;
    return;
  }
  queue.innerHTML = orderHistory.map(order=>`
    <article class="ticket ${order.stageIndex === ORDER_STAGES.length - 1 ? 'ticket-done' : ''}">
      <div class="ticket-head"><div><span class="ticket-id">#${order.id}</span><span class="ticket-time">${new Date(order.placedAt).toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'})}</span></div><span class="ticket-status status-${order.stageIndex}">${ORDER_STAGES[order.stageIndex]}</span></div>
      <div class="ticket-items">${order.items.map(item=>`<div class="ticket-item"><b>${item.qty}×</b><span>${item.name}</span><strong>${fmt(item.unitPrice * item.qty)}</strong><small>${item.details && item.details.length ? item.details.join(' · ') : 'Preparación estándar'}</small></div>`).join('')}</div>
      <div class="ticket-foot"><strong>Total ${fmt(order.total)}</strong>${order.stageIndex < ORDER_STAGES.length - 1 ? `<button class="ticket-action" data-order-id="${order.id}" type="button">${order.stageIndex === 0 ? 'Aceptar pedido' : 'Marcar como ' + ORDER_STAGES[order.stageIndex + 1]} <span>→</span></button>` : '<span class="delivered-label">✓ Entregado</span>'}</div>
    </article>
  `).join('');
  queue.querySelectorAll('.ticket-action').forEach(button=>button.addEventListener('click', ()=>advanceAdminOrder(button.dataset.orderId)));
}

function advanceAdminOrder(orderId){
  const order = orderHistory.find(item=>item.id===orderId);
  if(!order || order.stageIndex >= ORDER_STAGES.length - 1) return;
  order.stageIndex++;
  if(currentOrder && currentOrder.id === orderId) currentOrder.stageIndex = order.stageIndex;
  if(order.stageIndex === ORDER_STAGES.length - 1 && orderTimer){
    clearInterval(orderTimer);
    orderTimer = null;
  }
  persistState();
  renderAdminView();
  renderOrdersView();
  renderSidePanel();
  showToast(`Pedido #${order.id} marcado como ${ORDER_STAGES[order.stageIndex]}`);
}

/* ============================================================
   SHEETS / OVERLAY helpers
   ============================================================ */
const overlay = document.getElementById('overlay');
function openSheet(id){
  overlay.classList.add('show');
  document.getElementById(id).classList.add('show');
}
function closeSheet(id){
  document.getElementById(id).classList.remove('show');
  const anyOpen = document.querySelector('.sheet.show');
  if(!anyOpen) overlay.classList.remove('show');
}
overlay.addEventListener('click', ()=>{
  document.querySelectorAll('.sheet.show').forEach(s=>s.classList.remove('show'));
  overlay.classList.remove('show');
});
document.getElementById('czClose').addEventListener('click', ()=>closeSheet('czSheet'));
document.getElementById('cartClose').addEventListener('click', ()=>closeSheet('cartSheet'));

/* ============================================================
   NAV / VIEWS
   ============================================================ */
function goToView(view){
  currentView = view;
  document.querySelectorAll('.nav-item').forEach(b=> b.classList.toggle('active', b.dataset.nav===view));

  const home = document.getElementById('homeView');
  const orders = document.getElementById('ordersView');
  const profile = document.getElementById('profileView');
  [home, orders, profile].forEach(v=> v.classList.remove('view-fade'));

  home.classList.toggle('hidden', view!=='home');
  orders.classList.toggle('hidden', view!=='orders');
  profile.classList.toggle('hidden', view!=='profile');
  document.getElementById('chipRow').classList.toggle('hidden', view!=='home');
  document.querySelector('.search-wrap').classList.toggle('hidden', view!=='home');

  const visible = view==='home' ? home : view==='orders' ? orders : profile;
  requestAnimationFrame(()=> visible.classList.add('view-fade'));

  if(view==='orders') renderOrdersView();
  if(view==='cart'){
    openSheet('cartSheet');
    currentView='home';
    document.querySelectorAll('.nav-item').forEach(b=> b.classList.toggle('active', b.dataset.nav==='home'));
    home.classList.remove('hidden');
  }
  renderCartUI();
}

function setAdminMode(enabled){
  adminMode = enabled;
  localStorage.setItem('vb-admin-mode', String(enabled));
  document.getElementById('phone').classList.toggle('hidden', enabled);
  document.getElementById('sidePanel').classList.toggle('hidden', enabled);
  document.getElementById('adminView').classList.toggle('hidden', !enabled);
  if(enabled) renderAdminView();
  else goToView('profile');
}

document.querySelectorAll('.nav-item').forEach(btn=>{
  btn.addEventListener('click', ()=> goToView(btn.dataset.nav));
});
document.getElementById('openOrdersBtn').addEventListener('click', ()=> goToView('orders'));
document.getElementById('cartFab').addEventListener('click', ()=> openSheet('cartSheet'));
document.getElementById('adminModeToggle').addEventListener('click', ()=>setAdminMode(true));
document.getElementById('adminExitBtn').addEventListener('click', ()=>setAdminMode(false));
document.getElementById('notificationsBtn').addEventListener('click', ()=>showToast(currentOrder ? `Tu pedido está: ${ORDER_STAGES[currentOrder.stageIndex]}` : 'No tienes notificaciones nuevas'));
document.getElementById('promoBtn').addEventListener('click', applyPromo);
document.getElementById('viewAllBtn').addEventListener('click', ()=>{
  activeCategory = 'all';
  renderChips();
  renderMenu();
});

document.getElementById('searchInput').addEventListener('input', (e)=>{
  searchTerm = e.target.value;
  renderMenu();
});

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer = null;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2600);
}

/* ============================================================
   INIT
   ============================================================ */
function init(){
  loadState();
  renderChips();
  renderMenu();
  renderOrdersView();
  renderCartUI();
  if(currentOrder && currentOrder.stageIndex < ORDER_STAGES.length - 1) startOrderTimer();
  if(adminMode) setAdminMode(true);
}
init();

/* ============================================================
   ARRASTRAR MENÚ HORIZONTAL (Drag to scroll en PC)
   ============================================================ */
const chipRow = document.getElementById('chipRow');
let isDown = false;
let startX;
let scrollLeft;

chipRow.addEventListener('mousedown', (e) => {
  isDown = true;
  chipRow.style.cursor = 'grabbing';
  startX = e.pageX - chipRow.offsetLeft;
  scrollLeft = chipRow.scrollLeft;
});

chipRow.addEventListener('mouseleave', () => {
  isDown = false;
  chipRow.style.cursor = 'default';
});

chipRow.addEventListener('mouseup', () => {
  isDown = false;
  chipRow.style.cursor = 'default';
});

chipRow.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault(); // Evita que se seleccione el texto por accidente
  const x = e.pageX - chipRow.offsetLeft;
  const walk = (x - startX) * 1.5; // Multiplicador de velocidad de arrastre
  chipRow.scrollLeft = scrollLeft - walk;
});

/* ============================================================
   GESTO DE DESLIZAR ABAJO PARA CERRAR SHEETS
   ============================================================ */
document.querySelectorAll('.sheet').forEach(sheet => {
  let startY = 0;
  let currentY = 0;

  sheet.addEventListener('touchstart', (e) => {
    // Solo inicia el arrastre si el scroll interno del modal está arriba del todo
    const scrollEl = sheet.querySelector('.sheet-scroll');
    if (scrollEl && scrollEl.scrollTop > 0) return;
    
    startY = e.touches[0].clientY;
  }, { passive: true });

  sheet.addEventListener('touchmove', (e) => {
    if (!startY) return;
    currentY = e.touches[0].clientY;
    const diffY = currentY - startY;

    // Si el movimiento es hacia abajo, movemos el sheet con el dedo
    if (diffY > 0) {
      sheet.style.transform = `translate(-50%, ${diffY}px)`;
    }
  }, { passive: true });

  sheet.addEventListener('touchend', () => {
    if (!startY) return;
    const diffY = currentY - startY;

    // Si se arrastró más de 120px hacia abajo, cerramos el panel
    if (diffY > 120) {
      closeSheet(sheet.id);
    }
    
    // Reseteamos la posición
    sheet.style.transform = '';
    startY = 0;
    currentY = 0;
  });
});