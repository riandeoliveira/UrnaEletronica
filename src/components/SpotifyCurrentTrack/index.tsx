import type { ReactElement } from "react";
import { SiSpotify } from "react-icons/si";
import styles from "./styles.module.scss";

type SpotifyCurrentTrackProps = {
  userId: string;
  barColor: string;
};

export const SpotifyCurrentTrack = ({
  userId,
  barColor,
}: SpotifyCurrentTrackProps): ReactElement => {
  return (
    <div className={styles.box}>
      <div className={styles.title_box}>
        <span className={styles.title}>Ouvindo agora no</span>
        <SiSpotify size={24} fill="#1db954" />
      </div>
      <iframe
        src={`https://spotify-github-profile.vercel.app/api/view?uid=${userId}&cover_image=true&theme=novatorem&show_offline=false&background_color=ffffff&interchange=true&bar_color=${barColor}&bar_color_cover=false`}
        title="spotify-github-profile"
        tabIndex={-1}
        className={styles.iframe}
      />
    </div>
  );
};
