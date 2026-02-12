export const ETitleSize = {
  Small: "text-sm",
  Medium: "text-base",
  Large: "text-lg",
  XLarge: "text-xl",
  XXLarge: "text-2xl",
  XXXLarge: "text-3xl",
} as const;

export const ETabType = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
} as const;

// Type générique pour récupérer les valeurs d'un objet
export type ValueOf<T extends object> = T[keyof T];

// Types automatiquement
export type TitleSize = ValueOf<typeof ETitleSize>;
export type TabType = ValueOf<typeof ETabType>;
