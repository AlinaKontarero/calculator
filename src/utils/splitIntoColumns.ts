const splitIntoColumns = (buttonsArr: JSX.Element[], lineIndex: number, buttonsInLine: number) => {
  const firstButtonIndex: number = lineIndex === 1 
  ?  0
  : (lineIndex - 1) * buttonsInLine - 1;
  const lastButtonIndex: number = firstButtonIndex + buttonsInLine;
  return buttonsArr.slice(firstButtonIndex, lastButtonIndex)
}

export default splitIntoColumns