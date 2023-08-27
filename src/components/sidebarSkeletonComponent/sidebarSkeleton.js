import "./sidebar.css";

function SidebarSkeleton() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <div className="sidebar__skeleton"></div>
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <div className="sidebar__skeleton"></div>
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <div className="sidebar__skeleton"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarSkeleton;
