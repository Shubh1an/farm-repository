const LocationSvg = ({ color }) => {
  return (
    <svg
      width="17"
      height="28"
      viewBox="0 0 17 28"
      fill={color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.488 15.2875C13.7702 16.7422 12.7977 18.1913 11.8033 19.4925C10.86 20.7193 9.85135 21.8944 8.78174 23.0127C7.71211 21.8944 6.70346 20.7193 5.76016 19.4925C4.76575 18.1913 3.79325 16.7422 3.07553 15.2875C2.34958 13.8178 1.93319 12.4413 1.93319 11.2606C1.93319 9.44423 2.65473 7.70227 3.93908 6.41792C5.22343 5.13356 6.96539 4.41202 8.78174 4.41202C10.5981 4.41202 12.34 5.13356 13.6244 6.41792C14.9087 7.70227 15.6303 9.44423 15.6303 11.2606C15.6303 12.4413 15.2125 13.8178 14.488 15.2875ZM8.78174 24.9577C8.78174 24.9577 17 17.1695 17 11.2606C17 9.08096 16.1342 6.99061 14.5929 5.44939C13.0517 3.90816 10.9614 3.04231 8.78174 3.04231C6.60212 3.04231 4.51177 3.90816 2.97055 5.44939C1.42933 6.99061 0.563477 9.08096 0.563477 11.2606C0.563477 17.1695 8.78174 24.9577 8.78174 24.9577Z"
        fill={color || "white"}
      />
      <path
        d="M8.78198 13.9995C8.05544 13.9995 7.35866 13.7108 6.84492 13.1971C6.33118 12.6834 6.04256 11.9866 6.04256 11.26C6.04256 10.5335 6.33118 9.83672 6.84492 9.32298C7.35866 8.80924 8.05544 8.52062 8.78198 8.52062C9.50852 8.52062 10.2053 8.80924 10.719 9.32298C11.2328 9.83672 11.5214 10.5335 11.5214 11.26C11.5214 11.9866 11.2328 12.6834 10.719 13.1971C10.2053 13.7108 9.50852 13.9995 8.78198 13.9995ZM8.78198 15.3692C9.87179 15.3692 10.917 14.9362 11.6876 14.1656C12.4582 13.395 12.8911 12.3498 12.8911 11.26C12.8911 10.1702 12.4582 9.12506 11.6876 8.35445C10.917 7.58383 9.87179 7.15091 8.78198 7.15091C7.69217 7.15091 6.647 7.58383 5.87639 8.35445C5.10578 9.12506 4.67285 10.1702 4.67285 11.26C4.67285 12.3498 5.10578 13.395 5.87639 14.1656C6.647 14.9362 7.69217 15.3692 8.78198 15.3692Z"
        fill={color || "white"}
      />
    </svg>
  );
};
export default LocationSvg;