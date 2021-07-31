import { FC } from 'react'

import { ScoreboardIoScreenshot } from '../../Images'

import styles from './Projects.module.scss'

export const ScoreboardApp: FC = () => {
  return (
    <div className={styles.Project}>
      <div className={styles.Title}>Scoreboard-IO.ca</div>
      <div className={styles.Image}>
        <ScoreboardIoScreenshot />
      </div>
      <div className={styles.Description}>
        <p>
          A scoreboard app, primarily written for the card game Wizard, I
          envisioned as a more generic place to record and track scores in card
          games and boardgames.
        </p>
        <p>
          Rewritten a few times over the last few years as new technologies were
          released. Original version was written with AngularJS using material
          design. Then over the course of a 5-hour road trip I rewrote it using
          React and Redux.
        </p>
        <p>
          This was the project that I primarily learned React with, and is my
          most complete side project
        </p>
      </div>
    </div>
  )
}
