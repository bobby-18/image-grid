
function Image({ data, handleClick }) {
  return (
    <div onClick={handleClick}>
      <div className="photo">
        <img src={data.urls.small} alt="" className="v-stretch" />
      </div>
    </div>
  );
}
export default Image;
