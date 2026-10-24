---
title: LaTeX Formatting Guide
tags: []
---
# LaTeX Formatting Guide for Beginners


LaTeX is a high-quality typesetting system widely used for scientific and mathematical documentation. In platforms like AFFiNE, Notion, or Obsidian, LaTeX is used to display clean formulas.


## 1. The Basics: How to Write LaTeX


* **Inline Math:** Wrap your code in single dollar signs (`$x^2$`) to keep it inside a text line.


* **Block Math:** Wrap your code in double dollar signs (`$$x^2$$`) or a math block to center it on its own line.


## 2. Common Mathematical Elements


### Fractions & Division


* Syntax: `\frac{numerator}{denominator}`


* Example: `\frac{1}{2}` renders as 1/2.


* Complex Example: `\frac{x + 1}{y - 1}`


### Exponents & Subscripts


* **Superscript (Powers):** Use the caret `^` symbol. Example: `x^2` or `e^{i\pi}` (use curly braces for multiple characters).


* **Subscript:** Use the underscore `_` symbol. Example: `x_n` or `x_{lower}`.


### Roots


* **Square Root:** `\sqrt{x}`


* **N-th Root:** `\sqrt[3]{x}`


### Greek Letters


Simply type a backslash followed by the name of the letter:


* Lowercase: `\alpha`, `\beta`, `\pi`, `\theta`, `\sigma`


* Uppercase: `\Gamma`, `\Delta`, `\Omega`


## 3. Modular Arithmetic (Useful for Ciphers)


* **Modulo Text:** Use `\pmod{m}` or `\bmod`


* **Congruence Symbol ( ):** `\equiv`


* **Multiplication Sign ( ):** `\times`


* Example Cipher Equation: `E(x) \equiv (ax + b) \pmod{26}`


## 4. Matrices & Systems of Equations


To stack equations or make lists:


```latex
\begin{matrix} 
a & b \\ 
c & d 
\end{matrix}
```



---


_This guide is optimized for quick lookup in digital notebook environments._


