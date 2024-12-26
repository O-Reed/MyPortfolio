import PropTypes from "prop-types";

interface ButtonPrimaryProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}
interface ButtonOutlineProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  href,
  target = "_self",
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary material-icons-round " + classes}
      >
        {label}
        {icon
          ? <span className="material-icons" aria-hidden="true">
              {icon}
            </span>
          : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}
        {icon
          ? <span className="material-icons" aria-hidden="true">
              {icon}
            </span>
          : undefined}
      </button>
    );
  }
};

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  href,
  target = "_self",
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline material-icons-round " + classes}
      >
        {label}
        {icon
          ? <span className="material-icons" aria-hidden="true">
              {icon}
            </span>
          : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon
          ? <span className="material-icons" aria-hidden="true">
              {icon}
            </span>
          : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

export { ButtonPrimary, ButtonOutline };
