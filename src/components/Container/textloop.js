import React from "react";
import TextLoop from "react-text-loop/es";
import styles from "../Cards/Cards.module.css";
const warning1 = () => {
    return(
        <div className={styles.loading}>
            <h1>Stay Home=
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }} interval={2000}>
                    <span> Safe</span>
                    <span> Healthy</span>
                </TextLoop>
            </h1>
        </div>
    );
    
}
export default warning1();
