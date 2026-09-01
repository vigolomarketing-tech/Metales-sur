/**
 * app.js — renderiza todas las secciones a partir de CONFIG (ver data.js)
 * y arma los componentes interactivos (comparador antes/después, WhatsApp
 * flotante, acordeón de FAQ, formulario rápido). Sin frameworks ni librerías.
 */
(function () {
  "use strict";

  const ICONS = {
    factory:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21V10l5 3.5V10l5 3.5V10l6 4v7H3Z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/></svg>',
    wrench:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z"/></svg>',
    clipboard:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
    broom:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 4 10 14M4 20l3-3M9 15l-5 5M14 9l6-6M9 15l3-3 3 3-3 3-3-3Z"/></svg>',
    coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v6"/></svg>',
    shield:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 5-3.4 7.8-7 9-3.6-1.2-7-4-7-9V6l7-3Z"/></svg>',
  };

  function icon(name) {
    return `<span class="icon" aria-hidden="true">${ICONS[name] || ""}</span>`;
  }

  function waLink(message) {
    const n = CONFIG.whatsapp.number;
    return `https://wa.me/${n}?text=${encodeURIComponent(message || CONFIG.whatsapp.defaultMessage)}`;
  }

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  // ---------- HERO ----------
  function renderHero() {
    const h = CONFIG.hero;
    document.getElementById("heroKicker").textContent = h.kicker;
    document.getElementById("heroTitle").textContent = h.title;
    document.getElementById("heroSubtitle").textContent = h.subtitle;

    const img = document.getElementById("heroImage");
    img.src = h.image.src;
    img.alt = h.image.alt;
    img.width = h.image.width;
    img.height = h.image.height;

    const ctaPrimary = document.getElementById("heroCtaPrimary");
    ctaPrimary.textContent = h.ctaPrimary.label;
    ctaPrimary.href = waLink(CONFIG.whatsapp.sectionMessages.hero);

    const ctaSecondary = document.getElementById("heroCtaSecondary");
    ctaSecondary.textContent = h.ctaSecondary.label;
    ctaSecondary.href = h.ctaSecondary.href;
  }

  // ---------- TRUST BAR ----------
  function renderTrustBar() {
    const wrap = document.getElementById("trustBar");
    wrap.innerHTML = CONFIG.trustBar
      .map(
        (item) => `
      <div class="trust__item">
        ${icon(item.icon)}
        <span>${item.text}</span>
      </div>`
      )
      .join("");
  }

  // ---------- SERVICIOS ----------
  function renderServices() {
    const wrap = document.getElementById("servicesGrid");
    wrap.innerHTML = CONFIG.services
      .map(
        (s) => `
      <article class="card serviceCard">
        <div class="card__imgWrap">
          <img loading="lazy" src="${s.image.src}" alt="${s.image.alt}" width="${s.image.width}" height="${s.image.height}" />
          ${s.priceFrom ? `<span class="card__price">${s.priceFrom}</span>` : ""}
        </div>
        <div class="card__body">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
          <a class="btn btn--ghost btn--sm" href="${waLink(s.waMessage)}" target="_blank" rel="noopener">
            Quiero algo así
          </a>
        </div>
      </article>`
      )
      .join("");
  }

  // ---------- ANTES / DESPUÉS ----------
  function renderBeforeAfter() {
    const wrap = document.getElementById("beforeAfterGrid");
    wrap.innerHTML = CONFIG.beforeAfter
      .map((c, i) => {
        const beforeSrc = c.before ? c.before.src : c.after.src;
        const beforeAlt = c.before ? c.before.alt : `${c.after.alt} (antes)`;
        return `
      <figure class="compare" data-placeholder="${c.placeholder ? "true" : "false"}">
        <div class="compare__frame" id="compareFrame-${i}">
          <img class="compare__img compare__img--after" src="${c.after.src}" alt="${c.after.alt}" loading="lazy" width="${c.after.width}" height="${c.after.height}" />
          <img class="compare__img compare__img--before" id="compareBefore-${i}" src="${beforeSrc}" alt="${beforeAlt}" loading="lazy" width="${c.after.width}" height="${c.after.height}" />
          <div class="compare__handle" id="compareHandle-${i}" role="slider" tabindex="0"
               aria-label="Deslizar para comparar antes y después" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
            <span class="compare__handleBtn">↔</span>
          </div>
          <span class="compare__label compare__label--before">Antes</span>
          <span class="compare__label compare__label--after">Después</span>
        </div>
        <figcaption class="compare__caption">
          <strong>${c.title}</strong> — ${c.description} — ${c.duration}
        </figcaption>
      </figure>`;
      })
      .join("");

    CONFIG.beforeAfter.forEach((_, i) => initComparator(i));
  }

  function initComparator(i) {
    const frame = document.getElementById(`compareFrame-${i}`);
    const beforeImg = document.getElementById(`compareBefore-${i}`);
    const handle = document.getElementById(`compareHandle-${i}`);
    if (!frame || !beforeImg || !handle) return;

    let dragging = false;

    function setPosition(clientX) {
      const rect = frame.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      beforeImg.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = pct + "%";
      handle.setAttribute("aria-valuenow", Math.round(pct));
    }

    function onPointerDown(e) {
      dragging = true;
      handle.setPointerCapture(e.pointerId);
      setPosition(e.clientX);
    }
    function onPointerMove(e) {
      if (!dragging) return;
      setPosition(e.clientX);
    }
    function onPointerUp(e) {
      dragging = false;
      if (handle.hasPointerCapture && handle.hasPointerCapture(e.pointerId)) {
        handle.releasePointerCapture(e.pointerId);
      }
    }

    handle.addEventListener("pointerdown", onPointerDown);
    handle.addEventListener("pointermove", onPointerMove);
    handle.addEventListener("pointerup", onPointerUp);
    handle.addEventListener("pointercancel", onPointerUp);

    // Permite también arrastrar tocando/clickeando en cualquier parte del frame.
    frame.addEventListener("pointerdown", (e) => {
      dragging = true;
      handle.setPointerCapture(e.pointerId);
      setPosition(e.clientX);
    });
    frame.addEventListener("pointermove", onPointerMove);
    frame.addEventListener("pointerup", onPointerUp);
    frame.addEventListener("pointercancel", onPointerUp);

    // Teclado (accesibilidad)
    handle.addEventListener("keydown", (e) => {
      const current = parseFloat(handle.style.left) || 50;
      let next = current;
      if (e.key === "ArrowLeft") next = Math.max(0, current - 5);
      else if (e.key === "ArrowRight") next = Math.min(100, current + 5);
      else return;
      beforeImg.style.clipPath = `inset(0 ${100 - next}% 0 0)`;
      handle.style.left = next + "%";
      handle.setAttribute("aria-valuenow", Math.round(next));
    });
  }

  // ---------- POR QUÉ CHAPA ----------
  function renderWhyMetal() {
    const wrap = document.getElementById("whyMetalGrid");
    wrap.innerHTML = CONFIG.whyMetal
      .map(
        (w) => `
      <div class="whyCard">
        ${icon(w.icon)}
        <h3>${w.title}</h3>
        <p>${w.text}</p>
      </div>`
      )
      .join("");
  }

  // ---------- MATERIALES ----------
  function renderMaterials() {
    const wrap = document.getElementById("materialsGrid");
    wrap.innerHTML = CONFIG.materials
      .map(
        (m) => `
      <article class="materialCard">
        <img loading="lazy" src="${m.image.src}" alt="${m.image.alt}" width="${m.image.width}" height="${m.image.height}" />
        <div class="materialCard__body">
          <h3>${m.name}</h3>
          <p>${m.description}</p>
        </div>
      </article>`
      )
      .join("");
  }

  // ---------- PROCESO ----------
  function renderProcess() {
    const wrap = document.getElementById("processSteps");
    wrap.innerHTML = CONFIG.process
      .map(
        (p) => `
      <div class="processStep">
        <span class="processStep__num">${String(p.step).padStart(2, "0")}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>`
      )
      .join("");
  }

  // ---------- FORMULARIO RÁPIDO ----------
  function renderForm() {
    const select = document.getElementById("formWorkType");
    select.innerHTML =
      `<option value="" disabled selected>Elegí una opción</option>` +
      CONFIG.quickForm.workTypes.map((t) => `<option value="${t}">${t}</option>`).join("");

    const form = document.getElementById("quickForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const tipo = data.get("tipo");
      const metros = data.get("metros");
      const zona = data.get("zona");
      const telefono = data.get("telefono");

      const message = [
        "Hola! Quiero pedir un presupuesto rápido.",
        tipo ? `Tipo de trabajo: ${tipo}` : null,
        metros ? `Metros aproximados: ${metros}` : null,
        zona ? `Zona: ${zona}` : null,
        telefono ? `Mi WhatsApp: ${telefono}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      window.open(waLink(message), "_blank", "noopener");
    });
  }

  // ---------- FAQ ----------
  function renderFaq() {
    const wrap = document.getElementById("faqList");
    wrap.innerHTML = CONFIG.faq
      .map(
        (f) => `
      <details class="faqItem">
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>`
      )
      .join("");
  }

  // ---------- WHATSAPP FLOTANTE ----------
  function renderFloatingWhatsapp() {
    const btn = document.getElementById("waFloat");
    btn.href = waLink(CONFIG.whatsapp.defaultMessage);

    const sections = Object.keys(CONFIG.whatsapp.sectionMessages)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const msg = CONFIG.whatsapp.sectionMessages[entry.target.id];
            if (msg) btn.href = waLink(msg);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // ---------- FOOTER / GENERALES ----------
  function renderGeneral() {
    document.getElementById("brandName").textContent = CONFIG.business.shortName;
    document.getElementById("footerBrand").textContent = CONFIG.business.shortName;
    document.getElementById("footerZone").textContent = CONFIG.business.zone;
    document.getElementById("footerYear").textContent = new Date().getFullYear();

    document.querySelectorAll("[data-wa-default]").forEach((a) => {
      a.href = waLink(CONFIG.whatsapp.defaultMessage);
    });

    const emailLink = document.getElementById("footerEmail");
    if (emailLink) {
      emailLink.href = `mailto:${CONFIG.business.email}`;
      emailLink.textContent = CONFIG.business.email;
    }

    // Mobile nav toggle
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
      });
      navLinks.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          navLinks.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        })
      );
    }
  }

  function renderJsonLd() {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: CONFIG.business.name,
      description: CONFIG.business.tagline,
      image: `${CONFIG.business.logo}`,
      telephone: `+${CONFIG.whatsapp.number}`,
      email: CONFIG.business.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: CONFIG.business.address,
        addressCountry: "AR",
      },
      areaServed: CONFIG.business.zone,
      url: window.location.href,
    };
    const script = document.getElementById("jsonLd");
    if (script) script.textContent = JSON.stringify(data, null, 2);
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderTrustBar();
    renderServices();
    renderBeforeAfter();
    renderWhyMetal();
    renderMaterials();
    renderProcess();
    renderForm();
    renderFaq();
    renderFloatingWhatsapp();
    renderGeneral();
    renderJsonLd();
  });
})();
