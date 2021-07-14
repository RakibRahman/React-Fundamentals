import moment from "moment";
import "./App.css";
const App = (_) => {
  const testTweet = {
    message: "This World Shall Know Pain",
    gravatar: `https://picsum.photos/200/300?random=1`,
    author: {
      handle: "akatssukiLeader",
      name: "Rakib Rahman",
    },
    likes: 2,
    retweets: 0,
    timestamp: "2021-07-12 21:24:37",
  };
  const Tweet = ({ tweet }) => {
    function Author({ author }) {
      const { name, handle } = author;
      return (
        <div>
          <p>
            {name} @{handle}
          </p>
        </div>
      );
    }
    function Message({ message }) {
      return <p>{message}</p>;
    }
    function ProfilePic({ gravatar }) {
      return (
        <div>
          <img src={gravatar} alt="pic" />
        </div>
      );
    }
    function Time({ time }) {
      const timeString = moment(time).fromNow();
      return (
        <div>
          <span>{timeString}</span>
        </div>
      );
    }
    function Buttons() {
      return (
        <div className="buttons">
          <button>
            <i className="fa fa-reply-all"></i>
          </button>

          <button>
            <i className="fa fa-retweet"></i>
          </button>
          <button>
            <i className="fa fa-heart"></i>
          </button>
          <button>
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
      );
    }
    return (
      <div>
        <ProfilePic gravatar={tweet.gravatar} />
        <Author author={tweet.author} />
        <Message message={tweet.message} />
        <Time time={tweet.timestamp} />
        <Buttons />
      </div>
    );
  };

  return (
    <div>
      <Tweet tweet={testTweet} />
    </div>
  );
};
export default App;
