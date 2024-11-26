import "./Avatar.css";

const Avatar = (user, size = "md") => {
  if (user.img) {
    return `
    <div class="avatar ${size}">
      <img src="${user.img}" alt="${user.name} avatar"/>
    </div>
    `;
  } else {
    return `
    <div class="avatar ${size}">
      <h3>${user.name[0].toUpperCase()}</h3>
    </div>
    `;
  }
};

export default Avatar;
