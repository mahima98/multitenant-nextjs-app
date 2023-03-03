import Button from "@/components/Button";
import CardHero from "@/components/CardHero";
import React from "react";

const KeysToComponentMap = {
  button: Button,
  HeroCard: CardHero,
};

// function renderer(config: { component: string | number; src: any; children: string | number | boolean | any[] | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; }) {
//     if (typeof KeysToComponentMap[config.component] !== "undefined") {
//       return React.createElement(
//         KeysToComponentMap[config.component],
//         {
//           src: config.src
//         },
//         config.children &&
//           (typeof config.children === "string"
//             ? config.children
//             : config.children.map((c: any) => renderer(c)))
//       );
//     }
//   }

//   export default renderer;
