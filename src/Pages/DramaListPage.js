import React, { useEffect } from "react";
import { connect } from "react-redux";

// Bring in the asynchronous fetchDramas action
import { fetchDramas } from "../Actions/dramasActions";
import { Drama } from "../Components/Drama";
import LoadFail from "../Components/LoadFail";
import Loading from "../Components/Loading";

const DramaListPage = ({ dispatch, loading, dramas, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchDramas());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderDramas = () => {
    if (loading) return <Loading />;
    if (hasErrors) return <LoadFail />;
    return dramas.map((drama) => <Drama key={drama.id} drama={drama} />);
  };

  return (
    <section className="container">
      <h1>Drama List</h1>
      <div className="jumbotron">{renderDramas()}</div>
    </section>
  );
};

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.dramas.loading,
  dramas: state.dramas.dramas,
  hasErrors: state.dramas.hasErrors,
});

// Connect Redux to React
export default connect(mapStateToProps)(DramaListPage);
