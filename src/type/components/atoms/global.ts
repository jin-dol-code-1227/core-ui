export interface Toggleable {
  active?: boolean;
  onChangeActive?: (state: boolean) => void;
}
