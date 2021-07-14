import "./style.css";
import PropTypes from "prop-types";

const GithubUI = (_) => {
  const testFiles = [
    {
      id: 1,
      name: "src",
      type: "folder",
      updated_at: "2016-07-11 21:24:00",
      latestCommit: {
        message: "Initial commit",
      },
    },
    {
      id: 2,
      name: "tests",
      type: "folder",
      updated_at: "2016-07-11 21:24:00",
      latestCommit: {
        message: "Initial commit",
      },
    },
    {
      id: 3,
      name: "README",
      type: "file",
      updated_at: "2016-07-18 21:24:00",
      latestCommit: {
        message: "Added a readme",
      },
    },
  ];
  const FileList = ({ files }) => (
    <table className="file__list">
      <tbody>
        {files.map((file) => (
          <FileListItem key={file.id} file={file} />
        ))}
      </tbody>
    </table>
  );
  const FileListItem = ({ file }) => (
    <tr className="file__list__item" key={file.id}>
      <td className="file__name">{file.name}</td>
    </tr>
  );
  FileList.propTypes = {
    files: PropTypes.array,
  };
  FileListItem.propTypes = {
    file: PropTypes.object.isRequired,
  };
  return (
    <>
      <FileList files={testFiles} />
    </>
  );
};
export default GithubUI;
