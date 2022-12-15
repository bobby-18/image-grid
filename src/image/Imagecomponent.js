import React from "react";
export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <img
          className="small"
          src="https://static1.bigstockphoto.com/4/2/2/large1500/224366719.jpg"
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src="https://media.istockphoto.com/photos/big-and-small-picture-id172759822?b=1&k=20&m=172759822&s=170667a&w=0&h=kkmaR2OYuS14rTiEotbzXoBecwnRePNC79Jsgl3M4dY="
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
  }
}
