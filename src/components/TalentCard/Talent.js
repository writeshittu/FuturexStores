// import { useHistory } from "react-router-dom";
import styles from "./stylles.module.css";
const TalentPool = () => {
  // const history = useHistory();

  return (
    <div className={styles.talent_card}>
      <div className={styles.content_header}>
        <div>
          <img
            src="https://partners.9ijakids.com//index.php//thumbnail?game=Mathsmania%20City%20-%20Decimals"
            alt="user_photo"
            width="90px"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p style={{ marginBottom: "4px" }}>Technical assessment</p>
        </div>
      </div>
    </div>
  );
};

export default TalentPool;
