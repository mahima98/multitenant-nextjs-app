import AboutUs from "@/components/AboutUs";
import Button from "@/components/Button";
import CardHero from "@/components/CardHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import SectionWorkWithUs from "@/components/SectionWorkWithUs";
import WhatWeDo from "@/components/WhatWeDo";
import { switchOptimiser } from "../helpers/FunctionHelper";

const uiComponent = {
  header: Header,
  footer: Footer,
  partners: Partners,
  whatWeDo: WhatWeDo,
  aboutUs: AboutUs,
  button: Button,
  cardHero: CardHero,
  sectionWorkWithUs: SectionWorkWithUs,
  default: () => <></>,
};

export const RenderComponents = switchOptimiser(uiComponent, "default");
