import s from "./FriendsList.module.css";
import Friend from "./Friend/Friend";

const FriendsList = (props) => {

    let friendsElements = props.friends
        .map((fr) => <Friend name={ fr.name } img={ fr.img }/>)

    return (
        <div>
            <h2>Друзья</h2>
            { friendsElements }
        </div>
    );
}

export default FriendsList