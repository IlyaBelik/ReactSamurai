import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {message: 'Hello', date: '07.12.2020', likes: 54},
            {message: 'Здарова', date: '07.12.2020', likes: 27}
        ],
        newPostText: 'Ilya'
    },
    messagesPage: {
        messages: [
            {messageText: 'Hi'},
            {messageText: 'Yo'},
            {messageText: 'What is up?'},
            {messageText: 'Здарова'},
        ], dialog: [
            {name: 'Max', id: 1},
            {name: 'Boris', id: 2},
            {name: 'Solya', id: 3},
            {name: 'Ilya', id: 4}
        ]
    },
}

window.state = state

export let addPost = () => {
    // debugger
    let newPost = {
        message: state.profilePage.newPostText,
        date: '09.12.2020',
        likes: 0
    };
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)

};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state