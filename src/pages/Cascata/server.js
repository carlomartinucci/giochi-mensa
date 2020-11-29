const c1 = {
  description:
    "Far cadere colonna per colonna le lettere della metà superiore nella stessa colonna della metà inferiore, in modo da leggere una frase di C.B. Sono indicati gli spazi tra le parole e tre segni di interpunzione (due punti, apostrofo, punto).",
  width: 14,
  height: 14,
  values: [
    "__c_aa________",
    "_ve_ae__a__aaa",
    "_aecch_eiaaeia",
    "adeiei_llecgrl",
    "aonnhieqneeltr",
    "npnrnsotrnhltr",
    "osorttsuusltuu",
    "   ^      ^   ",
    "^      ^  ^   ",
    "^     ^  ^  ^ ",
    "       :^  ^  ",
    "      ^  '    ",
    " ^ ^  ^       ",
    "^     ^      .",
  ].join(""),

  solution: [
    "__ _  ________",
    "_  _  __ __   ",
    "_     _       ",
    "      _       ",
    "              ",
    "              ",
    "              ",
    "non^essere^giu",
    "^perche^la^tua",
    "^donna^ti^ha^l",
    "asciato:^ne^tr",
    "overai^un'altr",
    "a^e^ti^lascera",
    "^anche^quella.",
  ].join(""),
}

const c2 = {
  description:
    "Far cadere colonna per colonna le lettere della metà superiore nella stessa colonna della metà inferiore, in modo da leggere una frase in tema con il mese di marzo.",
  width: 7,
  height: 16,
  values: [
    "       ",
    "c c   a",
    "eceacad",
    "mheceie",
    "nimehne",
    "nipmiri",
    "onrmnrm",
    "ovsoosn",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
  ].join(""),

  solution: [
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "c c   a",
    "eceacad",
    "mheceie",
    "nimehne",
    "nipmiri",
    "onrmnrm",
    "ovsoosn",
  ].join(""),
}

const c3 = {
  description:
    "Far cadere colonna per colonna le lettere della metà superiore nella stessa colonna della metà inferiore, in modo da leggere una frase di ?",
  width: 12,
  height: 18,
  values: [
    "  a a   e   ",
    "a a è  ae   ",
    "bec l  ci ca",
    "eeigmicdi ec",
    "iillnildlaed",
    "nnnnoioholge",
    "ntooporiolpi",
    "rtoosoùlrmpo",
    "rvsrtpvntstu",
    "     ^    ^ ",
    " ^    ^    ^",
    "   ^   ^    ",
    "      ^   ^ ",
    "     .^  ^  ",
    "   ^ ^   ^  ",
    "         ^  ",
    "   ^     ^  ",
    " ^         .",
  ].join(""),

  solution: [
    "  a a   e   ",
    "a a è  ae   ",
    "bec l  ci ca",
    "eeigmicdi ec",
    "iillnildlaed",
    "nnnnoioholge",
    "ntooporiolpi",
    "rtoosoùlrmpo",
    " vsrtpvntstu",
    "r    ^    ^ ",
    " ^    ^    ^",
    "   ^   ^    ",
    "      ^   ^ ",
    "     .^  ^  ",
    "   ^ ^   ^  ",
    "         ^  ",
    "   ^     ^  ",
    " ^         .",
  ].join(""),
}

export const state = {
  c1,
  c2,
  c3,
}

export const isSolution = (id, values) =>
  state[id] && state[id].solution === values

// There is no need to create a context provider for the SWR data. You can get that out of the box by putting the SWR in its own hook with something like this:

// // useSomeData.js
// const useSomeData = () => {
//   const { data, error, mutate } = useSWR('/api/something')

//   return {
//     data,
//     isLoading: !error && !data,
//     isError: error,
//     mutate
//   }
// }

// export default useProductPrices
// // In some component
// const { data, isLoading, isError } = useSomeData()
// // In some other component
// const { data, isLoading, isError } = useSomeData()
// The data is shared between the 2 components. Simple as that slightly_smiling_face
