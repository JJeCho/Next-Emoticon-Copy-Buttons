// src/data/emojiRanges.ts

import { UnicodeRange } from './unicodeGenerator';

/**
 * Comprehensive list of Unicode ranges covering emojis, symbols, and various scripts.
 */
export const UNICODE_RANGES: UnicodeRange[] = [
  { start: 0x0000, end: 0x007F },   // Basic Latin
  { start: 0x0080, end: 0x00FF },   // Latin-1 Supplement
  { start: 0x0100, end: 0x017F },   // Latin Extended-A
  { start: 0x0180, end: 0x024F },   // Latin Extended-B
  { start: 0x0250, end: 0x02AF },   // IPA Extensions
  { start: 0x02B0, end: 0x02FF },   // Spacing Modifier Letters
  { start: 0x0300, end: 0x036F },   // Combining Diacritical Marks
  { start: 0x0370, end: 0x03FF },   // Greek and Coptic
  { start: 0x0400, end: 0x04FF },   // Cyrillic
  { start: 0x0500, end: 0x052F },   // Cyrillic Supplement
  { start: 0x0530, end: 0x058F },   // Armenian
  { start: 0x0590, end: 0x05FF },   // Hebrew
  { start: 0x0600, end: 0x06FF },   // Arabic
  { start: 0x0700, end: 0x074F },   // Syriac
  { start: 0x0750, end: 0x077F },   // Arabic Supplement
  { start: 0x0780, end: 0x07BF },   // Thaana
  { start: 0x07C0, end: 0x07FF },   // NKo
  { start: 0x0800, end: 0x083F },   // Samaritan
  { start: 0x0840, end: 0x085F },   // Mandaic
  { start: 0x0860, end: 0x086F },   // Syriac Supplement
  { start: 0x0870, end: 0x089F },   // Arabic Extended-B
  { start: 0x08A0, end: 0x08FF },   // Arabic Extended-A
  { start: 0x0900, end: 0x097F },   // Devanagari
  { start: 0x0980, end: 0x09FF },   // Bengali
  { start: 0x0A00, end: 0x0A7F },   // Gurmukhi
  { start: 0x0A80, end: 0x0AFF },   // Gujarati
  { start: 0x0B00, end: 0x0B7F },   // Oriya
  { start: 0x0B80, end: 0x0BFF },   // Tamil
  { start: 0x0C00, end: 0x0C7F },   // Telugu
  { start: 0x0C80, end: 0x0CFF },   // Kannada
  { start: 0x0D00, end: 0x0D7F },   // Malayalam
  { start: 0x0D80, end: 0x0DFF },   // Sinhala
  { start: 0x0E00, end: 0x0E7F },   // Thai
  { start: 0x0E80, end: 0x0EFF },   // Lao
  { start: 0x0F00, end: 0x0FFF },   // Tibetan
  { start: 0x1000, end: 0x109F },   // Myanmar
  { start: 0x10A0, end: 0x10FF },   // Georgian
  { start: 0x1100, end: 0x11FF },   // Hangul Jamo
  { start: 0x1200, end: 0x137F },   // Ethiopic
  { start: 0x1380, end: 0x139F },   // Ethiopic Supplement
  { start: 0x13A0, end: 0x13FF },   // Cherokee
  { start: 0x1400, end: 0x167F },   // Unified Canadian Aboriginal Syllabics
  { start: 0x1680, end: 0x169F },   // Ogham
  { start: 0x16A0, end: 0x16FF },   // Runic
  { start: 0x1700, end: 0x171F },   // Tagalog
  { start: 0x1720, end: 0x173F },   // Hanunoo
  { start: 0x1740, end: 0x175F },   // Buhid
  { start: 0x1760, end: 0x177F },   // Tagbanwa
  { start: 0x1780, end: 0x17FF },   // Khmer
  { start: 0x1800, end: 0x18AF },   // Mongolian
  { start: 0x18B0, end: 0x18FF },   // Unified Canadian Aboriginal Syllabics Extended
  { start: 0x1F600, end: 0x1F64F }, // Emoticons
  { start: 0x1F300, end: 0x1F5FF }, // Miscellaneous Symbols and Pictographs
  { start: 0x1F680, end: 0x1F6FF }, // Transport and Map Symbols
  { start: 0x2600, end: 0x26FF },   // Miscellaneous Symbols
  { start: 0x2700, end: 0x27BF },   // Dingbats
  { start: 0x1F700, end: 0x1F77F }, // Alchemical Symbols
  { start: 0x1F780, end: 0x1F7FF }, // Geometric Shapes Extended
  { start: 0x1F800, end: 0x1F8FF }, // Supplemental Arrows-C
  { start: 0x1F900, end: 0x1F9FF }, // Supplemental Symbols and Pictographs
  { start: 0x1FA70, end: 0x1FAFF }, // Symbols and Pictographs Extended-A
  { start: 0x1F000, end: 0x1F02F }, // Mahjong Tiles
  { start: 0x1F0A0, end: 0x1F0FF }, // Playing Cards
  { start: 0x1FA00, end: 0x1FA6F }, // Chess Symbols
  { start: 0x2460, end: 0x24FF },   // Enclosed Alphanumerics
  { start: 0x25A0, end: 0x25FF },   // Geometric Shapes
  { start: 0x1F100, end: 0x1F1FF }, // Enclosed Alphanumerics Supplement
  { start: 0x1F200, end: 0x1F2FF }, // Enclosed Ideographic Supplement
  { start: 0x2100, end: 0x214F },   // Letterlike Symbols
  { start: 0x2150, end: 0x218F },   // Number Forms
  { start: 0x2200, end: 0x22FF },   // Mathematical Operators
  { start: 0x2500, end: 0x257F },   // Box Drawing
  { start: 0x2580, end: 0x259F },   // Block Elements
  { start: 0x2800, end: 0x28FF },   // Braille Patterns
  { start: 0x1FB00, end: 0x1FBFF }, // Symbols for Legacy Computing
  // Add any additional ranges if necessary
];

/**
 * Categorized Unicode ranges for user selection.
 */
export const UNICODE_CATEGORIES = {
  emoji: [
    { start: 0x1F600, end: 0x1F64F }, // Emoticons
    { start: 0x1F300, end: 0x1F5FF }, // Miscellaneous Symbols and Pictographs
    { start: 0x1F680, end: 0x1F6FF }, // Transport and Map Symbols
    { start: 0x2600, end: 0x26FF },   // Miscellaneous Symbols
    { start: 0x2700, end: 0x27BF },   // Dingbats
    { start: 0x1F700, end: 0x1F77F }, // Alchemical Symbols
    { start: 0x1F780, end: 0x1F7FF }, // Geometric Shapes Extended
    { start: 0x1F800, end: 0x1F8FF }, // Supplemental Arrows-C
    { start: 0x1F900, end: 0x1F9FF }, // Supplemental Symbols and Pictographs
    { start: 0x1FA70, end: 0x1FAFF }, // Symbols and Pictographs Extended-A
    { start: 0x1F000, end: 0x1F02F }, // Mahjong Tiles
    { start: 0x1F0A0, end: 0x1F0FF }, // Playing Cards
    { start: 0x1FA00, end: 0x1FA6F }, // Chess Symbols
  ],
  basicLatin: [
    { start: 0x0000, end: 0x007F },   // Basic Latin
    { start: 0x0080, end: 0x00FF },   // Latin-1 Supplement
  ],
  latinExtended: [
    { start: 0x0100, end: 0x017F },   // Latin Extended-A
    { start: 0x0180, end: 0x024F },   // Latin Extended-B
    { start: 0x0250, end: 0x02AF },   // IPA Extensions
    { start: 0x1E00, end: 0x1EFF },   // Latin Extended Additional
  ],
  greek: [
    { start: 0x0370, end: 0x03FF },   // Greek and Coptic
    { start: 0x1F00, end: 0x1FFF },   // Greek Extended
  ],
  cyrillic: [
    { start: 0x0400, end: 0x04FF },   // Cyrillic
    { start: 0x0500, end: 0x052F },   // Cyrillic Supplement
    { start: 0x2DE0, end: 0x2DFF },   // Cyrillic Extended-A
    { start: 0xA640, end: 0xA69F },   // Cyrillic Extended-B
  ],
  arabic: [
    { start: 0x0600, end: 0x06FF },   // Arabic
    { start: 0x0750, end: 0x077F },   // Arabic Supplement
    { start: 0x08A0, end: 0x08FF },   // Arabic Extended-A
    { start: 0x0870, end: 0x089F },   // Arabic Extended-B
    { start: 0x1EE00, end: 0x1EEFF }, // Arabic Mathematical Alphabetic Symbols
  ],
  devanagari: [
    { start: 0x0900, end: 0x097F },   // Devanagari
    { start: 0xA8E0, end: 0xA8FF },   // Devanagari Extended
  ],
  hebrew: [
    { start: 0x0590, end: 0x05FF },   // Hebrew
  ],
  japanese: [
    { start: 0x3040, end: 0x309F },   // Hiragana
    { start: 0x30A0, end: 0x30FF },   // Katakana
    { start: 0x31F0, end: 0x31FF },   // Katakana Phonetic Extensions
  ],
  braille: [
    { start: 0x2800, end: 0x28FF },   // Braille Patterns
  ],
  cjk: [
    { start: 0x4E00, end: 0x9FFF },   // CJK Unified Ideographs
    { start: 0x3400, end: 0x4DBF },   // CJK Unified Ideographs Extension A
    { start: 0x20000, end: 0x2A6DF }, // CJK Unified Ideographs Extension B
    { start: 0x2A700, end: 0x2B73F }, // CJK Unified Ideographs Extension C
    { start: 0x2B740, end: 0x2B81F }, // CJK Unified Ideographs Extension D
    { start: 0x2B820, end: 0x2CEAF }, // CJK Unified Ideographs Extension E
    { start: 0xF900, end: 0xFAFF },   // CJK Compatibility Ideographs
  ],
  punctuation: [
    { start: 0x2000, end: 0x206F },   // General Punctuation
    { start: 0x2E00, end: 0x2E7F },   // Supplemental Punctuation
  ],
  mathSymbols: [
    { start: 0x2200, end: 0x22FF },   // Mathematical Operators
    { start: 0x27C0, end: 0x27EF },   // Miscellaneous Mathematical Symbols-A
    { start: 0x2980, end: 0x29FF },   // Miscellaneous Mathematical Symbols-B
    { start: 0x2A00, end: 0x2AFF },   // Supplemental Mathematical Operators
    { start: 0x1D400, end: 0x1D7FF }, // Mathematical Alphanumeric Symbols
  ],
  geometricShapes: [
    { start: 0x25A0, end: 0x25FF },   // Geometric Shapes
    { start: 0x1F780, end: 0x1F7FF }, // Geometric Shapes Extended
  ],
  arrows: [
    { start: 0x2190, end: 0x21FF },   // Arrows
    { start: 0x27F0, end: 0x27FF },   // Supplemental Arrows-A
    { start: 0x2900, end: 0x297F },   // Supplemental Arrows-B
    { start: 0x1F800, end: 0x1F8FF }, // Supplemental Arrows-C
  ],
  enclosedAlphanumerics: [
    { start: 0x2460, end: 0x24FF },   // Enclosed Alphanumerics
    { start: 0x1F100, end: 0x1F1FF }, // Enclosed Alphanumerics Supplement
  ],
  musicalSymbols: [
    { start: 0x1D100, end: 0x1D1FF }, // Musical Symbols
    { start: 0x1D200, end: 0x1D24F }, // Ancient Greek Musical Notation
    { start: 0x1D000, end: 0x1D0FF }, // Byzantine Musical Symbols
    { start: 0x1D100, end: 0x1D1FF }, // Musical Symbols
    { start: 0x1D300, end: 0x1D35F }, // Tai Xuan Jing Symbols
    { start: 0x1D360, end: 0x1D37F }, // Counting Rod Numerals
    { start: 0x1D400, end: 0x1D7FF }, // Mathematical Alphanumeric Symbols
    { start: 0x1D800, end: 0x1DAAF }, // Sutton SignWriting
  ],
  symbolsForLegacyComputing: [
    { start: 0x1FB00, end: 0x1FBFF }, // Symbols for Legacy Computing
  ],
  otherScripts: [
    { start: 0x1200, end: 0x137F },   // Ethiopic
    { start: 0x1380, end: 0x139F },   // Ethiopic Supplement
    { start: 0x13A0, end: 0x13FF },   // Cherokee
    { start: 0x1400, end: 0x167F },   // Unified Canadian Aboriginal Syllabics
    { start: 0x1680, end: 0x169F },   // Ogham
    { start: 0x16A0, end: 0x16FF },   // Runic
    { start: 0x1700, end: 0x171F },   // Tagalog
    { start: 0x1720, end: 0x173F },   // Hanunoo
    { start: 0x1740, end: 0x175F },   // Buhid
    { start: 0x1760, end: 0x177F },   // Tagbanwa
    { start: 0x1780, end: 0x17FF },   // Khmer
    { start: 0x1800, end: 0x18AF },   // Mongolian
    { start: 0x18B0, end: 0x18FF },   // Unified Canadian Aboriginal Syllabics Extended
    { start: 0x1C00, end: 0x1C4F },   // Lepcha
    { start: 0x1C50, end: 0x1C7F },   // Ol Chiki
    { start: 0x1C80, end: 0x1C8F },   // Cyrillic Extended-C
    { start: 0x1C90, end: 0x1CBF },   // Georgian Extended
    { start: 0x1CC0, end: 0x1CCF },   // Sundanese Supplement
    { start: 0x1CD0, end: 0x1CFF },   // Vedic Extensions
    { start: 0x1D00, end: 0x1D7F },   // Phonetic Extensions
    { start: 0x1D80, end: 0x1DBF },   // Phonetic Extensions Supplement
    { start: 0x1DC0, end: 0x1DFF },   // Combining Diacritical Marks Supplement
    { start: 0x1E00, end: 0x1EFF },   // Latin Extended Additional
    { start: 0x1F00, end: 0x1FFF },   // Greek Extended
    { start: 0x2000, end: 0x206F },   // General Punctuation
    { start: 0x2070, end: 0x209F },   // Superscripts and Subscripts
    { start: 0x20A0, end: 0x20CF },   // Currency Symbols
    { start: 0x20D0, end: 0x20FF },   // Combining Diacritical Marks for Symbols
    { start: 0x2100, end: 0x214F },   // Letterlike Symbols
    { start: 0x2150, end: 0x218F },   // Number Forms
    { start: 0x2190, end: 0x21FF },   // Arrows
    { start: 0x2200, end: 0x22FF },   // Mathematical Operators
    { start: 0x2300, end: 0x23FF },   // Miscellaneous Technical
    { start: 0x2400, end: 0x243F },   // Control Pictures
    { start: 0x2440, end: 0x245F },   // Optical Character Recognition
    { start: 0x2460, end: 0x24FF },   // Enclosed Alphanumerics
    { start: 0x2500, end: 0x257F },   // Box Drawing
    { start: 0x2580, end: 0x259F },   // Block Elements
    { start: 0x2800, end: 0x28FF },   // Braille Patterns
    { start: 0x2900, end: 0x297F },   // Supplemental Arrows-B
    { start: 0x2980, end: 0x29FF },   // Miscellaneous Mathematical Symbols-B
    { start: 0x2A00, end: 0x2AFF },   // Supplemental Mathematical Operators
    { start: 0x2B00, end: 0x2BFF },   // Miscellaneous Symbols and Arrows
    { start: 0x2C00, end: 0x2C5F },   // Glagolitic
    { start: 0x2C60, end: 0x2C7F },   // Latin Extended-C
    { start: 0x2C80, end: 0x2CFF },   // Coptic
    { start: 0x2D00, end: 0x2D2F },   // Georgian Supplement
    { start: 0x2D30, end: 0x2D7F },   // Tifinagh
    { start: 0x2D80, end: 0x2DDF },   // Ethiopic Extended
    { start: 0x2DE0, end: 0x2DFF },   // Cyrillic Extended-A
    { start: 0x2E00, end: 0x2E7F },   // Supplemental Punctuation
    { start: 0x2E80, end: 0x2EFF },   // CJK Radicals Supplement
    { start: 0x2F00, end: 0x2FDF },   // Kangxi Radicals
    { start: 0x2FF0, end: 0x2FFF },   // Ideographic Description Characters
    { start: 0x3000, end: 0x303F },   // CJK Symbols and Punctuation
    { start: 0x3040, end: 0x309F },   // Hiragana
    { start: 0x30A0, end: 0x30FF },   // Katakana
    { start: 0x3100, end: 0x312F },   // Bopomofo
    { start: 0x3130, end: 0x318F },   // Hangul Compatibility Jamo
    { start: 0x3190, end: 0x319F },   // Kanbun
    { start: 0x31A0, end: 0x31BF },   // Bopomofo Extended
    { start: 0x31C0, end: 0x31EF },   // CJK Strokes
    { start: 0x31F0, end: 0x31FF },   // Katakana Phonetic Extensions
    { start: 0x3200, end: 0x32FF },   // Enclosed CJK Letters and Months
    { start: 0x3300, end: 0x33FF },   // CJK Compatibility
    { start: 0x3400, end: 0x4DBF },   // CJK Unified Ideographs Extension A
    { start: 0x4DC0, end: 0x4DFF },   // Yijing Hexagram Symbols
    { start: 0x4E00, end: 0x9FFF },   // CJK Unified Ideographs
    { start: 0xA000, end: 0xA48F },   // Yi Syllables
    { start: 0xA490, end: 0xA4CF },   // Yi Radicals
    { start: 0xA4D0, end: 0xA4FF },   // Lisu
    { start: 0xA500, end: 0xA63F },   // Vai
    { start: 0xA640, end: 0xA69F },   // Cyrillic Extended-B
    { start: 0xA6A0, end: 0xA6FF },   // Bamum
    { start: 0xA700, end: 0xA71F },   // Modifier Tone Letters
    { start: 0xA720, end: 0xA7FF },   // Latin Extended-D
    { start: 0xA800, end: 0xA82F },   // Syloti Nagri
    { start: 0xA830, end: 0xA83F },   // Common Indic Number Forms
    { start: 0xA840, end: 0xA87F },   // Phags-pa
    { start: 0xA880, end: 0xA8DF },   // Saurashtra
    { start: 0xA8E0, end: 0xA8FF },   // Devanagari Extended
    { start: 0xA900, end: 0xA92F },   // Kayah Li
    { start: 0xA930, end: 0xA95F },   // Rejang
    { start: 0xA960, end: 0xA97F },   // Hangul Jamo Extended-A
    { start: 0xA980, end: 0xA9DF },   // Javanese
    { start: 0xA9E0, end: 0xA9FF },   // Myanmar Extended-B
    { start: 0xAA00, end: 0xAA5F },   // Cham
    { start: 0xAA60, end: 0xAA7F },   // Myanmar Extended-A
    { start: 0xAA80, end: 0xAADF },   // Tai Viet
    { start: 0xAAE0, end: 0xAAFF },   // Meetei Mayek Extensions
    { start: 0xAB00, end: 0xAB2F },   // Ethiopic Extended-A
    { start: 0xAB30, end: 0xAB6F },   // Latin Extended-E
    { start: 0xAB70, end: 0xABBF },   // Cherokee Supplement
    { start: 0xABC0, end: 0xABFF },   // Meetei Mayek
    { start: 0xAC00, end: 0xD7A3 },   // Hangul Syllables
    { start: 0xD7B0, end: 0xD7FF },   // Hangul Jamo Extended-B
    { start: 0xD800, end: 0xDB7F },   // High Surrogates
    { start: 0xDB80, end: 0xDBFF },   // High Private Use Surrogates
    { start: 0xDC00, end: 0xDFFF },   // Low Surrogates
    { start: 0xE000, end: 0xF8FF },   // Private Use Area
    { start: 0xF900, end: 0xFAFF },   // CJK Compatibility Ideographs
    { start: 0xFB00, end: 0xFB4F },   // Alphabetic Presentation Forms
    { start: 0xFB50, end: 0xFDFF },   // Arabic Presentation Forms-A
    { start: 0xFE00, end: 0xFE0F },   // Variation Selectors
    { start: 0xFE10, end: 0xFE1F },   // Vertical Forms
    { start: 0xFE20, end: 0xFE2F },   // Combining Half Marks
    { start: 0xFE30, end: 0xFE4F },   // CJK Compatibility Forms
    { start: 0xFE50, end: 0xFE6F },   // Small Form Variants
    { start: 0xFE70, end: 0xFEFF },   // Arabic Presentation Forms-B
    { start: 0xFF00, end: 0xFFEF },   // Halfwidth and Fullwidth Forms
    { start: 0xFFF0, end: 0xFFFF },   // Specials
    { start: 0x10000, end: 0x1007F }, // Linear B Syllabary
    { start: 0x10080, end: 0x100FF }, // Linear B Ideograms
    { start: 0x10100, end: 0x1013F }, // Aegean Numbers
    { start: 0x10140, end: 0x1018F }, // Ancient Greek Numbers
    { start: 0x10190, end: 0x101CF }, // Ancient Symbols
    { start: 0x101D0, end: 0x101FF }, // Phaistos Disc
    { start: 0x10280, end: 0x1029F }, // Lycian
    { start: 0x102A0, end: 0x102DF }, // Carian
    { start: 0x102E0, end: 0x102FF }, // Coptic Epact Numbers
    { start: 0x10300, end: 0x1032F }, // Old Italic
    { start: 0x10330, end: 0x1034F }, // Gothic
    { start: 0x10350, end: 0x1037F }, // Old Permic
    { start: 0x10380, end: 0x1039F }, // Ugaritic
    { start: 0x103A0, end: 0x103DF }, // Old Persian
    { start: 0x10400, end: 0x1044F }, // Deseret
    { start: 0x10450, end: 0x1047F }, // Shavian
    { start: 0x10480, end: 0x104AF }, // Osmanya
    { start: 0x104B0, end: 0x104FF }, // Osage
    { start: 0x10500, end: 0x1052F }, // Elbasan
    { start: 0x10530, end: 0x1056F }, // Caucasian Albanian
    { start: 0x10570, end: 0x105BF }, // Vithkuqi
    { start: 0x10600, end: 0x1077F }, // Linear A
    { start: 0x10780, end: 0x107BF }, // Latin Extended-F
    { start: 0x10800, end: 0x1083F }, // Cypriot Syllabary
    { start: 0x10840, end: 0x1085F }, // Imperial Aramaic
    { start: 0x10860, end: 0x1087F }, // Palmyrene
    { start: 0x10880, end: 0x108AF }, // Nabataean
    { start: 0x108E0, end: 0x108FF }, // Hatran
    { start: 0x10900, end: 0x1091F }, // Phoenician
    { start: 0x10920, end: 0x1093F }, // Lydian
    { start: 0x10980, end: 0x1099F }, // Meroitic Hieroglyphs
    { start: 0x109A0, end: 0x109FF }, // Meroitic Cursive
    { start: 0x10A00, end: 0x10A5F }, // Kharoshthi
    { start: 0x10A60, end: 0x10A7F }, // Old South Arabian
    { start: 0x10A80, end: 0x10A9F }, // Old North Arabian
    { start: 0x10AC0, end: 0x10AFF }, // Manichaean
    { start: 0x10B00, end: 0x10B3F }, // Avestan
    { start: 0x10B40, end: 0x10B5F }, // Inscriptional Parthian
    { start: 0x10B60, end: 0x10B7F }, // Inscriptional Pahlavi
    { start: 0x10B80, end: 0x10BAF }, // Psalter Pahlavi
    { start: 0x10C00, end: 0x10C4F }, // Old Turkic
    { start: 0x10C80, end: 0x10CFF }, // Old Hungarian
    { start: 0x10D00, end: 0x10D3F }, // Hanifi Rohingya
    { start: 0x10E60, end: 0x10E7F }, // Rumi Numeral Symbols
    { start: 0x10E80, end: 0x10EBF }, // Yezidi
    { start: 0x10F00, end: 0x10F2F }, // Old Sogdian
    { start: 0x10F30, end: 0x10F6F }, // Sogdian
    { start: 0x10F70, end: 0x10FAF }, // Old Uyghur
    { start: 0x10FB0, end: 0x10FDF }, // Chorasmian
    { start: 0x10FE0, end: 0x10FFF }, // Elymaic
    { start: 0x11000, end: 0x1107F }, // Brahmi
    { start: 0x11080, end: 0x110CF }, // Kaithi
    { start: 0x110D0, end: 0x110FF }, // Sora Sompeng
    { start: 0x11100, end: 0x1114F }, // Chakma
    { start: 0x11150, end: 0x1117F }, // Mahajani
    { start: 0x11180, end: 0x111DF }, // Sharada
    { start: 0x111E0, end: 0x111FF }, // Sinhala Archaic Numbers
    { start: 0x11200, end: 0x1124F }, // Khojki
    { start: 0x11280, end: 0x112AF }, // Multani
    { start: 0x112B0, end: 0x112FF }, // Khudawadi
    { start: 0x11300, end: 0x1137F }, // Grantha
    { start: 0x11400, end: 0x1147F }, // Newa
    { start: 0x11480, end: 0x114DF }, // Tirhuta
    { start: 0x11580, end: 0x115FF }, // Siddham
    { start: 0x11600, end: 0x1165F }, // Modi
    { start: 0x11660, end: 0x1167F }, // Mongolian Supplement
    { start: 0x11680, end: 0x116CF }, // Takri
    { start: 0x11700, end: 0x1174F }, // Ahom
    { start: 0x11800, end: 0x1184F }, // Dogra
    { start: 0x118A0, end: 0x118FF }, // Warang Citi
    { start: 0x11900, end: 0x1195F }, // Dives Akuru
    { start: 0x119A0, end: 0x119FF }, // Nandinagari
    { start: 0x11A00, end: 0x11A4F }, // Zanabazar Square
    { start: 0x11A50, end: 0x11AAF }, // Soyombo
    { start: 0x11AB0, end: 0x11ABF }, // Unified Canadian Aboriginal Syllabics Extended-A
    { start: 0x11AC0, end: 0x11AFF }, // Pau Cin Hau
    { start: 0x11C00, end: 0x11C6F }, // Bhaiksuki
    { start: 0x11C70, end: 0x11CBF }, // Marchen
    { start: 0x11D00, end: 0x11D5F }, // Masaram Gondi
    { start: 0x11D60, end: 0x11DAF }, // Gunjala Gondi
    { start: 0x11EE0, end: 0x11EFF }, // Makasar
    { start: 0x11FB0, end: 0x11FBF }, // Lisu Supplement
    { start: 0x11FC0, end: 0x11FFF }, // Tamil Supplement
    { start: 0x12000, end: 0x123FF }, // Cuneiform
    { start: 0x12400, end: 0x1247F }, // Cuneiform Numbers and Punctuation
    { start: 0x12480, end: 0x1254F }, // Early Dynastic Cuneiform
    { start: 0x12F90, end: 0x12FFF }, // Cypro-Minoan
    { start: 0x13000, end: 0x1342F }, // Egyptian Hieroglyphs
    { start: 0x13430, end: 0x1343F }, // Egyptian Hieroglyph Format Controls
    { start: 0x14400, end: 0x1467F }, // Anatolian Hieroglyphs
    { start: 0x16800, end: 0x16A3F }, // Bamum Supplement
    { start: 0x16A40, end: 0x16A6F }, // Mro
    { start: 0x16A70, end: 0x16ACF }, // Tangsa
    { start: 0x16AD0, end: 0x16AFF }, // Bassa Vah
    { start: 0x16B00, end: 0x16B8F }, // Pahawh Hmong
    { start: 0x16E40, end: 0x16E9F }, // Medefaidrin
    { start: 0x16F00, end: 0x16F9F }, // Miao
    { start: 0x16FE0, end: 0x16FFF }, // Ideographic Symbols and Punctuation
    { start: 0x17000, end: 0x187F7 }, // Tangut
    { start: 0x18800, end: 0x18AFF }, // Tangut Components
    { start: 0x18B00, end: 0x18CFF }, // Khitan Small Script
    { start: 0x18D00, end: 0x18D08 }, // Tangut Supplement
    { start: 0x1AFF0, end: 0x1AFFF }, // Kana Extended-B
    { start: 0x1B000, end: 0x1B0FF }, // Kana Supplement
    { start: 0x1B100, end: 0x1B12F }, // Kana Extended-A
    { start: 0x1B130, end: 0x1B16F }, // Small Kana Extension
    { start: 0x1B170, end: 0x1B2FF }, // Nushu
    { start: 0x1BC00, end: 0x1BC9F }, // Duployan
    { start: 0x1BCA0, end: 0x1BCAF }, // Shorthand Format Controls
    { start: 0x1CF00, end: 0x1CFCF }, // Znamenny Musical Notation
    { start: 0x1D000, end: 0x1D0FF }, // Byzantine Musical Symbols
    { start: 0x1D100, end: 0x1D1FF }, // Musical Symbols
    { start: 0x1D200, end: 0x1D24F }, // Ancient Greek Musical Notation
    { start: 0x1D2E0, end: 0x1D2FF }, // Mayan Numerals
    { start: 0x1D300, end: 0x1D35F }, // Tai Xuan Jing Symbols
    { start: 0x1D360, end: 0x1D37F }, // Counting Rod Numerals
    { start: 0x1D400, end: 0x1D7FF }, // Mathematical Alphanumeric Symbols
    { start: 0x1D800, end: 0x1DAAF }, // Sutton SignWriting
    { start: 0x1DF00, end: 0x1DFFF }, // Latin Extended-G
    { start: 0x1E000, end: 0x1E02F }, // Glagolitic Supplement
    { start: 0x1E100, end: 0x1E14F }, // Nyiakeng Puachue Hmong
    { start: 0x1E290, end: 0x1E2BF }, // Toto
    { start: 0x1E2C0, end: 0x1E2FF }, // Wancho
    { start: 0x1E7E0, end: 0x1E7FF }, // Ethiopic Extended-B
    { start: 0x1E800, end: 0x1E8DF }, // Mende Kikakui
    { start: 0x1E900, end: 0x1E95F }, // Adlam
    { start: 0x1EC70, end: 0x1ECBF }, // Indic Siyaq Numbers
    { start: 0x1ED00, end: 0x1ED4F }, // Ottoman Siyaq Numbers
    { start: 0x1EE00, end: 0x1EEFF }, // Arabic Mathematical Alphabetic Symbols
    { start: 0x1F000, end: 0x1F02F }, // Mahjong Tiles
    { start: 0x1F030, end: 0x1F09F }, // Domino Tiles
    { start: 0x1F0A0, end: 0x1F0FF }, // Playing Cards
    { start: 0x1F100, end: 0x1F1FF }, // Enclosed Alphanumerics Supplement
    { start: 0x1F200, end: 0x1F2FF }, // Enclosed Ideographic Supplement
    { start: 0x1F300, end: 0x1F5FF }, // Miscellaneous Symbols and Pictographs
    { start: 0x1F600, end: 0x1F64F }, // Emoticons
    { start: 0x1F650, end: 0x1F67F }, // Ornamental Dingbats
    { start: 0x1F680, end: 0x1F6FF }, // Transport and Map Symbols
    { start: 0x1F700, end: 0x1F77F }, // Alchemical Symbols
    { start: 0x1F780, end: 0x1F7FF }, // Geometric Shapes Extended
    { start: 0x1F800, end: 0x1F8FF }, // Supplemental Arrows-C
    { start: 0x1F900, end: 0x1F9FF }, // Supplemental Symbols and Pictographs
    { start: 0x1FA00, end: 0x1FA6F }, // Chess Symbols
    { start: 0x1FA70, end: 0x1FAFF }, // Symbols and Pictographs Extended-A
    { start: 0x1FB00, end: 0x1FBFF }, // Symbols for Legacy Computing
    { start: 0x1FF80, end: 0x1FFFF }, // Unassigned
    { start: 0x20000, end: 0x2A6DF }, // CJK Unified Ideographs Extension B
    { start: 0x2A700, end: 0x2B738 }, // CJK Unified Ideographs Extension C
    { start: 0x2B740, end: 0x2B81D }, // CJK Unified Ideographs Extension D
    { start: 0x2B820, end: 0x2CEA1 }, // CJK Unified Ideographs Extension E
    { start: 0x2CEB0, end: 0x2EBE0 }, // CJK Unified Ideographs Extension F
    { start: 0x2F800, end: 0x2FA1F }, // CJK Compatibility Ideographs Supplement
    { start: 0x2FF80, end: 0x2FFFF }, // Unassigned
    { start: 0x30000, end: 0x3134A }, // CJK Unified Ideographs Extension G
    { start: 0x3FF80, end: 0x3FFFF }, // Unassigned
    { start: 0x4FF80, end: 0x4FFFF }, // Unassigned
    { start: 0x5FF80, end: 0x5FFFF }, // Unassigned
    { start: 0x6FF80, end: 0x6FFFF }, // Unassigned
    { start: 0x7FF80, end: 0x7FFFF }, // Unassigned
    { start: 0x8FF80, end: 0x8FFFF }, // Unassigned
    { start: 0x9FF80, end: 0x9FFFF }, // Unassigned
    { start: 0xAFF80, end: 0xAFFFF }, // Unassigned
    { start: 0xBFF80, end: 0xBFFFF }, // Unassigned
    { start: 0xCFF80, end: 0xCFFFF }, // Unassigned
    { start: 0xDFF80, end: 0xDFFFF }, // Unassigned
    { start: 0xE0000, end: 0xE007F }, // Tags
    { start: 0xE0100, end: 0xE01EF }, // Variation Selectors Supplement
    { start: 0xEFF80, end: 0xEFFFF }, // Unassigned
    { start: 0xFFF80, end: 0xFFFFF }, // Supplementary Private Use Area-A
    { start: 0x10FF80, end: 0x10FFFF }, // Supplementary Private Use Area-B
]}