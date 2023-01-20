import React from "react";
import { createTheme, defaultSideNavs } from "vite-pages-theme-doc";
import Component404 from "./404";
import "@fontsource/inter-tight";

const TopBarExtra = () => <p>TopBarExtra</p>;

const Sk = "Sk-Modernist, sans-serif";
const Inter = '"Inter Tight", sans-serif';

export default createTheme({
  logo: (
    <div
      style={{
        fontSize: "20px",
        fontFamily: Sk,
        fontWeight: "bold",
      }}
    >
      🥤 Nomimono
    </div>
  ),
  // topNavs: [
  //   {
  //     label: 'Docs',
  //     path: '/',
  //     activeIfMatch: {
  //       // match all first-level paths
  //       path: '/:foo',
  //       end: true
  //     }
  //   },
  //   {
  //     label: 'Components',
  //     path: '/components/main',
  //     activeIfMatch: {
  //       // match all first-level paths
  //       path: '/components/',
  //       end: false
  //     }
  //   }
  // ],
  sideNavs: (ctx) => {
    return defaultSideNavs(ctx, {
      groupConfig: {
        components: {
          demos: {
            label: "Work In Progress",
            order: -1,
          },
          general: {
            label: "General",
            order: 1,
          },
          "data-display": {
            label: "Data Display",
            order: 2,
          },
        },
      },
    });
  },
  Component404,
});
