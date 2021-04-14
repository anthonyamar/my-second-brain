## Logic gates as fundamental electronic computers components

Logic gates are model of computation or electronics that performs logic operations using boolean functions. 

Logic gates takes two binary digits in input and output one binary digit. 

The most basic logic gates are the [AND](Logic%20gates.md#AND) and [OR](Logic%20gates.md#OR). All of the other gates, like the NAND, NOR, XOR and XNOR gates, are just combinations of these two logic gates. We say that the set `{AND, OR}` is a [universaly complete set](Universaly%20complete%20set.md).

Using basic electronics circuits, we could just create these two using 2 switches (A and B) and an LED. Put in parallele, the cricuit is lighting the LED when one of the two switches let the current pass and also when both together are activated, it's an OR gate. At the opposite, if the circuit is built with those two swicthes in series, the LED is lighted only when the two switches together are activated, it's an AND gate. 

We can abstract a bit and a switch is on by 1 in binary, and an off one by 0 in binary, and say the same for the LED : LED on = 1, off = 0. 

Using this, we can enable truth tables like this :

## OR
| SWITCH A | SWITCH B | OUTPUT LED |
| -------- | -------- | ---------- |
| 0        | 0        | 0          |
| 0        | 1        | 1          |
| 1        | 0        | 1          |
| 1        | 1        | 1          |

![500](OR-GATE-FIG-2-compressor.jpg)

In [electronics](Electronics.md), this is the symbol used: 

![300](Screenshot%202021-04-09%20at%2023.18.16.png)

## AND
| SWITCH A | SWITCH B | OUTPUT LED |
| -------- | -------- | ---------- |
| 0        | 0        | 0          |
| 0        | 1        | 0          |
| 1        | 0        | 0          |
| 1        | 1        | 1          |

![500](AND-GATE-FIG-4-compressor%201.jpg)

Symbol:

![300](Screenshot%202021-04-09%20at%2023.17.30.png)

## NAND
| SWITCH A | SWITCH B | OUTPUT LED |
| -------- | -------- | ---------- |
| 0        | 0        | 1          |
| 0        | 1        | 1          |
| 1        | 0        | 1          |
| 1        | 1        | 0          |

## NOR
| SWITCH A | SWITCH B | OUTPUT LED |
| -------- | -------- | ---------- |
| 0        | 0        | 1          |
| 0        | 1        | 0          |
| 1        | 0        | 0          |
| 1        | 1        | 0          |

## XNOR
| SWITCH A | SWITCH B | OUTPUT LED |
| -------- | -------- | ---------- |
| 0        | 0        | 0          |
| 0        | 1        | 1          |
| 1        | 0        | 1          |
| 1        | 1        | 0          |

## IMPLY
More exotic, it's implementing a "logical conditional", using the `->`  symbol.
The conditional is "When A is true then output follows B, otherwise, it is true". It's the combination of a NOT and a OR gate, making it a [universaly complete set](Universaly%20complete%20set.md). IMPLY is meant to be functionnaly complete.

| SWITCH A | SWITCH B | OUTPUT LED |
| -------- | -------- | ---------- |
| 0        | 0        | 1          |
| 0        | 1        | 1          |
| 1        | 0        | 0          |
| 1        | 1        | 1          |

## NIMPLY
| SWITCH A | SWITCH B | OUTPUT LED |
| -------- | -------- | ---------- |
| 0        | 0        | 0          |
| 0        | 1        | 0          |
| 1        | 0        | 0          |
| 1        | 1        | 1          |



