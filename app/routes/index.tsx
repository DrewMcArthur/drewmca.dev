import Background from "~/components/background";
import Headline from "~/components/headline";
import SocialLinks from "~/components/socialLinks";
import styles from "~/styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div className='index' style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Background />
      <Headline />
      <SocialLinks />
    </div>
  );
}
