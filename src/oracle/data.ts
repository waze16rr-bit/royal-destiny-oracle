export type Dimension = "EI" | "NS" | "TF" | "JP";
export type Letter = "E" | "I" | "N" | "S" | "T" | "F" | "J" | "P";
export type Hue = "crimson" | "emerald" | "sapphire" | "royal" | "gold";

export interface AnswerOption {
  text: string;
  letter: Letter;
  hue: Hue;
}
export interface Question {
  id: number;
  dimension: Dimension;
  prompt: string;
  options: [AnswerOption, AnswerOption];
}

export const questions: Question[] = [
  {
    id: 1, dimension: "EI",
    prompt: "When entering a grand feast, do you seek the center of the room or a quiet alcove?",
    options: [
      { text: "I stride to the center, where torchlight gathers and laughter rises.", letter: "E", hue: "crimson" },
      { text: "I drift to the alcove, where I may observe the dance unseen.", letter: "I", hue: "royal" },
    ],
  },
  {
    id: 2, dimension: "NS",
    prompt: "Do you dream of what the world could be, or master the world as it is?",
    options: [
      { text: "I dream of unbuilt kingdoms — visions stir louder than stone.", letter: "N", hue: "sapphire" },
      { text: "I master what is — a sword in hand teaches more than a prophecy.", letter: "S", hue: "gold" },
    ],
  },
  {
    id: 3, dimension: "TF",
    prompt: "In justice, is the Law absolute, or must Mercy temper the blade?",
    options: [
      { text: "The Law is absolute. Without it, even kings become wolves.", letter: "T", hue: "crimson" },
      { text: "Mercy must temper the blade. A heart unmoved is no heart at all.", letter: "F", hue: "emerald" },
    ],
  },
  {
    id: 4, dimension: "JP",
    prompt: "Is your life a carefully charted map, or a winding, unplanned path?",
    options: [
      { text: "A charted map, sealed in wax. Order brings dominion.", letter: "J", hue: "gold" },
      { text: "A winding path. The wind shall name my next harbor.", letter: "P", hue: "emerald" },
    ],
  },
  {
    id: 5, dimension: "EI",
    prompt: "After a long campaign, what restores your spirit?",
    options: [
      { text: "Wine, song, and the company of a hundred voices.", letter: "E", hue: "crimson" },
      { text: "Silence in a candle-lit chamber, with only my thoughts for company.", letter: "I", hue: "royal" },
    ],
  },
  {
    id: 6, dimension: "NS",
    prompt: "An ancient map is laid before you. What captures your gaze?",
    options: [
      { text: "The blank edges — what mysteries lie beyond the inked seas?", letter: "N", hue: "sapphire" },
      { text: "The marked roads, the marshlands, the fortresses I might hold.", letter: "S", hue: "gold" },
    ],
  },
  {
    id: 7, dimension: "TF",
    prompt: "A loyal knight has failed you. How is judgment passed?",
    options: [
      { text: "By cold reason — the failure must be measured, not mourned.", letter: "T", hue: "crimson" },
      { text: "By the heart — I weigh his loyalty, his wounds, his soul.", letter: "F", hue: "emerald" },
    ],
  },
  {
    id: 8, dimension: "JP",
    prompt: "Dawn breaks upon a new day. What greets you first?",
    options: [
      { text: "A list of duties, sealed the night before.", letter: "J", hue: "gold" },
      { text: "An open window, and the question — what shall today reveal?", letter: "P", hue: "emerald" },
    ],
  },
  {
    id: 9, dimension: "EI",
    prompt: "A grand idea ignites within you. How does it find its flame?",
    options: [
      { text: "Spoken aloud, sharpened upon the minds of others.", letter: "E", hue: "crimson" },
      { text: "Forged in private, written in a leather-bound tome.", letter: "I", hue: "royal" },
    ],
  },
  {
    id: 10, dimension: "NS",
    prompt: "When listening to an ancient tale, what stirs you most?",
    options: [
      { text: "The hidden meaning — the symbols beneath the story.", letter: "N", hue: "sapphire" },
      { text: "The vivid scene — the smell of pine, the gleam of a blade.", letter: "S", hue: "gold" },
    ],
  },
  {
    id: 11, dimension: "TF",
    prompt: "Two truths collide in your court. How do you choose?",
    options: [
      { text: "By the firmer logic — truth has no need of comfort.", letter: "T", hue: "crimson" },
      { text: "By the gentler harm — truth must serve the living.", letter: "F", hue: "emerald" },
    ],
  },
  {
    id: 12, dimension: "JP",
    prompt: "A messenger arrives, breathless, with news that changes everything.",
    options: [
      { text: "I summon counsel, revise the plan, and seal a new decree.", letter: "J", hue: "gold" },
      { text: "I lean forward, intrigued — chaos is merely opportunity in disguise.", letter: "P", hue: "emerald" },
    ],
  },
  {
    id: 13, dimension: "TF",
    prompt: "When the crown grows heavy, where do you turn?",
    options: [
      { text: "To principle — duty does not bend to fatigue.", letter: "T", hue: "crimson" },
      { text: "To those I love — their faces are the reason for the weight.", letter: "F", hue: "emerald" },
    ],
  },
];

export const oracleOpinions: string[] = [
  "A choice of great courage…",
  "Hmm… the shadows speak loudly here.",
  "Intriguing — a rare perspective indeed.",
  "The stars lean closer to listen.",
  "A monarch's whisper in mortal voice.",
  "Curious. The flame flickers gold.",
  "Old kings have answered as you do.",
  "The runes shift — but do not turn away.",
  "A truth half-spoken still echoes long.",
  "I see the weight you do not name.",
  "The silver mirror approves.",
  "Even the wolves grow quiet at this.",
  "A heart steadier than most.",
  "The Oracle marks this in ink, not pencil.",
];

export type PersonalityCode =
  | "INTJ" | "INTP" | "ENTJ" | "ENTP"
  | "INFJ" | "INFP" | "ENFJ" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export type Group = "Analyst" | "Diplomat" | "Sentinel" | "Explorer";

export interface Personality {
  code: PersonalityCode;
  title: string;
  group: Group;
  tagline: string;
  description: string;
  strengths: string[];
  shadows: string[];
}

export const personalities: Record<PersonalityCode, Personality> = {
  INTJ: { code: "INTJ", title: "The Grand Strategist", group: "Analyst",
    tagline: "Architect of unseen kingdoms.",
    description: "You move as if the future were a chessboard already half-played. Where others see chaos, you see lattices of cause and consequence — and patiently arrange them. Your silence is not absence; it is the long breath before the decisive word.",
    strengths: ["Foresight that borders on prophecy", "Iron-willed independence", "Mastery of long, patient plans"],
    shadows: ["A coldness mistaken for cruelty", "Impatience with sentiment", "The loneliness of the high tower"] },
  INTP: { code: "INTP", title: "The Hermit Sage", group: "Analyst",
    tagline: "Keeper of unspoken truths.",
    description: "You are the scholar in the candlelit room, untangling the world into its threads. Ideas are your kingdom, and curiosity your only crown. You serve no doctrine — only the quiet, exacting honesty of thought.",
    strengths: ["Deep, original analysis", "Unbiased reasoning", "Inventive elegance of thought"],
    shadows: ["Detachment from the living", "Endless deferral of decision", "Forgetting the body that holds the mind"] },
  ENTJ: { code: "ENTJ", title: "The Iron Sovereign", group: "Analyst",
    tagline: "Born with the crown already in hand.",
    description: "You command without asking permission. Your voice gathers others into formation; your will tempers iron. To you, leadership is not ambition — it is the natural shape of standing still while everyone else looks for direction.",
    strengths: ["Decisive command", "Strategic vision in motion", "Magnetic conviction"],
    shadows: ["Rule by force where care would suffice", "Disdain for hesitation", "The lonely cost of dominion"] },
  ENTP: { code: "ENTP", title: "The Court Provocateur", group: "Analyst",
    tagline: "The wit that unseats kings.",
    description: "You arrive with a question no one wished to hear, and leave behind a court reconsidering its own walls. Debate is your duel, ideas your saber. You belong to no creed but the restless one of ‘what if?'",
    strengths: ["Razor wit", "Daring originality", "Skill at reframing the impossible"],
    shadows: ["Argument for its own sake", "Restlessness that abandons projects", "Charm used as a shield"] },
  INFJ: { code: "INFJ", title: "The Veiled Prophet", group: "Diplomat",
    tagline: "The seer who walks among mortals.",
    description: "You see what others feel before they name it. Compassion is your compass, and conviction your steel. You are gentle in word, unbreakable in purpose — a quiet flame that warms a kingdom without ever raising its voice.",
    strengths: ["Profound empathy", "Quiet, enduring conviction", "Vision of the soul beneath the mask"],
    shadows: ["Burning out for unseen causes", "Withdrawal in sorrow", "Perfectionism that wounds the self"] },
  INFP: { code: "INFP", title: "The Moonlit Idealist", group: "Diplomat",
    tagline: "Heart-keeper of impossible truths.",
    description: "You carry within you a private cathedral of meaning. The world's small cruelties wound you, and yet you keep faith — in beauty, in tenderness, in the quiet rebellion of the gentle heart.",
    strengths: ["Deep moral sincerity", "Imaginative inner life", "Loyalty to truth, not power"],
    shadows: ["Withdrawal into private grief", "Idealizing those who cannot bear it", "Hesitation when action is needed"] },
  ENFJ: { code: "ENFJ", title: "The Crowned Shepherd", group: "Diplomat",
    tagline: "Leader by love, not by sword.",
    description: "You gather others as a fire gathers travelers. Your gift is to see the unspoken hope in every face, and to call it forth. To follow you is not to obey, but to remember who one was meant to be.",
    strengths: ["Inspiring warmth", "Care that organizes itself into action", "Faith in human becoming"],
    shadows: ["Carrying burdens not your own", "Self-erasure in service", "Wounded by ingratitude"] },
  ENFP: { code: "ENFP", title: "The Wandering Bard", group: "Diplomat",
    tagline: "The spark that wakes the kingdom.",
    description: "You are joy with a dagger of insight at its hip. You see possibility in every face, every dawn, every tavern song. The world is a tale still being written, and you reach eagerly for the pen.",
    strengths: ["Boundless inspiration", "Empathy laced with wit", "The courage of a true heart"],
    shadows: ["Scattered focus", "Restlessness mistaken for freedom", "Sorrow hidden behind brightness"] },
  ISTJ: { code: "ISTJ", title: "The Stone Warden", group: "Sentinel",
    tagline: "The vow that does not bend.",
    description: "You are the keeper of oaths, the architect of order. Where others abandon their posts, you remain. Loyalty is not an idea to you — it is the stone of which you are made, weathered by storms, unmoved.",
    strengths: ["Unshakable reliability", "Discipline of mind and hand", "Quiet, steady honor"],
    shadows: ["Rigidity in the face of change", "Mistrust of the new", "Burdened silence"] },
  ISFJ: { code: "ISFJ", title: "The Quiet Guardian", group: "Sentinel",
    tagline: "The soul who shelters others.",
    description: "You are the warmth in the long winter — small kindnesses, faithfully kept. You remember what others forget: a name, a tea, a wound. Your love is not loud, but it is the strongest stone in the wall.",
    strengths: ["Steadfast care", "Memory for the small and sacred", "Patience deeper than words"],
    shadows: ["Self-sacrifice unto exhaustion", "Difficulty refusing a need", "Hidden resentment"] },
  ESTJ: { code: "ESTJ", title: "The High Marshal", group: "Sentinel",
    tagline: "Order is the truest mercy.",
    description: "You impose structure where there is drift, and the world steadies beneath you. Tradition is your bedrock, duty your daily bread. Where others speak of leadership, you simply do the work and the kingdom holds.",
    strengths: ["Decisive practicality", "Loyal stewardship", "Strength under pressure"],
    shadows: ["Inflexibility of method", "Dismissing the tender heart", "Confusing rule with wisdom"] },
  ESFJ: { code: "ESFJ", title: "The Banquet Sovereign", group: "Sentinel",
    tagline: "The hearth that holds the realm.",
    description: "You weave belonging like a tapestry. The feast, the welcome, the right word at the right moment — these are your arts. You hold the kingdom together not by sword, but by the deep, generous craft of care.",
    strengths: ["Generous hospitality", "Skill at harmony", "Devotion to those entrusted to you"],
    shadows: ["Dependence on approval", "Discomfort with conflict", "Care that hardens into control"] },
  ISTP: { code: "ISTP", title: "The Silent Blade", group: "Explorer",
    tagline: "Few words. Truer aim.",
    description: "You speak through skill, not speech. The blade, the lock, the riddle of the broken thing — these reveal you. You are calm in chaos, and your hands know what your tongue would only complicate.",
    strengths: ["Cool nerve under pressure", "Mastery of craft", "Unflinching realism"],
    shadows: ["Emotional distance", "Restlessness without challenge", "Reluctance to be known"] },
  ISFP: { code: "ISFP", title: "The Forest Mystic", group: "Explorer",
    tagline: "Beauty is my creed.",
    description: "You walk lightly on the earth, and the earth answers. Your art is in the seeing — the way light falls, the way a heart opens. You bow to no throne, only to the small, sacred wonders that pass unspoken.",
    strengths: ["Aesthetic depth", "Gentle authenticity", "Quiet, fierce loyalty"],
    shadows: ["Avoidance of conflict", "Difficulty asserting needs", "Sorrow in solitude"] },
  ESTP: { code: "ESTP", title: "The Crimson Duelist", group: "Explorer",
    tagline: "Live now — the future is a rumor.",
    description: "You are appetite and reflex, brilliance in motion. Where others deliberate, you act, and the moment bends to meet you. Risk is your wine, and you drink deeply, laughing.",
    strengths: ["Bold action", "Sharp situational instinct", "Charisma in the storm"],
    shadows: ["Recklessness", "Boredom with patience", "Avoidance of inner depths"] },
  ESFP: { code: "ESFP", title: "The Festival Star", group: "Explorer",
    tagline: "Joy is a sacred art.",
    description: "You arrive and the room remembers how to laugh. You are warmth, music, the sudden gold of a torch lit at twilight. To live with you is to be reminded — again and again — that the world was made for delight.",
    strengths: ["Infectious joy", "Generous spirit", "Courage to feel deeply"],
    shadows: ["Avoidance of long grief", "Difficulty with restraint", "Loneliness behind the laughter"] },
};

export function scoreAnswers(answers: Letter[]): PersonalityCode {
  const dims: Record<Dimension, [Letter, Letter, number, number]> = {
    EI: ["E", "I", 0, 0],
    NS: ["N", "S", 0, 0],
    TF: ["T", "F", 0, 0],
    JP: ["J", "P", 0, 0],
  };
  questions.forEach((q, i) => {
    const ans = answers[i];
    if (!ans) return;
    const d = dims[q.dimension];
    if (ans === d[0]) d[2]++;
    else if (ans === d[1]) d[3]++;
  });
  const pick = (d: Dimension): Letter => {
    const [a, b, ca, cb] = dims[d];
    return ca >= cb ? a : b;
  };
  return (pick("EI") + pick("NS") + pick("TF") + pick("JP")) as PersonalityCode;
}

export const groupHues: Record<Group, string> = {
  Analyst: "from-royal/40 via-ink to-sapphire/30",
  Diplomat: "from-emerald/40 via-ink to-sapphire/30",
  Sentinel: "from-gold-deep/30 via-ink to-crimson-deep/30",
  Explorer: "from-crimson-deep/40 via-ink to-gold-deep/20",
};
