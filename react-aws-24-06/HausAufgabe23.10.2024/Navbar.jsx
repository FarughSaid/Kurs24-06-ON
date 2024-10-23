import StandardBtn from './common/standard-btn/StandardBtn';
import CustomTextField from './common/custom/CustomTextField';
import styles from './Navbar.module.css'; // Assuming CSS modules are being used

function Navbar({ placeholder, value, onChange }) {
  return (
    <div className={styles.navbar}>
      <StandardBtn />
      <CustomTextField 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
}

export default Navbar;
