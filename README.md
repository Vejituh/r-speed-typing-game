# r-speed-typing-game
Speed typing game using React, React Hooks.

In this game I first use React controlled forms to setState for <code><textarea /></code>
It then uses <code>useEffect()</code> to set a timer that counts down by using <code>prevTimeLeft</code> This then updates evertime <code>[timeLeft]</code> changes.

This is my first React app that I used <code>useRef</code> so that when the <code>start game</code> button is clicked, <code>gameStart()</code> sets the focus on the <code><textarea></code> so the user can start typing right away.