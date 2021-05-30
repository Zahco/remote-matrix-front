const letters = {
    'a': [
        [false, true, true, false],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, true, true, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true]
    ],
    'b': [
        [true, true, true, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, true, true, false],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, true, true, true]
    ],
    'c': [
        [true, true, true],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, true, true]
    ],
    'd': [
        [true, true, true, false],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, true, true, false]
    ],
    'e': [
        [true, true, true],
        [true, false, false],
        [true, false, false],
        [true, true, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, true, true]
    ],
    'f': [
        [true, true, true],
        [true, false, false],
        [true, false, false],
        [true, true, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false]
    ],
    'g': [
        [true, true, true],
        [true, false, true],
        [true, false, false],
        [true, false, false],
        [true, true, true],
        [true, false, true],
        [true, false, true],
        [true, true, true]
    ],
    'h': [
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, true, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true]
    ],
    'i': [
        [true, true, true],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [true, true, true]
    ],
    'j': [
        [false, true, true, true],
        [false, false, true, false],
        [false, false, true, false],
        [false, false, true, false],
        [true, false, true, false],
        [true, false, true, false],
        [true, false, true, false],
        [false, true, false, false]
    ],
    'k': [
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, true, false],
        [true, true, false],
        [true, false, true],
        [true, false, true],
        [true, false, true]
    ],
    'l': [
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, true, true]
    ],
    'm': [
        [true, false, false, false, true],
        [true, true, false, true, true],
        [true, false, true, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true]
    ],
    'n': [
        [true, false, false, true],
        [true, true, false, true],
        [true, true, false, true],
        [true, true, false, true],
        [true, false, true, true],
        [true, false, true, true],
        [true, false, true, true],
        [true, false, false, true]
    ],
    'o': [
        [false, true, true, false],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [true, false, false, true],
        [false, true, true, false]
    ],
    'p': [
        [true, true, false],
        [true, false, true],
        [true, false, true],
        [true, true, false],
        [true, false, false],
        [true, false, false],
        [true, false, false],
        [true, false, false]
    ],
    'q': [
        [false, true, true, true, false],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, true, false, true],
        [true, false, false, true, false],
        [false, true, true, false, true]
    ],
    'r': [
        [true, true, false],
        [true, false, true],
        [true, false, true],
        [true, true, false],
        [true, true, false],
        [true, false, true],
        [true, false, true],
        [true, false, true]
    ],
    's': [
        [false, true, false],
        [true, false, true],
        [true, false, false],
        [false, true, false],
        [false, true, false],
        [false, false, true],
        [true, false, true],
        [false, true, false]
    ],
    't': [
        [true, true, true],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false]
    ],
    'u': [
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, true, true]
    ],
    'v': [
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [false, true, false],
        [false, true, false]
    ],
    'w': [
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, true, false, true],
        [true, false, true, false, true],
        [false, true, false, true, false],
        [false, true, false, true, false]
    ],
    'x': [
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [false, true, false],
        [false, true, false],
        [true, false, true],
        [true, false, true],
        [true, false, true]
    ],
    'y': [
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false]
    ],
    'z': [
        [true, true, true],
        [false, false, true],
        [false, false, true],
        [false, true, false],
        [false, true, false],
        [true, false, false],
        [true, false, false],
        [true, true, true]
    ],
    '0': [
        [false, true, false],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [false, true, false]
    ],
    '1': [
        [false, true, false],
        [true, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [true, true, true]
    ],
    '2': [
        [false, true, false],
        [true, false, true],
        [false, false, true],
        [false, false, true],
        [false, true, false],
        [false, true, false],
        [true, false, false],
        [true, true, true]
    ],
    '3': [
        [true, true, false],
        [false, false, true],
        [false, false, true],
        [false, true, false],
        [false, true, false],
        [false, false, true],
        [false, false, true],
        [true, true, false]
    ],
    '4': [
        [false, false, true, false],
        [false, true, true, false],
        [false, true, true, false],
        [true, false, true, false],
        [true, false, true, false],
        [true, true, true, true],
        [false, false, true, false],
        [false, false, true, false]
    ],
    '5': [
        [true, true, true],
        [true, false, false],
        [true, false, false],
        [true, true, false],
        [false, false, true],
        [false, false, true],
        [false, false, true],
        [true, true, false]
    ],
    '6': [
        [false, true, false],
        [true, false, true],
        [true, false, false],
        [true, false, false],
        [false, true, false],
        [true, false, true],
        [true, false, true],
        [false, true, false]
    ],
    '7': [
        [true, true, true],
        [false, false, true],
        [false, false, true],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [true, false, false],
        [true, false, false]
    ],
    '8': [
        [false, true, false],
        [true, false, true],
        [true, false, true],
        [false, true, false],
        [false, true, false],
        [true, false, true],
        [true, false, true],
        [false, true, false]
    ],
    '9': [
        [false, true, false],
        [true, false, true],
        [true, false, true],
        [false, true, false],
        [false, false, true],
        [false, false, true],
        [true, false, true],
        [false, true, false]
    ],
    '\'': [
        [true],
        [true],
        [true],
        [false],
        [false],
        [false],
        [false],
        [false]
    ],
    ',': [
        [false],
        [false],
        [false],
        [false],
        [false],
        [true],
        [true],
        [true]
    ],
    ';': [
        [false],
        [false],
        [false],
        [true],
        [false],
        [true],
        [true],
        [true]
    ],
    '.': [
        [false],
        [false],
        [false],
        [false],
        [false],
        [false],
        [false],
        [true]
    ],
    ':': [
        [false],
        [false],
        [false],
        [true],
        [false],
        [true],
        [false],
        [false]
    ],
    '!': [
        [true],
        [true],
        [true],
        [true],
        [true],
        [true],
        [false],
        [true]
    ],
    '?': [
        [false, true, false],
        [true, false, true],
        [true, false, true],
        [false, false, true],
        [false, true, false],
        [false, true, false],
        [false, false, false],
        [false, true, false]
    ],
    '{': [
        [false, false, false],
        [false, false, true],
        [false, true, false],
        [false, true, false],
        [true, false, false],
        [false, true, false],
        [false, true, false],
        [false, false, true]
    ],
    '}': [
        [false, false, false],
        [true, false, false],
        [false, true, false],
        [false, true, false],
        [false, false, true],
        [false, true, false],
        [false, true, false],
        [true, false, false]
    ],
    '_': [
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [true, true, true]
    ],
    '-': [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [true, true],
        [false, false],
        [false, false],
        [false, false]
    ],
    '"': [
        [true, false, true],
        [true, false, true],
        [true, false, true],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    '(': [
        [false, true],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [false, true]
    ],
    ')': [
        [true, false],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [true, false]
    ],
    ']': [
        [true, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [false, true],
        [true, true]
    ],
    '[': [
        [true, true],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, false],
        [true, true]
    ],
    '/': [
        [false, false, true],
        [false, false, true],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [true, false, false],
        [true, false, false]
    ],
    '\\': [
        [true, false, false],
        [true, false, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, true, false],
        [false, false, true],
        [false, false, true]
    ],
    '+': [
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, true, false],
        [true, true, true],
        [false, true, false],
        [false, false, false],
        [false, false, false]
    ],
    '*': [
        [true, false, true],
        [false, true, false],
        [true, false, true],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    '=': [
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [true, true, true],
        [false, false, false],
        [true, true, true],
        [false, false, false]
    ],
    '<': [
        [false, false, false],
        [false, false, false],
        [false, false, true],
        [false, true, false],
        [true, false, false],
        [false, true, false],
        [false, false, true],
        [false, false, false]
    ],
    '>': [
        [false, false, false],
        [false, false, false],
        [true, false, false],
        [false, true, false],
        [false, false, true],
        [false, true, false],
        [true, false, false],
        [false, false, false]
    ],
    '|': [
        [true],
        [true],
        [true],
        [true],
        [true],
        [true],
        [true],
        [true]
    ],
    '@': [
        [false, true, true, true, false],
        [true, false, false, false, true],
        [true, false, false, false, true],
        [true, false, true, false, false],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, false, true, false, true],
        [false, true, true, true, false]
    ],
    '#': [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, true, false, true, false],
        [true, true, true, true, true],
        [false, true, false, true, false],
        [true, true, true, true, true],
        [false, true, false, true, false],
        [false, false, false, false, false]
    ],
    '°': [
        [false, true, false],
        [true, false, true],
        [false, true, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ],
    '%': [
        [true, true, false, true],
        [true, true, false, true],
        [false, false, true, false],
        [false, false, true, false],
        [false, true, false, false],
        [false, true, false, false],
        [true, false, true, true],
        [true, false, true, true]
    ],
    ' ': [
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
}

export default new (class Alpha {
    getMatrix(letter) {
        if (letters[letter]) {
            return letters[letter]
        } else {
            return [
                [true, true, true],
                [true, true, true],
                [true, true, true],
                [true, true, true],
                [true, true, true],
                [true, true, true],
                [true, true, true],
                [true, true, true]
            ]
        }
    }
})