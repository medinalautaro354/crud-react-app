import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

class Post extends React.Component {
  deletedPost = () => {
    const { id } = this.props.post;

    Swal.fire({
      title: "Esta seguro?",
      text: "Esta a punto de eliminar un post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        this.props.deletePost(id);

        Swal.fire("Eliminado!", "El post ha sido eliminado.", "success");
      }
    });
  };
  render() {
    const { id, title } = this.props.post;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>
          <Link to={`/posts/${id}`} className="btn btn-primary">
            Ver
          </Link>
          <button
            type="button"
            className="btn-danger"
            onClick={this.deletedPost}
          >
            Borrar
          </button>
          <Link to={`/editar/${id}`} className="btn btn-warning">
            Editar
          </Link>
        </td>
      </tr>
    );
  }
}

export default Post;
