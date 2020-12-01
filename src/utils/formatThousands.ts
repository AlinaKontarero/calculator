const formatter = Intl.NumberFormat('nb-NO', {
  useGrouping: true,
  maximumFractionDigits: 3,
});

export default function formatThousands(value: string): string | JSX.Element {
  if(value.length < 17) {
    return formatter.format(parseFloat(value.toString()));
  } else {
    return 'Warning'
  }
}
