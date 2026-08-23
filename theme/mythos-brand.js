(() => {
  const styleId = "mythos-docs-brand-style";

  if (document.getElementById(styleId)) {
    return;
  }

  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    #navbar .nav-logo,
    #navbar nav-logo {
      width: auto !important;
      height: 30px !important;
      max-height: 30px !important;
    }

    @media (max-width: 767px) {
      #navbar .nav-logo,
      #navbar nav-logo {
        height: 27px !important;
        max-height: 27px !important;
      }
    }
  `;
  document.head.appendChild(style);
})();
