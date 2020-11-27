const formatter = Intl.NumberFormat('nb-NO');

export default function formatThousands(result: number) {
  return formatter.format(result);
}
