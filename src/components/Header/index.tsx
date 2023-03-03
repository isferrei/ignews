import { ActiveLink } from "../Activelink";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {


  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href="/" prefetch activeClassName={styles.active}>
            <span>Home</span>
          </ActiveLink>
          <ActiveLink href="/posts" prefetch activeClassName={styles.active}>
            <span>Posts</span>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
