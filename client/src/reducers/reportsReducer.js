const initialReports = {
  reports: [],
};
const reportReducer = (state = initialReports, action) => {
  const reports = state.initialReports;
  switch (action.type) {
    case 'FETCH_REPORTS':
      return { ...state, reports: [...state.reports, action.payload] };

    default:
      return state;
  }
};

export default reportReducer;
