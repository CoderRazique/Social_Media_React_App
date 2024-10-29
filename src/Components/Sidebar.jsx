const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-2 p-4 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-5">Social Media</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Create Post");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Create Post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/277104874_1210372863104940_3926251073148324962_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m6GsJ_RYL_0Q7kNvgF7yLoH&_nc_zt=23&_nc_ht=scontent.fbho3-1.fna&_nc_gid=AsMcV85uehnQW1zHVI-rCcB&oh=00_AYA9CQhinIG_OJAJv5DhrZT4GVif3ckj9ZLbXZ3eH1x_nQ&oe=67273701"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Razique</strong>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
