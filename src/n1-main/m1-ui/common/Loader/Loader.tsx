import React from "react";
import styles from './Loader.module.css';
import Box from "@material-ui/core/Box";

const Loader = () => {
    return <Box mt={2} mb={2}>
        <span className={styles.load}/>
    </Box>
}

export default Loader;
