export function updateResumeData(url) {
  return dispatch => {
    $.ajax({
      url: url,
      dataType:'json',
      cache: false,
      success: function(data) {
        dispatch({ type: 'UPDATE_DATA', data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
}
