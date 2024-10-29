const LoadingSpanner = () => {
  return (
    <div className="d-flex pt-5 mt-5 justify-content-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", fontWeight: "700", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpanner;
