import Button from "@/components/Button";
import CardHero from "@/components/CardHero";
import SectionWorkWithUs from "@/components/SectionWorkWithUs";
import { switchOptimiser } from "../helpers/FunctionHelper";

const uiComponent = {
  button: Button,
  cardHero: CardHero,
  sectionWorkWithUs: SectionWorkWithUs,
  default: () => <></>,
};

export const RenderComponents = switchOptimiser(uiComponent, "default");
