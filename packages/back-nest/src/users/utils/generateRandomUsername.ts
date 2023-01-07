import { uniqueNamesGenerator } from 'unique-names-generator';

const adjectives2 = [
  'abrupt',
  'acidic',
  'adorable',
  'adventurous',
  'aggressive',
  'agitated',
  'aloof',
  'amused',
  'annoyed',
  'antsy',
  'anxious',
  'appalling',
  'apprehensive',
  'arrogant',
  'astonishing',
  'bitter',
  'bland',
  'bored',
  'brave',
  'bright',
  'broad',
  'bulky',
  'burly',
  'charming',
  'cheeky',
  'cheerful',
  'clean',
  'clear',
  'cloudy',
  'clueless',
  'clumsy',
  'colorful',
  'colossal',
  'confused',
  'convincing',
  'convoluted',
  'cooperative',
  'courageous',
  'crooked',
  'cruel',
  'cynical',
  'dangerous',
  'dashing',
  'deceitful',
  'defeated',
  'defiant',
  'delicious',
  'delightful',
  'depraved',
  'depressed',
  'despicable',
  'determined',
  'dilapidated',
  'diminutive',
  'disgusted',
  'distinct',
  'distraught',
  'distressed',
  'disturbed',
  'dizzy',
  'drab',
  'drained',
  'dull',
  'eager',
  'ecstatic',
  'elated',
  'elegant',
  'emaciated',
  'embarrassed',
  'enchanting',
  'encouraging',
  'energetic',
  'enormous',
  'enthusiastic',
  'envious',
  'exasperated',
  'excited',
  'exhilarated',
  'extensive',
  'exuberant',
  'fancy',
  'fantastic',
  'fierce',
  'fluttering',
  'foolish',
  'frantic',
  'fresh',
  'friendly',
  'frightened',
  'frothy',
  'frustrating',
  'funny',
  'fuzzy',
  'gaudy',
  'gentle',
  'giddy',
  'gigantic',
  'glamorous',
  'gleaming',
  'glorious',
  'gorgeous',
  'graceful',
  'greasy',
  'grieving',
  'gritty',
  'grotesque',
  'grubby',
  'grumpy',
  'handsome',
  'happy',
  'harebrained',
  'healthy',
  'helpful',
  'helpless',
  'high',
  'hollow',
  'homely',
  'horrific',
  'huge',
  'hungry',
  'hurt',
  'icy',
  'ideal',
  'immense',
  'impressionable',
  'intrigued',
  'irate',
  'irritable',
  'itchy',
  'jealous',
  'jittery',
  'jolly',
  'joyous',
  'juicy',
  'jumpy',
  'kind',
  'large',
  'lazy',
  'lethal',
  'little',
  'lively',
  'livid',
  'lonely',
  'loose',
  'lovely',
  'lucky',
  'ludicrous',
  'magnificent',
  'mammoth',
  'maniacal',
  'massive',
  'melancholy',
  'melted',
  'miniature',
  'minute',
  'mistaken',
  'misty',
  'moody',
  'mortified',
  'motionless',
  'mysterious',
  'narrow',
  'nasty',
  'naughty',
  'nervous',
  'nonchalant',
  'nonsensical',
  'nutritious',
  'nutty',
  'obedient',
  'oblivious',
  'obnoxious',
  'odd',
  'outrageous',
  'panicky',
  'perfect',
  'perplexed',
  'petite',
  'petty',
  'plain',
  'pleasant',
  'poised',
  'pompous',
  'precious',
  'prickly',
  'proud',
  'pungent',
  'puny',
  'quaint',
  'quizzical',
  'ratty',
  'reassured',
  'relieved',
  'repulsive',
  'responsive',
  'ripe',
  'robust',
  'rotten',
  'rough',
  'round',
  'salty',
  'sarcastic',
  'scant',
  'scary',
  'scattered',
  'scrawny',
  'selfish',
  'shaky',
  'shallow',
  'sharp',
  'shiny',
  'short',
  'silky',
  'silly',
  'skinny',
  'slimy',
  'slippery',
  'small',
  'smarmy',
  'smiling',
  'smoggy',
  'smooth',
  'smug',
  'soggy',
  'solid',
  'sore',
  'sour',
  'sparkling',
  'spicy',
  'splendid',
  'spotless',
  'square',
  'stale',
  'steady',
  'steep',
  'responsive',
  'sticky',
  'stormy',
  'stout',
  'strange',
  'strong',
  'stunning',
  'substantial',
  'successful',
  'succulent',
  'superficial',
  'superior',
  'sweet',
  'tart',
  'tasty',
  'tender',
  'tense',
  'terrible',
  'thankful',
  'thick',
  'thoughtful',
  'thoughtless',
  'timely',
  'tricky',
  'troubled',
  'uneven',
  'unsightly',
  'upset',
  'uptight',
  'vast',
  'vexed',
  'victorious',
  'virtuous',
  'vivacious',
  'vivid',
  'wacky',
  'weary',
  'whimsical',
  'whopping',
  'wicked',
  'witty',
  'wobbly',
  'wonderful',
  'worried',
  'yummy',
  'zany',
  'zealous',
  'zippy',
];
const technologies = [
  'Bash',
  'C',
  'C#',
  'C++',
  'CSS',
  'Elm',
  'Eno',
  'ERB',
  'Fennel',
  'Golang',
  'HTML',
  'Java',
  'JavaScript',
  'Lua',
  'Make',
  'Markdown',
  'OCaml',
  'PHP',
  'Python',
  'Ruby',
  'Rust',
  'R',
  'S-expressions',
  'SPARQL',
  'SystemRDL',
  'Svelte',
  'TOML',
  'Turtle',
  'TypeScript',
  'Verilog',
  'VHDL',
  'Vue',
  'YAML',
  'WASM',
  'Agda',
  'Erlang',
  'Dockerfile',
  'Go',
  'Haskell',
  'Kotlin',
  'Nix',
  'Perl',
  'Scala',
  'Swift',
  'Arch',
  'Ubuntu',
  'Mac',
  'Windows',
  'GNU',
  'Linux',
  'BSD',
  'Arduino',
  'Clojure',
  'Blockchain',
  'Elixir',
  'Angular',
  'Vue',
  'Svelte',
  'React',
  'Re-frame',
  'Stateless',
  'Kernel',
  'Context',
  'OpenGL',
  'MicroServices',
  'Monolith',
  'Monorepo',
  'SQL',
  'Firebase',
  'MongoDB',
  'Postgres',
  'MySQL',
  'Ionic',
  'Phoenix',
  'Cordova',
  'ReactNative',
  'PowerShell',
  'Vim',
  'VSCode',
  'Emacs',
  'Cobol',
  'Zsh',
  'Assembly',
  'OpenCV',
  'HTTP',
  'SSH',
  'FTP',
  'Tensorflow',
  'PyTorch',
  'Pandas',
  'Unity',
  'Unreal',
  'Docker',
  'Kubernetes',
  'Godot',
];

export const generateRandomUsername = () => {
  const randomName: string = uniqueNamesGenerator({
    dictionaries: [adjectives2, technologies],
    separator: '',
    length: 2,
    style: 'capital',
  });

  return randomName;
};