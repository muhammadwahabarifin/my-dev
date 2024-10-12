import styles from './button.module.scss'
import propTypes from "prop-types";

const Button = ({ href, onClick, children, classes, type, ...otherProps }) => {
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
                ${
                  type === "primary"
                    ? !otherProps.disable
                      ? styles.primary__button
                      : styles.primary__disableButton
                    : !otherProps.disable
                    ? styles.secondary__button
                    : styles.secondary__disableButton
                }
                ${additionalClasses}
                `}
      {...otherProps}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  href: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.string.isRequired,
  classes: propTypes.string,
  type: propTypes.string,
};

export default Button;
