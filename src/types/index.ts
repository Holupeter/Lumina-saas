// Centralizing types makes it easier to reuse them across the app
export interface Feature {
  id: string;
  title: string;
  description: string;
  className?: string;
  icon?: string;
}

export interface TerminalCommand {
  text: string;
  delay: number;
}