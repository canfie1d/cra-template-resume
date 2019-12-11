export function updateResumeData(data) {
  return dispatch => {
    dispatch({ type: 'UPDATE_DATA', data });
  }
}
