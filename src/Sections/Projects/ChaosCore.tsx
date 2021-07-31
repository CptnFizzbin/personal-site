import { FC } from 'react'

import { DiscordBotsScreenshot } from '../../Images'

import styles from './Projects.module.scss'

export const ChaosCore: FC = () => {
  return (
    <div className={styles.Project}>
      <div className={styles.Title}>Chaos-Core</div>
      <div className={styles.Image}>
        <DiscordBotsScreenshot />
      </div>
      <div className={styles.Description}>
        <p>
          While I moderator for a set of Discord Servers dedicated to heroes in
          the video game Overwatch, I wanted a common bot that could track bans
          and provide useful moderation tools to admins and moderators. I also
          had a few other bots that did various tasks such as rolling dice, or
          opening new channel for discussions.
        </p>
        <p>
          Developed as a generic plugin based framework for Discord bots, it
          provided a common base for handling commands, and providing a role
          based permission system around them.
        </p>
        <p>
          The original version was written using RxJS, as I was wanting to learn
          how to use ReactiveX streams, and this seemed like a decent fit.
          Later on, I started to find the RxJS streams too heavy for what the
          bot was doing, and reverted it to using Promises.
        </p>
      </div>
    </div>
  )
}
