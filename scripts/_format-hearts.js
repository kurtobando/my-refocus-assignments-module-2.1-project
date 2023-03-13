export function formatHearts(number) {
    // reminder to myself
    // referrence https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900

    return Math.abs(Number(number)) >= 1.0e9
        ? (Math.abs(Number(number)) / 1.0e9).toFixed(1) + 'B'
        : // Six Zeroes for Millions
        Math.abs(Number(number)) >= 1.0e6
        ? (Math.abs(Number(number)) / 1.0e6).toFixed(1) + 'M'
        : // Three Zeroes for Thousands
        Math.abs(Number(number)) >= 1.0e3
        ? (Math.abs(Number(number)) / 1.0e3).toFixed(1) + 'K'
        : Math.abs(Number(number));
}
