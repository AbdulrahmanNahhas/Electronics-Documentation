import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Nahhas Hub</span>,
  docsRepositoryBase: "https://github.com/AbdulrahmanNahhas/nahhas-hub",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Nahhas",
    };
  },
  primaryHue: 210,
  sidebar: {
    toggleButton: true,
  },
};

export default config;
