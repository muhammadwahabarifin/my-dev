import { SOCIAL_lINKS } from 'constants';
import styles from './profiles.module.scss'
import { Icon } from "@/components/Icons";

const Profiles = () => {
  return (
    <div className={styles.profile}>
      {SOCIAL_lINKS &&
        SOCIAL_lINKS.map(({ name, url }) => (
          <a
            href={url}
            key={name}
            className="link"
            rel="noreferrer"
            target="_blank"
            aria-label={name}
          >
            <Icon name={name} />
          </a>
        ))}
    </div>
  );
};

export default Profiles;
