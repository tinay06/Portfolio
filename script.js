/**
 * CJ Sedollo Portfolio — Interactions
 */

(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  const reveals = document.querySelectorAll(".reveal");
  const scrollProgressBar = document.getElementById("scroll-progress-bar");
  const heroSection = document.querySelector(".hero");
  const heroAurora = document.querySelector(".hero__aurora");
  const staggerGroups = document.querySelectorAll("[data-stagger]");
  const cursorGlow = document.querySelector(".cursor-glow");
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const galleryModal = document.getElementById("gallery-modal");
  const galleryTrack = document.getElementById("gallery-track");
  const galleryDots = document.getElementById("gallery-dots");
  const galleryCounter = document.getElementById("gallery-counter");
  const galleryPrev = document.getElementById("gallery-prev");
  const galleryNext = document.getElementById("gallery-next");
  const galleryTitle = document.getElementById("gallery-title");
  const galleryClose = document.querySelector(".gallery-modal__close");
  const tiltCards = document.querySelectorAll("[data-tilt]");
  const yearEl = document.getElementById("year");
  const certLightbox = document.getElementById("cert-lightbox");
  const certLightboxImg = document.getElementById("cert-lightbox-img");
  const certLightboxTitle = document.getElementById("cert-lightbox-title");
  const certLightboxDesc = document.getElementById("cert-lightbox-desc");
  const certLightboxClose = document.querySelector(".cert-lightbox__close");

  const certificates = [
    {
      title: "VitalDrop — Top 16 Finalist",
      desc: "Final Pitching Competition · Level App 3.0 · May 2026",
      image: "images/Certificates/CamScanner 11-06-2026 18.46_2.jpg",
    },
    {
      title: "VitalDrop — Participation",
      desc: "Level App 3.0 Startup Showcase · May 2026",
      image: "images/Certificates/CamScanner 11-06-2026 18.46_3.jpg",
    },
    {
      title: "LakbayLokal Tours — 2nd Runner-Up",
      desc: "Overall Excellence · Level App 3.0 · May 2026",
      image: "images/Certificates/CamScanner 11-06-2026 18.46_1.jpg",
    },
    {
      title: "LakbayLokal — 2nd Place Poster",
      desc: "Poster Category · Level App 3.0 · May 2026",
      image: "images/Certificates/CamScanner 11-06-2026 18.46_4.jpg",
    },
  ];

  const galleries = {
    vitaldrop: {
      title: "VitalDrop — Full Ecosystem",
      images: [
        "images/VitalDrop/VitalDrop Promotional Website/Screenshot 2026-06-15 035756.png",
        "images/VitalDrop/VitalDrop Promotional Website/Screenshot 2026-06-15 035807.png",
        "images/VitalDrop/VitalDrop Mobile App/Screenshot_20260615-033023.png",
        "images/VitalDrop/VitalDrop Mobile App/Screenshot_20260615-033111.png",
        "images/VitalDrop/VitalDrop Web App/Screenshot 2026-06-15 040020.png",
        "images/VitalDrop/VitalDrop Web App/Screenshot 2026-06-15 040102.png",
      ],
    },
    neighborhelp: {
      title: "NeighborHelp — Service Marketplace",
      images: [
        "images/NeighborHelp/Screenshot 2026-06-15 040218.png",
        "images/NeighborHelp/Screenshot 2026-06-15 040302.png",
        "images/NeighborHelp/Screenshot 2026-06-15 040358.png",
        "images/NeighborHelp/Screenshot 2026-06-15 040518.png",
        "images/NeighborHelp/Screenshot 2026-06-15 040604.png",
      ],
    },
    herbscan: {
      title: "HerbScan — Plant Identification",
      images: [
        "images/Herbscan/Screenshot_20260615-033630.png",
        "images/Herbscan/Screenshot_20260615-033648.png",
      ],
    },
    photography: {
      title: "Visual Composition Series",
      images: [
        "images/IT111 (PHOTOGRAPHY)/Rule of Thirds.jpg",
        "images/IT111 (PHOTOGRAPHY)/Golden Ratio.jpg",
        "images/IT111 (PHOTOGRAPHY)/Leading Lines.jpg",
        "images/IT111 (PHOTOGRAPHY)/Depth of Field.jpg",
        "images/IT111 (PHOTOGRAPHY)/Symmetry and Balance_.jpg",
        "images/IT111 (PHOTOGRAPHY)/Negative Space_.jpg",
        "images/IT111 (PHOTOGRAPHY)/Framing.jpg",
        "images/IT111 (PHOTOGRAPHY)/Fill the Frame.jpg",
        "images/IT111 (PHOTOGRAPHY)/Rule of Odds.jpg",
        "images/IT111 (PHOTOGRAPHY)/Diagonal_Golden Triangle_.jpg",
        "images/IT111 (PHOTOGRAPHY)/Centered Composition_.jpg",
      ],
    },
  };

  /* Footer year */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Header scroll state */
  function updateHeader() {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  /* Scroll progress bar */
  function updateScrollProgress() {
    if (!scrollProgressBar) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = `${progress}%`;
  }

  /* Parallax hero background on scroll */
  function updateHeroParallax() {
    if (!heroSection || !heroAurora || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const heroHeight = heroSection.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY > heroHeight) {
      heroAurora.style.transform = "";
      return;
    }

    heroAurora.style.transform = `translate3d(0, ${scrollY * 0.22}px, 0)`;
  }

  function onScroll() {
    updateHeader();
    updateActiveNav();
    updateScrollProgress();
    updateHeroParallax();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.classList.toggle("is-open");
      navMenu.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("is-open");
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Active nav link on scroll */
  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }

  /* Scroll reveal */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  reveals.forEach((el) => {
    if (el.closest("[data-stagger]")) return;
    revealObserver.observe(el);
  });

  /* Staggered scroll reveal for grids */
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const items = entry.target.querySelectorAll(":scope > .reveal");
        items.forEach((item, index) => {
          item.style.setProperty("--reveal-delay", `${index * 0.1}s`);
          window.setTimeout(() => {
            item.classList.add("is-visible");
          }, index * 90);
        });

        staggerObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  staggerGroups.forEach((group) => staggerObserver.observe(group));

  /* Cursor glow (pointer devices only) */
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    document.body.classList.add("has-pointer");

    window.addEventListener(
      "mousemove",
      (e) => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      },
      { passive: true }
    );
  }

  /* Project card tilt */
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* Gallery carousel */
  let galleryIndex = 0;
  let galleryTotal = 0;

  function updateGalleryCarousel() {
    if (!galleryTrack) return;

    galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;

    if (galleryDots) {
      galleryDots.querySelectorAll(".gallery-carousel__dot").forEach((dot, i) => {
        dot.classList.toggle("is-active", i === galleryIndex);
        dot.setAttribute("aria-selected", String(i === galleryIndex));
      });
    }

    if (galleryCounter) {
      galleryCounter.textContent = `${galleryIndex + 1} / ${galleryTotal}`;
    }

    if (galleryPrev) {
      galleryPrev.disabled = galleryIndex === 0;
    }

    if (galleryNext) {
      galleryNext.disabled = galleryIndex >= galleryTotal - 1;
    }
  }

  function goToGallerySlide(index) {
    galleryIndex = Math.max(0, Math.min(index, galleryTotal - 1));
    updateGalleryCarousel();
  }

  function buildGalleryCarousel(gallery) {
    if (!galleryTrack || !galleryDots) return;

    galleryIndex = 0;
    galleryTotal = gallery.images.length;

    galleryTrack.innerHTML = gallery.images
      .map(
        (src, i) =>
          `<div class="gallery-carousel__slide" role="tabpanel" aria-label="Slide ${i + 1} of ${galleryTotal}">
            <img src="${encodeURI(src)}" alt="${gallery.title} screenshot ${i + 1}" loading="lazy">
          </div>`
      )
      .join("");

    galleryDots.innerHTML = gallery.images
      .map(
        (_, i) =>
          `<button type="button" class="gallery-carousel__dot${i === 0 ? " is-active" : ""}" role="tab" aria-label="Go to slide ${i + 1}" aria-selected="${i === 0}" data-slide="${i}"></button>`
      )
      .join("");

    galleryDots.querySelectorAll(".gallery-carousel__dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        goToGallerySlide(Number(dot.getAttribute("data-slide")));
      });
    });

    updateGalleryCarousel();
  }

  document.querySelectorAll("[data-gallery]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-gallery");
      const gallery = galleries[key];
      if (!gallery || !galleryModal) return;

      galleryTitle.textContent = gallery.title;
      buildGalleryCarousel(gallery);
      galleryModal.showModal();
    });
  });

  galleryPrev?.addEventListener("click", () => goToGallerySlide(galleryIndex - 1));
  galleryNext?.addEventListener("click", () => goToGallerySlide(galleryIndex + 1));

  galleryModal?.addEventListener("keydown", (e) => {
    if (!galleryModal.open) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToGallerySlide(galleryIndex - 1);
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      goToGallerySlide(galleryIndex + 1);
    }
  });

  /* Touch swipe for gallery */
  if (galleryTrack) {
    let touchStartX = 0;

    galleryTrack.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    galleryTrack.addEventListener(
      "touchend",
      (e) => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) < 50) return;

        if (diff < 0) {
          goToGallerySlide(galleryIndex + 1);
        } else {
          goToGallerySlide(galleryIndex - 1);
        }
      },
      { passive: true }
    );
  }

  if (galleryClose) {
    galleryClose.addEventListener("click", () => galleryModal.close());
  }

  galleryModal?.addEventListener("click", (e) => {
    if (e.target === galleryModal) {
      galleryModal.close();
    }
  });

  /* Certificate lightbox */
  document.querySelectorAll("[data-cert]").forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.getAttribute("data-cert"));
      const cert = certificates[index];
      if (!cert || !certLightbox) return;

      certLightboxTitle.textContent = cert.title;
      certLightboxDesc.textContent = cert.desc;
      certLightboxImg.src = encodeURI(cert.image);
      certLightboxImg.alt = cert.title;
      certLightbox.showModal();
    });
  });

  certLightboxClose?.addEventListener("click", () => certLightbox.close());

  certLightbox?.addEventListener("click", (e) => {
    if (e.target === certLightbox) {
      certLightbox.close();
    }
  });

  /* Contact form */
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fields = contactForm.querySelectorAll("input, textarea");
      let valid = true;

      fields.forEach((field) => {
        const group = field.closest(".form-group");
        if (!field.checkValidity()) {
          group.classList.add("is-error");
          valid = false;
        } else {
          group.classList.remove("is-error");
        }
      });

      if (!valid) {
        formStatus.textContent = "Please fill in all required fields correctly.";
        formStatus.classList.add("is-error");
        return;
      }

      formStatus.classList.remove("is-error");
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;

      await new Promise((resolve) => setTimeout(resolve, 1400));

      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;
      formStatus.textContent = "Message sent! I'll get back to you soon.";
      contactForm.reset();
    });

    contactForm.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("input", () => {
        field.closest(".form-group").classList.remove("is-error");
      });
    });
  }

  /* Smooth anchor offset for fixed header */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");

      if (targetId === "#") return;

      if (targetId === "#top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (navToggle && navMenu) {
          navToggle.classList.remove("is-open");
          navMenu.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }

        return;
      }

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
})();
