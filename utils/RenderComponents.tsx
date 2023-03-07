import Button from "@/components/Button";
import CardHero from "@/components/CardHero";
import { switchOptimiser } from "../helpers/FunctionHelper";

const uiComponent = {
  button: Button,
  cardHero: CardHero,
  default: () => <></>,
};

export const RenderComponents = switchOptimiser(uiComponent, "default");
