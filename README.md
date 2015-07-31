randomPwGen
===========

Javascript Random Password Generator

This is a Javascript Random Password Generator. Basically what it does is create any length char password using nothing but ABC, abc and some symbols, all this randomly.
You can edit the probability of those elements in the probs array.

To use it's is very easy, all you need to do is include either random-min.js (Not fully readable), or random.js (Readable) to your HTML page by using:
_______________
`<script type="text/javascript" src="random-min.js"></script>`
_______________

And in the return element where you want the random password to go, add this onclickproperty:
_______________
`onclick="this.innerHTML = GenPassword(length)"`
_______________


Here's a DEMO: www.oryzhon.com/random

Some example passwords created by it:

```
15 chars: Rn3t14L0+K%0DR!

10 chars: dn7ix9%1+B

08 chars: !+OI*+90
```

=================

Read License for licensing and use information.
