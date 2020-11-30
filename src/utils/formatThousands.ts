const formatter = Intl.NumberFormat('nb-NO', {
  useGrouping: true,
  maximumFractionDigits: 6
});

export default function formatThousands(value: string) {
  return formatter.format(parseFloat(value));
}
