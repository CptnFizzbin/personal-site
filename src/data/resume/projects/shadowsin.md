# ShadowSIN

ShadowSIN was a project I had developed while I was participating in
a [ShadowRun 6th edition](https://www.shadowrunsixthworld.com/) campaign. At the time
6th edition was brand new and hot off the presses so there wasn't any player aids built for it yet, and so I had
started work on creating a character manager for the game.

It made heavy use of use of React's Component structure and Contexts to allow for updates to cascade
through the sheet when health or stun was updated, or to allow equipment to update stats based on who was holding it
and what other items were equipped.

There were plans for a backend component that would allow for others to manage their characters, but since it was
actively being used by the players at the table, I had opted to manually update characters between session.

The project ultimately died when we stopped playing ShadowRun and moved onto other games. But I am still very happy with
how much I got working in the project when we were playing.

As of 2025, I had updated the project to Node 24, React 19, and React Router 6 to allow it to still be viewed today.