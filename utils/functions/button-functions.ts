/**
 * Get the variant of the button
 */
export const getVariant = (styleType: "solid" | "outline") => {
  if (styleType === "solid") {
    return "bg-primary hover:bg-primaryHover text-zinc-50";
  } else {
    return "border border-primary text-primary hover:bg-primary hover:text-zinc-50";
  }
};