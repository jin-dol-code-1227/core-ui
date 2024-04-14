export interface Toggleable {
  active?: boolean;
  onClickToggle?: (state: boolean) => void;
}
