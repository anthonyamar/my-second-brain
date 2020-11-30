# Chords progressions dictionary

I'm tired of searching chords progressions when composing music. So here's my personal dictionary, with official name, and/or sort by subjective emotions and/or music genre.

## How to use ?

Each sequence will be written in degrees follow by an example in C major \(or Am depending the mode\).

## Classic

### Perfect

```text
I V7 I
C Gm C
```

### Modal

```text
I Vm I
C Gm C
```

### Broken

```text
I V7 VI
C G7 Am
```

### Perfect minor

```text
Im V7 Im
Cm G7 Cm
```

### Plagal

```text
I IV I
C F C
```

### Plagal half minor

```text
I IVm I
C Fm C
```

### Plagal half minor with major relative substitute

In C, Ab is the major relative of Fm.

```text
I bVIM I
C Ab C
```

### Plagal minor

```text
Im IVm Im
Am Dm Am
```

### Picard third

```text
Im V7 IM
Am E7 A
```

### Bach

The last chords is a combination of perfect and plagal minor. The diminished chord can be replace by any of his transposition \(as the diminished is what we call a ["transposition limited chords"](https://harmoniousapp.net/p/b8/Glossary-Limited-Transposition)\)

```text
I bVI°
C Ab°
```

### Complete

```text
I IV V7 I
C F G7 C
```

### Complete minor

```text
Im IVm V7 Im
Am Dm E7 Am
```

### Complete minor with relative major dominant

```text
Im IVm bVII7 Im
Am Dm G7 Am
```

### Avoided

We can avoid the `I` by substituting it with any chords that include the top note of a melody. E.G

```text
I V7 [bII7M, bVIM, IVm6].sample
C G7 [Db7M, Ab, Fm6].sample
```

### Avoided minor

```text
Im V7 bVI7
Am E7 F7
```

## Jazz

### II-V-I \(complete with substitution\)

We can substitute any `IV` by a `II`. It results in the very popular `II-V-I`

```text
I II V7 I
C Dm G7 C
```

### Minor II-V-I \(Complete minor with substitution\)

```text
Im IIm7b5 V7 Im
Am Bm7b5 G7 Am
```

### Anatole

```text
I VI II V7 (I)
C Am Dm G7 (C)
```

### Anatole with substitution

Any II can be substituted with a IV

```text
I VI IV V7 (I)
C Am F G7 (C)
```

### Christophe

```text
I I7 IV IVm
C C7 F Fm
```

### Christophe with diminished

```text
I I7 IV #IV°
C C7 F F#°
```

### Modal minor

```text
Im Vm(7) Im
Am Em(7) Am
```

### Modal

Chords nature can be change with any hi-lo : `m7`, `m6`, `m9`, `m11` and any combination.

```text
Im7 IIm7
Am7 Bm7
```

## Reggae

### War

As I called it : it's the chord progression of Bob Marley - War. Used in so much reggae...

```text
Im bVII
Cm Bb
```

### Happy war

Just because the `I` is now major.

```text
I bVII
C Bb
```

## Funk

### War dominant

We can "dominantize" every `I` chord

```text
I7 bVII7 I7
C7 Bb7 C7
```

## Pop

### Tonic sus4

```text
I V7 Isus4 I
C G7 Csus4 C
```

### Dominant sus4

```text
I V7sus4 V7 I
C G7sus4 G7 C
```

### Circle of fifth

```text
Im IVm VII7 III VI IIm7b5 V7 Im
Am Dm  G7   C   F  Bm7b5  E7 Am
```

### Pop

```text
Im VII VI VII
Am G   F  G
```

### Message in the bottle

```text
Im VI VII IVm
Am F  G   Dm
```

### Magic chords

```text
Im VI III VII
Am F  C   G
```

## Rock

### Celtic

```text
I bVII IV I
C Bb F C
```

### Andalusian

```text
Im VII(7) VI V7
Am G(7)   F  E7
```

## Brazilian

### Nordestine

```text
I II7 I
C D7 C
```

### Napolitana sixth

```text
Im IIb7M Im
Am Bb7M Am
```

