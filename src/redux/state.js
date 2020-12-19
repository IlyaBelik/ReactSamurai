let store = {
    _state: {
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
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        // debugger
        let newPost = {
            message: this._state.profilePage.newPostText,
            date: '09.12.2020',
            likes: 0
        };
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this.state);
    },
    subscriber(observer) {
        this._callSubscriber = observer
    }
}
window.store = store

// export const addPost = () => {
//     // debugger
//     let newPost = {
//         message: state.profilePage.newPostText,
//         date: '09.12.2020',
//         likes: 0
//     };
//     state.profilePage.postsData.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
//
// };


export default store