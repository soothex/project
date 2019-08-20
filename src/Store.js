import { observable, decorate, action } from 'mobx';

class Store {
    userName = 'testtext'
    userData = null

    getRandomUser() {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(json => {
                this.userData = json.results;
            })
    }
}

decorate(Store, {
    User: observable,
    userData: observable,
    getRandomUser: action.bound,
});

export default Store;