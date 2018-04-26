export enum Color {
  White = '#fff',
  Green = '#006600',
  Red = '#ff0000',
  Blue = '#0000ff',
  Yellow = '#ffff00',
  Pink = '#ffc0cb',
  Black = '#000',
}

export const GetColorByName = (colorName: string): Color => {
  return Object.keys(Color).indexOf(colorName) !== -1
    ? Color[colorName] : Color.Black;
};
