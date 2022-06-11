import styles from "./Navbar.module.scss";
import { useTheme } from "hooks/useTheme";
import { useMemo, useRef, useState } from "react";
import { clsnm } from "utils/clsnm";
import { FaBars, FaCopy, FaTimes } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { PATHS } from "constants/paths";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Modal } from "ui";
import TestLogo from "assets/images/testlogo.png";
import {
  useAuth,
  useConnection,
  useRightNetwork,
  useAccount,
} from "ethylene/hooks";
import { GOERLI } from "constants/networks";
import { formatAddress } from "utils/formatAddress";
import { MdAccountCircle } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { useModal } from "hooks";
import { toast } from "react-toastify";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const auth = useAuth();
  const { isRightNetwork, switchTo } = useRightNetwork(GOERLI);
  const { connect, disconnect } = useConnection();
  const { address } = useAccount();

  const LINKS = useMemo(() => {
    return [
      {
        name: "Home",
        url: PATHS.home,
        soon: false,
        active: pathname === PATHS.home,
      },
      {
        name: "Swap",
        url: PATHS.swap,
        soon: false,
        active: pathname.startsWith(PATHS.swap),
      },
      {
        name: "Market",
        url: PATHS.market,
        soon: false,
        active: pathname.startsWith(PATHS.market),
      },
    ];
  }, [pathname]);

  const [show, setShow] = useState(false);
  const smallMenuRef = useRef<HTMLDivElement>(null);
  const modal = useModal();

  return (
    <header className={styles.navbar} id="PeraFinanceHeader">
      <Modal isOpen={modal.isOpen} close={modal.close}>
        <div className={styles.modal}>
          <span>Ethereum Account</span>
          <div className={styles.inner}>
            <div
              style={{ justifyContent: "space-between" }}
              className={styles.row}
            >
              <span>Connected</span>
              <Button
                onClick={() => {
                  modal.close();
                  disconnect();
                }}
                color="pink"
              >
                Disconnect
              </Button>
            </div>
            {address && (
              <div
                style={{ justifyContent: "space-between" }}
                className={styles.row}
              >
                <span className={styles.address}>{formatAddress(address)}</span>
              </div>
            )}
            {address && (
              <div
                style={{ justifyContent: "space-between" }}
                className={styles.row}
              >
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(address).then(() => {
                      toast("Address copied to clipboard", { autoClose: 1000 });
                    });
                  }}
                  className={styles.copy}
                >
                  <FaCopy />
                  <span>Copy to clipboard</span>
                </span>
              </div>
            )}
          </div>
          <div className={styles.nfts}>
            <Link to={"/nfts"} className={clsnm(styles.profile, "link")}>
              See my NFT's
            </Link>
          </div>
        </div>
      </Modal>
      <nav>
        <Container className={styles.container}>
          <div className={styles.left}>
            <div className={styles.logoWrapper}>
              <Link className="link" to="/">
                <img alt="Pera Finance Logo" src={TestLogo} />
              </Link>
            </div>
            <div className={styles.links}>
              {LINKS.map((item) => (
                <div key={item.name} className={styles.linkWrapper}>
                  <Link
                    className={clsnm(styles.link, item.active && styles.active)}
                    to={item.soon ? "#" : item.url}
                  >
                    {item.name}
                  </Link>
                  {item.soon && <span className={styles.soon}>SOON</span>}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.buttons}>
            <Button
              textPosition="right"
              height="48px"
              onClick={() => {
                if (!auth) connect();
                if (!isRightNetwork) {
                  switchTo();
                } else {
                  modal.open();
                }
              }}
              color="neutral"
              className={clsnm(styles.themeChanger, styles.accountButton)}
            >
              <span className={styles.walletIcon}>
                {auth && isRightNetwork ? <MdAccountCircle /> : <IoMdWallet />}
              </span>

              {!isRightNetwork && auth
                ? "Switch to Goerli"
                : auth && address
                ? `${formatAddress(address)}`
                : "Connect"}
            </Button>
            <Button
              height="48px"
              onClick={toggleTheme}
              color="neutral"
              className={styles.themeChanger}
            >
              {theme === "dark" ? <BsMoonFill /> : <BsSunFill />}
            </Button>
            <button
              onClick={() => {
                setShow(!show);
                if (!smallMenuRef.current) return;
                if (!show === true) {
                  smallMenuRef.current.animate(
                    [{ opacity: 0 }, { opacity: 1 }],
                    {
                      duration: 200,
                      fill: "forwards",
                    }
                  );
                } else {
                  smallMenuRef.current.animate(
                    [{ opacity: 1 }, { opacity: 0 }],
                    {
                      duration: 200,
                      fill: "forwards",
                    }
                  );
                }
              }}
              className={styles.bar}
            >
              {show ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </Container>
      </nav>
      <div
        ref={smallMenuRef}
        className={clsnm(styles.smallMenu, !show && styles.hide)}
      >
        {LINKS.map((item) => (
          <div key={item.name} className={styles.linkWrapper}>
            <Link
              className={clsnm(styles.link, item.active && styles.active)}
              to={item.soon ? "#" : item.url}
            >
              {item.name}
            </Link>
            {item.soon && <span className={styles.soon}>SOON</span>}
          </div>
        ))}
        <button
          onClick={toggleTheme}
          color="neutral"
          className={styles.themeChangerSm}
        >
          {theme === "dark" ? <BsMoonFill /> : <BsSunFill />}
        </button>
      </div>
    </header>
  );
};

export { Navbar };
